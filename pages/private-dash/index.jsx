import styles from "./index.module.scss";
import { AiOutlineDelete, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { uploadFileToFirebase } from "../../firebase/config";
import { useState, useEffect } from "react";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import Loading from "../../components/Loading/Loading";
import $ from "jquery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import Link from "next/link";
import { useAppContext } from "../../context/AppContext";
import { useRouter } from "next/router";

const index = () => {
  const [arrayWithHeroData, setArrayWithHeroData] = useState([]);
  const [arrayWithPromosData, setArrayWithPromosData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [lastOrderNumberHero, setLastOrderNumberHero] = useState();
  const [lastOrderNumberPromos, setLastOrderNumberPromos] = useState();

  const { userLogged, userLogOut } = useAppContext();

  const router = useRouter();

  const handleLogOut = async () => {
    await userLogOut().then(() => {
      router.push("/");
    });
  };

  const getProductsFromFirebase = async (collectionToUse) => {
    const db = getFirestore();

    if (collectionToUse === "hero") {
      const queryCollection = collection(db, collectionToUse);

      await getDocs(queryCollection).then((res) => {
        setArrayWithHeroData(
          res.docs.map((item) => ({ ...item.data(), id: item.id }))
        );

        let heroOrderedCollection = res.docs
          .map((item) => ({ ...item.data(), id: item.id }))
          .sort(function (a, b) {
            return a.sort - b.sort;
          });
        const lastHero =
          heroOrderedCollection[heroOrderedCollection.length - 1];
        setLastOrderNumberHero(lastHero.sort);
      });
    } else {
      const queryCollection = collection(db, collectionToUse);

      await getDocs(queryCollection).then((res) => {
        setArrayWithPromosData(
          res.docs.map((item) => ({ ...item.data(), id: item.id }))
        );
        let promosOrderedCollection = res.docs
          .map((item) => ({ ...item.data(), id: item.id }))
          .sort(function (a, b) {
            return a.sort - b.sort;
          });
        const lastPromos =
          promosOrderedCollection[promosOrderedCollection.length - 1];
        setLastOrderNumberPromos(lastPromos.sort);
      });
    }
    setLoading(false);
  };

  const handleDelete = (url, location) => {
    if (location === "hero") {
      setArrayWithHeroData((arrayWithHeroData) => {
        return arrayWithHeroData.filter((value) => value.previewUrl !== url);
      });
    } else {
      setArrayWithPromosData((arrayWithPromosData) => {
        return arrayWithPromosData.filter((value) => value.previewUrl !== url);
      });
    }
  };

  const readImageAndConvertToSrc = (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = callback;
    reader.readAsDataURL(file);
  };

  const saveDataInArray = (
    e,
    location,
    device,
    imageFile,
    order,
    imageAlt,
    heroTitle,
    heroSubtitle,
    heroButtonLink,
    heroPosition,
    imageFileTop,
    mobileButtonPosition,
    desktopImagePosition
  ) => {
    e.preventDefault();
    if (location === "hero") {
      Boolean(imageFileTop)
        ? readImageAndConvertToSrc(imageFile, (e) => {
            setArrayWithHeroData([
              ...arrayWithHeroData,
              {
                previewUrl: e.target.result,
                url: imageFile,
                order: order,
                topUrl: imageFileTop,
                device: device,
                imgAlt: imageAlt,
                title: heroTitle,
                subtitle: heroSubtitle,
                buttonLink: heroButtonLink,
                heroPosition: heroPosition,
                mobileButtonPosition: mobileButtonPosition,
                desktopImagePosition: desktopImagePosition,
              },
            ]);
          })
        : readImageAndConvertToSrc(imageFile, (e) => {
            setArrayWithHeroData([
              ...arrayWithHeroData,
              {
                previewUrl: e.target.result,
                url: imageFile,
                order: order,
                device: device,
                imgAlt: imageAlt,
                title: heroTitle,
                subtitle: heroSubtitle,
                buttonLink: heroButtonLink,
                heroPosition: heroPosition,
                mobileButtonPosition: mobileButtonPosition,
                desktopImagePosition: desktopImagePosition,
              },
            ]);
          });
    } else if (location === "promos") {
      readImageAndConvertToSrc(imageFile, (e) => {
        setArrayWithPromosData([
          ...arrayWithPromosData,
          {
            previewUrl: e.target.result,
            device: device,
            url: imageFile,
            order: order,
            imgAlt: imageAlt,
          },
        ]);
      });
    } else {
      return new Error("Hubo un error, por favor vuelva a intentar más tarde");
    }
    setLoading(false);
  };

  const saveDataToFirebase = async (firebaseCollectionName) => {
    try {
      if (firebaseCollectionName === "hero") {
        for (const dataToUpload of arrayWithHeroData.filter(
          (dataToUpload) => dataToUpload.id == null
        )) {
          if (dataToUpload.topUrl != null) {
            const generatedFirebaseUrl = await uploadFileToFirebase(
              dataToUpload.url,
              firebaseCollectionName
            );
            const generatedTopFirebaseUrl = await uploadFileToFirebase(
              dataToUpload.topUrl,
              firebaseCollectionName
            );

            const db = await getFirestore();

            await addDoc(collection(db, firebaseCollectionName), {
              url: generatedFirebaseUrl,
              order: dataToUpload.order,
              topUrl: generatedTopFirebaseUrl,
              imgAlt: dataToUpload.imgAlt,
              title: dataToUpload.title,
              device: dataToUpload.device,
              subtitle: dataToUpload.subtitle,
              buttonLink: dataToUpload.buttonLink,
              heroPosition: dataToUpload.heroPosition,
              mobileButtonPosition: dataToUpload.mobileButtonPosition || null,
              desktopImagePosition: dataToUpload.desktopImagePosition || null,
            }).then(console.log("done"));
          } else {
            const generatedFirebaseUrl = await uploadFileToFirebase(
              dataToUpload.url,
              firebaseCollectionName
            );

            const db = await getFirestore();

            await addDoc(collection(db, firebaseCollectionName), {
              url: generatedFirebaseUrl,
              order: dataToUpload.order,
              imgAlt: dataToUpload.imgAlt,
              topUrl: null,
              title: dataToUpload.title,
              device: dataToUpload.device,
              subtitle: dataToUpload.subtitle,
              buttonLink: dataToUpload.buttonLink,
              heroPosition: dataToUpload.heroPosition,
              mobileButtonPosition: dataToUpload.mobileButtonPosition || null,
              desktopImagePosition: dataToUpload.desktopImagePosition || null,
            }).then(console.log("done"));
          }
        }
      } else if (firebaseCollectionName === "promos") {
        for (const dataToUpload of arrayWithPromosData.filter(
          (dataToUpload) => dataToUpload.id == null
        )) {
          const generatedFirebaseUrl = await uploadFileToFirebase(
            dataToUpload.url,
            firebaseCollectionName
          );

          const db = await getFirestore();

          await addDoc(collection(db, firebaseCollectionName), {
            url: generatedFirebaseUrl,
            order: dataToUpload.order,
            imgAlt: dataToUpload.imgAlt,
            device: dataToUpload.device,
          }).then(console.log("done"));
        }
      } else {
        return new Error(
          "Surgió un error al subir el archivo a la base de datos"
        );
      }
    } catch (err) {
      console.error(err);
    }
    alert("Completo");
    $("#heroImg").val("");
    $("#heroImgTop").val("");
    $("#promosImg").val("");
  };

  useEffect(() => {
    const getUserFromStorage = localStorage.getItem("userData");
    getUserFromStorage
      ? console.log(getUserFromStorage)
      : localStorage.setItem("userData", "null");
    if (userLogged === null && getUserFromStorage === "null") {
      router.push("/");
    } else {
      setUserLoading(false);
    }
  }, []);

  useEffect(() => {
    getProductsFromFirebase("hero");
    getProductsFromFirebase("promos");
  }, []);

  useEffect(() => {
    $("#heroDevice").on("change", function () {
      setSelectedDevice($("#heroDevice").val());
    });
  });

  return (
    <>
      {userLoading ? (
        <div className={styles.userLoading}>
          <h2>Cargando usuario...</h2>
        </div>
      ) : (
        <div className={styles.dashContainer}>
          <Link href="/" className={styles.goToMain}>
            <AiOutlineLeft />
            Volver a la página principal
          </Link>
          <div className={styles.logOutContainer}>
            <button onClick={handleLogOut}>Cerrar sesión</button>
          </div>
          <div className={styles.sectionsContainer}>
            <section className={styles.dashHeroSectionContainer}>
              <div className={styles.dashSectionTop}>
                <h2>Agregar al Hero</h2>
                <p>
                  Para generar un hero se deberá seleccionar la imagen
                  principal, agregar el titulo, subtitulo, link y la posición en
                  el slider, deberá seleccionar si el mismo sera mobile o
                  desktop junto a la posición de la imagen principal (desktop) y
                  del botón (mobile), podrá cancelar la subida de cada uno
                  eliminándola de la lista de imágenes,
                  <span> SOLAMENTE CUANDO ESTÉ SEGURO </span>
                  puede dar click en subir para aplicar los cambios.
                  <br />
                  También puede eliminar las páginas que se encuentren en la
                  base de datos haciendo click en el botón
                  <span> EDITAR PÁGINAS GUARDADAS</span>
                </p>
                <form
                  onSubmit={(e) =>
                    saveDataInArray(
                      e,
                      "hero",
                      $("#heroDevice option:selected").val(),
                      $("#heroImg").prop("files")[0],
                      Number($("#heroOrder").val().trim()),
                      $("#heroAlt").val().trim(),
                      $("#heroTitle").val().trim(),
                      $("#heroSubtitle").val().trim(),
                      $("#heroLink").val().trim(),
                      $("#heroPosition").val().trim(),
                      $("#heroImgTop").prop("files")[0],
                      $("#heroMobile_button option:selected").val(),
                      $("#heroDesktopImage option:selected").val()
                    )
                  }
                >
                  <div className={styles.inputGroup}>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="heroTitle">*TITLE: </label>
                      <input
                        type="text"
                        name="heroTitle"
                        id="heroTitle"
                        required
                      />
                    </div>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="heroSubtitle">*SUBTITLE: </label>
                      <input
                        type="text"
                        name="heroSubtitle"
                        id="heroSubtitle"
                        required
                      />
                    </div>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="heroOrder">*POSICIÓN: </label>
                      <input
                        type="number"
                        name="heroOrder"
                        id="heroOrder"
                        required
                      />
                    </div>
                    <small>Ultima posición: {lastOrderNumberHero}</small>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="heroLink">*LINK: </label>
                      <input
                        type="text"
                        name="heroLink"
                        id="heroLink"
                        required
                      />
                    </div>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="heroAlt">*ALT: </label>
                      <input type="text" name="heroAlt" id="heroAlt" required />
                    </div>
                    <p className={styles.bestFormat}>
                      <h3>IMPORTANTE</h3>
                      La opción de formato recomendado para
                      <span> IMÁGENES GRANDES (IMAGEN PRINCIPAL) </span>es
                      <span> WEBP</span>, ya que mantiene una mejor calidad pero
                      sin tanto peso como un SVG, el cual beneficia al usuario
                      final aligerando la carga de la misma. De no ser posible,
                      el 2do formato recomendado es<span> PNG </span>. <br />
                      En el caso de un<span> ÍCONO (IMAGEN EXTRA) </span>la
                      opción de formato recomendado es<span> SVG</span>. <br />
                      <br />
                      Las imágenes<span> NO </span>deben tener espacios a su
                      alrededor, para evitar conflictos con las posiciones.
                    </p>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="heroImg">*IMAGEN PRINCIPAL: </label>
                      <input
                        type="file"
                        name="heroImg"
                        id="heroImg"
                        accept="image/*"
                        required
                        onChange={(e) => {
                          if (e.target.files[0].size > 4718592) {
                            alert("El archivo debe pesar menos de 4MB");
                            e.target.value = "";
                          }
                        }}
                      />
                    </div>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="heroImgTop">IMAGEN EXTRA: </label>
                      <input
                        type="file"
                        name="heroImgTop"
                        id="heroImgTop"
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files[0].size > 4718592) {
                            alert("El archivo debe pesar menos de 4MB");
                            e.target.value = "";
                          }
                        }}
                      />
                    </div>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="heroPosition">*POSICIÓN: </label>
                      <input
                        type="number"
                        name="heroPosition"
                        id="heroPosition"
                        required
                      />
                    </div>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="heroDevice">*DISPOSITIVO: </label>
                      <select name="heroDevice" id="heroDevice" required>
                        <option value="desktop">DESKTOP</option>
                        <option value="mobile">MOBILE</option>
                      </select>
                    </div>

                    {selectedDevice === "mobile" ? (
                      <div className={styles.inputGroupWithLabel}>
                        <label htmlFor="heroMobile_button">*BOTÓN: </label>
                        <select
                          name="heroMobile_button"
                          id="heroMobile_button"
                          defaultValue="top"
                          required
                        >
                          <option value="top">ARRIBA</option>
                          <option value="bottom">ABAJO</option>
                        </select>
                      </div>
                    ) : (
                      <div className={styles.inputGroupWithLabel}>
                        <label htmlFor="heroDesktopImage">*IMAGEN: </label>
                        <select
                          name="heroDesktopImage"
                          id="heroDesktopImage"
                          defaultValue="center"
                          required
                        >
                          <option value="center">CENTRO</option>
                          <option value="bottom">ABAJO</option>
                        </select>
                      </div>
                    )}
                  </div>
                  <button type="submit">Agregar</button>
                  <small>* requerido</small>
                </form>
                <div className={styles.heroImageList}>
                  {arrayWithHeroData.length !== 0 ? (
                    <h2>Lista de imágenes</h2>
                  ) : null}
                  <div className={styles.heroImageListContainer}>
                    {arrayWithHeroData
                      .filter((data) => data.id == null)
                      .map((image, i) => (
                        <div
                          className={styles.heroImageCard}
                          key={`${i}${Math.random()}`}
                        >
                          <img
                            src={image.previewUrl || image.url}
                            alt={image.imgAlt}
                          />
                          <button
                            className={styles.heroCardDeleteButton}
                            onClick={() =>
                              handleDelete(image.previewUrl, "hero")
                            }
                          >
                            <AiOutlineDelete />
                            BORRAR
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {/* <Link
                className={styles.goToEdit}
                href={"private-dash/edit/hero.html"}
              > */}
                <Link className={styles.goToEdit} href={"private-dash/edit/hero"}>
                Editar imágenes guardadas
                <AiOutlineRight />
              </Link>
              <button
                className={styles.saveDataInFB}
                onClick={() => saveDataToFirebase("hero")}
              >
                Guardar imágenes en base de datos
              </button>
            </section>

            <section className={styles.dashHeroSectionContainer}>
              <div className={styles.dashSectionTop}>
                <h2>Agregar a las promos</h2>
                <p>
                  Para subir imágenes a las promos se deberá seleccionar la
                  imagen deseada, la vista previa se actualiza cuando agrega una
                  nueva imagen, podrá cancelar la subida de la imagen
                  eliminándola de la lista de imágenes,
                  <span> SOLAMENTE CUANDO ESTÉ SEGURO</span> puede dar click en
                  subir para aplicar los cambios.
                  <br /> También puede eliminar las imágenes que se encuentren
                  en la base de datos haciendo click en el botón
                  <span> EDITAR IMÁGENES GUARDADAS</span>
                </p>
                <form
                  onSubmit={(e) =>
                    saveDataInArray(
                      e,
                      "promos",
                      e.target.elements[1].checked,
                      $("#promosImg").prop("files")[0],
                      $("#promosAlt").val().trim()
                    )
                  }
                >
                  <div className={styles.inputGroup}>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="promosAlt">*ALT: </label>
                      <input
                        type="text"
                        name="promosAlt"
                        id="promosAlt"
                        required
                      />
                    </div>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="promosOrder">*POSICIÓN: </label>
                      <input
                        type="number"
                        name="promosOrder"
                        id="promosOrder"
                        required
                      />
                    </div>
                    <small>Ultima posición: {lastOrderNumberPromos}</small>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="promosMobile">¿ES MOBILE? </label>
                      <input
                        type="checkbox"
                        name="promosMobile"
                        id="promosMobile"
                      />
                    </div>
                    <input
                      type="file"
                      name="promosImg"
                      id="promosImg"
                      accept="image/*"
                      required
                      onChange={(e) => {
                        if (e.target.files[0].size > 7340032) {
                          alert("El archivo debe pesar menos de 7MB");
                          e.target.value = "";
                        }
                      }}
                    />
                  </div>
                  <button type="submit">Agregar</button>
                  <small>* requerido</small>
                </form>
                <div className={styles.heroImageList}>
                  {arrayWithPromosData.length !== 0 ? (
                    <h2>Lista de imágenes</h2>
                  ) : null}
                  {arrayWithPromosData
                    .filter((data) => data.id == null)
                    .map((image, i) => (
                      <div
                        className={styles.heroImageCard}
                        key={`${i}${Math.random()}`}
                      >
                        <img src={image.previewUrl} alt={image.imgAlt} />
                        <button
                          className={styles.heroCardDeleteButton}
                          onClick={() =>
                            handleDelete(image.previewUrl, "promos")
                          }
                        >
                          <AiOutlineDelete />
                          BORRAR
                        </button>
                      </div>
                    ))}
                </div>
              </div>
              <Link
                className={styles.goToEdit}
                href={"private-dash/edit/promos"}
              >
                Editar imágenes guardadas
                <AiOutlineRight />
              </Link>
              <button
                className={styles.saveDataInFB}
                onClick={() => saveDataToFirebase("promos")}
              >
                Guardar imágenes en base de datos
              </button>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
