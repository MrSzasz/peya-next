import styles from "./index.module.scss";
import { AiOutlineDelete, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { uploadFileToFirebase } from "../../firebase/config";
import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import $ from "jquery";
import "swiper/css";
import Link from "next/link";
import { useAppContext } from "../../context/AppContext";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { FiExternalLink } from "react-icons/fi";

const notifySuccess = () => toast.success("Datos subidos correctamente");
const notifyLoading = () =>
  toast.loading("Subiendo datos...", {
    id: "notifyLoadingID",
  });
const notifyError = () => toast.error("Hubo un error al subir los datos");

const index = ({ arrayWithHeroData, arrayWithPromosData }) => {
  const [arrayWithHeroDataToSave, setArrayWithHeroDataToSave] = useState([]);
  const [arrayWithPromosDataToSave, setArrayWithPromosDataToSave] = useState(
    []
  );
  const [userLoading, setUserLoading] = useState(true);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const { userLogged, userLogOut } = useAppContext();

  const router = useRouter();

  const handleLogOut = async () => {
    await userLogOut().then(() => {
      router.push("/");
    });
  };

  // const getProductsFromFirebase = async (collectionToUse) => {
  //   const db = getFirestore();

  //   if (collectionToUse === "hero") {
  //     const queryCollection = collection(db, collectionToUse);

  //     await getDocs(queryCollection).then((res) => {
  //       setArrayWithHeroData(
  //         res.docs.map((item) => ({ ...item.data(), id: item.id }))
  //       );

  //       let heroOrderedCollection = res.docs
  //         .map((item) => ({ ...item.data(), id: item.id }))
  //         .sort(function (a, b) {
  //           return a.sort - b.sort;
  //         });
  //     });
  //   } else {
  //     const queryCollection = collection(db, collectionToUse);

  //     await getDocs(queryCollection).then((res) => {
  //       setArrayWithPromosData(
  //         res.docs.map((item) => ({ ...item.data(), id: item.id }))
  //       );
  //       let promosOrderedCollection = res.docs
  //         .map((item) => ({ ...item.data(), id: item.id }))
  //         .sort(function (a, b) {
  //           return a.sort - b.sort;
  //         });
  //       // const lastPromos =
  //       //   promosOrderedCollection[promosOrderedCollection.length - 1];
  //       // setLastOrderNumberPromos(lastPromos.sort);
  //     });
  //   }
  // };

  const handleDelete = (url, location) => {
    if (location === "hero") {
      setArrayWithHeroDataToSave((arrayWithHeroDataToSave) => {
        return arrayWithHeroDataToSave.filter(
          (value) => value.previewUrl !== url
        );
      });
    } else {
      setArrayWithPromosDataToSave((arrayWithPromosDataToSave) => {
        return arrayWithPromosDataToSave.filter(
          (value) => value.previewUrl !== url
        );
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
    imageFileTop,
    mobileButtonPosition,
    desktopImagePosition
  ) => {
    e.preventDefault();
    if (location === "hero") {
      Boolean(imageFileTop)
        ? readImageAndConvertToSrc(imageFile, (e) => {
            setArrayWithHeroDataToSave([
              ...arrayWithHeroDataToSave,
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
                mobileButtonPosition: mobileButtonPosition,
                desktopImagePosition: desktopImagePosition,
              },
            ]);
          })
        : readImageAndConvertToSrc(imageFile, (e) => {
            setArrayWithHeroDataToSave([
              ...arrayWithHeroDataToSave,
              {
                previewUrl: e.target.result,
                url: imageFile,
                order: order,
                device: device,
                imgAlt: imageAlt,
                title: heroTitle,
                subtitle: heroSubtitle,
                buttonLink: heroButtonLink,
                mobileButtonPosition: mobileButtonPosition,
                desktopImagePosition: desktopImagePosition,
              },
            ]);
          });
    } else if (location === "promos") {
      readImageAndConvertToSrc(imageFile, (e) => {
        setArrayWithPromosDataToSave([
          ...arrayWithPromosDataToSave,
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
    // setLoading(false);
  };

  const saveDataToFirebase = async (firebaseCollectionName) => {
    notifyLoading();
    try {
      if (firebaseCollectionName === "hero") {
        for (const dataToUpload of arrayWithHeroDataToSave) {
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
              sort: dataToUpload.order,
              topUrl: generatedTopFirebaseUrl,
              imgAlt: dataToUpload.imgAlt,
              title: dataToUpload.title,
              device: dataToUpload.device,
              subtitle: dataToUpload.subtitle,
              buttonLink: dataToUpload.buttonLink,
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
              sort: dataToUpload.order,
              imgAlt: dataToUpload.imgAlt,
              topUrl: null,
              title: dataToUpload.title,
              device: dataToUpload.device,
              subtitle: dataToUpload.subtitle,
              buttonLink: dataToUpload.buttonLink,
              mobileButtonPosition: dataToUpload.mobileButtonPosition || null,
              desktopImagePosition: dataToUpload.desktopImagePosition || null,
            }).then(console.log("done"));
          }
        }
      } else if (firebaseCollectionName === "promos") {
        for (const dataToUpload of arrayWithPromosDataToSave) {
          const generatedFirebaseUrl = await uploadFileToFirebase(
            dataToUpload.url,
            firebaseCollectionName
          );

          const db = await getFirestore();

          await addDoc(collection(db, firebaseCollectionName), {
            url: generatedFirebaseUrl,
            sort: dataToUpload.order,
            imgAlt: dataToUpload.imgAlt,
            device: dataToUpload.device,
          }).then(console.log("done"));
        }
      } else {
        toast.dismiss("notifyLoadingID");
        notifyError();
        return new Error(
          "Surgió un error al subir el archivo a la base de datos"
        );
      }
    } catch (err) {
      toast.dismiss("notifyLoadingID");
      notifyError();
      console.error(err);
    } finally {
      toast.dismiss("notifyLoadingID");
      notifySuccess();
      $("#heroImg").val("");
      $("#heroImgTop").val("");
      $("#promosImg").val("");
    }
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

  // useEffect(() => {
  //   getProductsFromFirebase("hero");
  //   getProductsFromFirebase("promos");
  // }, []);

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
        <>
          <Toaster />
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
                  <div className={styles.instructions}>
                    <h3>INSTRUCCIONES</h3>
                    <p>
                      Para generar el hero se deberán completar los campos
                      obligatorios<span>(*)</span> a continuación. Cada uno
                      cumple una función asignada de la siguiente manera:
                      <br />
                      <br />
                      <span>DISPOSITIVO: </span> es el dispositivo en el que se
                      deberá agregar el Hero en cuestión. Se debe generar un
                      slider por posición (ejemplo, si se generará un slider con
                      una promo del 50% se debe generar uno para desktop y uno
                      para mobile)
                      <br />
                      <span>TÍTULO PRINCIPAL: </span> es el título que tendrá el
                      Hero con sus respectivos estilos.
                      <br />
                      <span>SUBTÍTULO: </span> es el subtítulo que estará por
                      debajo del título principal.
                      <br />
                      <span>POSICIÓN EN FILA (SOLO NÚMERO): </span> es el orden
                      que tendrá (tiene que ser mayor al numero marcado como
                      ultima posición).
                      <br />
                      <span>LINK: </span> es el link al que se redirigirá cuando
                      se haga click en el botón.
                      <br />
                      <span>ALT: </span> es el texto alternativo (no videntes)
                      que tendrá la imagen en el Hero.
                      <br />
                      <span>IMAGEN PRINCIPAL: </span> es la imagen principal
                      (grande) del Hero.
                      <br /> <br />
                      <span className={styles.format}>
                        NOTA, EL FORMATO RECOMENDADO DE LA IMAGEN PRINCIPAL ES
                        WEBP, AYUDA CON LA CARGA AL TENER MENOS PESO PERO MEJOR
                        CALIDAD, EL 2DO FORMATO RECOMENDADO ES PNG
                      </span>{" "}
                      <br />
                      <br />
                      <span>IMAGEN EXTRA: </span> es la imagen que ira por
                      encima del título principal.
                      <br /> <br />
                      <span className={styles.format}>
                        NOTA, EL FORMATO RECOMENDADO DE LA IMAGEN EXTRA ES SVG
                      </span>{" "}
                      <br />
                      <br />
                      <span>
                        POSICIÓN DE LA IMAGEN PRINCIPAL (solo desktop):{" "}
                      </span>{" "}
                      es la posición que tendrá la imagen principal en el Hero.{" "}
                    </p>
                    {/* <br /> */}
                    <div className={styles.imgExample}>
                      <Link
                        href={"https://imgur.com/uGzotXE.png"}
                        target="_blank"
                      >
                        Ejemplo Hero desktop con imagen en centro
                        <FiExternalLink />
                      </Link>
                    </div>
                    <div className={styles.imgExample}>
                      <Link
                        href={"https://imgur.com/raTO9D3.png"}
                        target="_blank"
                      >
                        Ejemplo Hero desktop con imagen abajo
                        <FiExternalLink />
                      </Link>
                    </div>
                    <span>POSICIÓN DEL BOTÓN (solo mobile): </span> es la
                    posición que tendrá el botón el Hero mobile (debajo de todo
                    o sobre la imagen principal, es decir, en medio).
                    <div className={styles.imgExample}>
                      <Link
                        href={"https://imgur.com/ip3afH1.png"}
                        target="_blank"
                      >
                        Ejemplo Hero mobile con botón arriba
                        <FiExternalLink />
                      </Link>
                    </div>
                    <div className={styles.imgExample}>
                      <Link
                        href={"https://imgur.com/tPu950Q.png"}
                        target="_blank"
                      >
                        Ejemplo Hero mobile con botón abajo
                        <FiExternalLink />
                      </Link>
                    </div>
                    <br />
                    <p>
                      Con todo esto completado se deberá hacer click en
                      <span> AGREGAR </span>, el cual agregará el hero a una
                      lista previa, cuando se tengan todos los slides del Hero
                      que se desean agregar se deberá hacer click en
                      <span> GUARDAR IMÁGENES EN BASE DE DATOS </span> para que
                      estos se suban a la base de datos.
                      <br />
                      Si se desea eliminar una imagen antes de subirse a la base
                      de datos se deberá hacer click en la imagen que se quiere
                      borrar dentro de la lista de imágenes.
                      <br />
                      <br />
                      Si se desea eliminar algún slider que ya se encuentre en
                      la base de datos se deberá hacer click en el botón
                      <span> EDITAR IMÁGENES GUARDADAS </span>
                    </p>
                  </div>
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
                        $("#heroImgTop").prop("files")[0],
                        $("#heroMobile_button option:selected").val(),
                        $("#heroDesktopImage option:selected").val()
                      )
                    }
                  >
                    <div className={styles.inputGroup}>
                      <div className={styles.inputGroupWithLabel}>
                        <label htmlFor="heroDevice">*DISPOSITIVO: </label>
                        <select name="heroDevice" id="heroDevice" required>
                          <option value="desktop">DESKTOP</option>
                          <option value="mobile">MOBILE</option>
                        </select>
                      </div>
                      <div className={styles.inputGroupWithLabel}>
                        <label htmlFor="heroTitle">*TÍTULO PRINCIPAL: </label>
                        <input
                          type="text"
                          name="heroTitle"
                          id="heroTitle"
                          required
                        />
                      </div>
                      <div className={styles.inputGroupWithLabel}>
                        <label htmlFor="heroSubtitle">*SUBTÍTULO: </label>
                        <input
                          type="text"
                          name="heroSubtitle"
                          id="heroSubtitle"
                          required
                        />
                      </div>
                      <div className={styles.inputGroupWithLabel}>
                        <label htmlFor="heroOrder">*POSICIÓN EN FILA: </label>
                        <input
                          type="number"
                          name="heroOrder"
                          id="heroOrder"
                          required
                        />
                      </div>
                      <small>
                        Posiciones en uso:
                        {arrayWithHeroData
                          .filter((item) => item.device === "mobile")
                          .map((data) => (
                            <b key={data.id}> &#91; {data.sort} &#93; </b>
                          ))}
                      </small>
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
                        <input
                          type="text"
                          name="heroAlt"
                          id="heroAlt"
                          required
                        />
                      </div>
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
                          <label htmlFor="heroDesktopImage">
                            *POSICIÓN DE LA IMAGEN PRINCIPAL:{" "}
                          </label>
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
                    {arrayWithHeroDataToSave.length !== 0 ? (
                      <h2>Lista de imágenes</h2>
                    ) : null}
                    <div className={styles.heroImageListContainer}>
                      {arrayWithHeroDataToSave.map((image, i) => (
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
                <button
                  className={styles.saveDataInFB}
                  onClick={() => saveDataToFirebase("hero")}
                >
                  Guardar imágenes en base de datos
                </button>
                <Link
                  className={styles.goToEdit}
                  href={"private-dash/edit/hero"}
                >
                  Editar imágenes guardadas
                  <AiOutlineRight />
                </Link>
              </section>

              <section className={styles.dashHeroSectionContainer}>
                <div className={styles.dashSectionTop}>
                  <h2>Agregar a las promos</h2>
                  <div className={styles.instructions}>
                    <h3>INSTRUCCIONES</h3>
                    <p>
                      Para generar la promo se deberán completar los campos
                      obligatorios<span>(*)</span> a continuación. Cada uno
                      cumple una función asignada de la siguiente manera:
                      <br />
                      <br />
                      <span>¿ES MOBILE?: </span> indica si el slider a agregar
                      será mobile, si no se selecciona (no se deja el tick ✔),
                      se agregará como desktop. Se debe generar un slider por
                      posición (ejemplo, si se generará un slider con una promo
                      del 50% se debe generar uno para mobile y uno para
                      desktop)
                      <br />
                      <span>ALT: </span> es el texto alternativo (no videntes)
                      que tendrá la imagen en promo.
                      <br />
                      <span>POSICIÓN EN FILA (SOLO NÚMERO): </span> es el orden
                      que tendrá (tiene que ser mayor al numero marcado como
                      ultima posición).
                      <br />
                      <br />
                      Con todo esto completado se deberá hacer click en
                      <span> AGREGAR </span>, el cual agregará la promo a una
                      lista previa, cuando se tengan todos los slides que se
                      desean agregar se deberá hacer click en
                      <span> GUARDAR IMÁGENES EN BASE DE DATOS </span> para que
                      estos se suban a la base de datos.
                      <br />
                      Si se desea eliminar una imagen antes de subirse a la base
                      de datos se deberá hacer click en la imagen que se quiere
                      borrar dentro de la lista de imágenes.
                      <br />
                      <br />
                      Si se desea eliminar algún slide que ya se encuentre en la
                      base de datos se deberá hacer click en el botón
                      <span> EDITAR IMÁGENES GUARDADAS </span>
                    </p>
                  </div>
                  <form
                    onSubmit={(e) =>
                      saveDataInArray(
                        e,
                        "promos",
                        e.target.elements[0].checked,
                        $("#promosImg").prop("files")[0],
                        Number($("#promosOrder").val().trim()),
                        $("#promosAlt").val().trim()
                      )
                    }
                  >
                    <div className={styles.inputGroup}>
                      <div className={styles.inputGroupWithLabel}>
                        <label htmlFor="promosMobile">¿ES MOBILE? </label>
                        <input
                          type="checkbox"
                          name="promosMobile"
                          id="promosMobile"
                        />
                      </div>
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
                        <label htmlFor="promosOrder">*POSICIÓN EN FILA: </label>
                        <input
                          type="number"
                          name="promosOrder"
                          id="promosOrder"
                          required
                        />
                      </div>
                      <small>
                        Posiciones en uso:
                        {arrayWithPromosData
                          .filter((item) => item.device !== true)
                          .map((data) => (
                            <b key={data.id}> &#91; {data.sort} &#93; </b>
                          ))}
                      </small>
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
                    {arrayWithPromosDataToSave.length !== 0 ? (
                      <h2>Lista de imágenes</h2>
                    ) : null}
                    {arrayWithPromosDataToSave.map((image, i) => (
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
                <button
                  className={styles.saveDataInFB}
                  onClick={() => saveDataToFirebase("promos")}
                >
                  Guardar imágenes en base de datos
                </button>
                <Link
                  className={styles.goToEdit}
                  href={"private-dash/edit/promos"}
                >
                  Editar imágenes guardadas
                  <AiOutlineRight />
                </Link>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  try {
    const db = getFirestore();

    const queryCollectionHero = await query(
      collection(db, "hero"),
      orderBy("sort")
    );

    const arrayWithHeroData = [];

    await getDocs(queryCollectionHero).then((res) =>
      res.docs.map((item) =>
        arrayWithHeroData.push({ ...item.data(), id: item.id })
      )
    );

    const queryCollectionPromos = await query(
      collection(db, "promos"),
      orderBy("sort")
    );

    const arrayWithPromosData = [];

    await getDocs(queryCollectionPromos).then((res) =>
      res.docs.map((item) =>
        arrayWithPromosData.push({ ...item.data(), id: item.id })
      )
    );

    return {
      props: {
        arrayWithHeroData,
        arrayWithPromosData,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

export default index;
