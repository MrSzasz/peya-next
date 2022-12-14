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

  const { userLogged, userLogOut } = useAppContext();

  const router = useRouter();

  // =============================================================================================================================== //
  // =========================================== PEDIR DATOS A FIREBASE ============================================================ //
  // =============================================================================================================================== //

  const handleLogOut = async () => {
    await userLogOut().then(() => {
      router.push("/");
    });
  };
  // =============================================================================================================================== //
  // =========================================== PEDIR DATOS A FIREBASE ============================================================ //
  // =============================================================================================================================== //

  const getProductsFromFirebase = async (collectionToUse) => {
    const db = getFirestore();

    if (collectionToUse === "hero") {
      const queryCollection = collection(db, collectionToUse);

      await getDocs(queryCollection).then((res) =>
        setArrayWithHeroData(
          res.docs.map((item) => ({ ...item.data(), id: item.id }))
        )
      );
    } else {
      const queryCollection = collection(db, collectionToUse);

      await getDocs(queryCollection).then((res) =>
        setArrayWithPromosData(
          res.docs.map((item) => ({ ...item.data(), id: item.id }))
        )
      );
    }
    setLoading(false);
  };

  // =============================================================================================================================== //
  // =========================================== BORRAR DATOS DEL ARRAY LOCAL ====================================================== //
  // =============================================================================================================================== //

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

  // =============================================================================================================================== //
  // =========================================== SUBE IMÁGENES A STORAGE Y DEVUELVE CALLBACK ======================================= //
  // =============================================================================================================================== //

  const readImageAndConvertToSrc = (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = callback;
    reader.readAsDataURL(file);
  };

  // =============================================================================================================================== //
  // =========================================== GUARDA LOS DATOS EN EL ARRAY ====================================================== //
  // =============================================================================================================================== //

  const saveDataInArray = (
    e,
    location,
    mobile,
    imageFile,
    imageAlt,
    heroTitle,
    heroSubtitle,
    heroButtonLink
  ) => {
    e.preventDefault();
    if (location === "hero") {
      readImageAndConvertToSrc(imageFile, (e) => {
        setArrayWithHeroData([
          ...arrayWithHeroData,
          {
            previewUrl: e.target.result,
            url: imageFile,
            mobile: mobile,
            imgAlt: imageAlt,
            title: heroTitle,
            subtitle: heroSubtitle,
            buttonLink: heroButtonLink,
          },
        ]);
      });
    } else if (location === "promos") {
      readImageAndConvertToSrc(imageFile, (e) => {
        setArrayWithPromosData([
          ...arrayWithPromosData,
          {
            previewUrl: e.target.result,
            mobile: mobile,
            url: imageFile,
            imgAlt: imageAlt,
          },
        ]);
      });
    } else {
      return new Error("Hubo un error, por favor vuelva a intentar más tarde");
    }
    setLoading(false);
  };

  // =============================================================================================================================== //
  // =========================================== GUARDA EL ARRAY EN FIREBASE ======================================================= //
  // =============================================================================================================================== //

  const saveDataToFirebase = async (firebaseCollectionName) => {
    try {
      if (firebaseCollectionName === "hero") {
        for (const dataToUpload of arrayWithHeroData.filter(
          (dataToUpload) => dataToUpload.id == null
        )) {
          // ======= generar url

          const generatedFirebaseUrl = await uploadFileToFirebase(
            dataToUpload.url,
            firebaseCollectionName
          );

          // ======== usar url y subir a fb {url: generatedFirebaseUrl, imgAlt: imgAlt}

          const db = await getFirestore();

          await addDoc(collection(db, firebaseCollectionName), {
            url: generatedFirebaseUrl,
            imgAlt: dataToUpload.imgAlt,
            title: dataToUpload.title,
            mobile: dataToUpload.mobile,
            subtitle: dataToUpload.subtitle,
            buttonLink: dataToUpload.buttonLink,
          }).then(console.log("done"));
        }
      } else if (firebaseCollectionName === "promos") {
        for (const dataToUpload of arrayWithPromosData.filter(
          (dataToUpload) => dataToUpload.id == null
        )) {
          // ======= generar url

          const generatedFirebaseUrl = await uploadFileToFirebase(
            dataToUpload.url,
            firebaseCollectionName
          );

          // ======== usar url y subir a fb {url: generatedFirebaseUrl, imgAlt: imgAlt}

          const db = await getFirestore();

          await addDoc(collection(db, firebaseCollectionName), {
            url: generatedFirebaseUrl,
            imgAlt: dataToUpload.imgAlt,
            mobile: dataToUpload.mobile,
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
  };

  // =============================================================================================================================== //
  // =========================================== PEDIR DATOS DE LA BASE DE DATOS =================================================== //
  // =============================================================================================================================== //

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

  // =============================================================================================================================== //
  // =============================================================================================================================== //
  // =========================================== CÓDIGO DEL COMPONENTE ============================================================= //
  // =============================================================================================================================== //
  // =============================================================================================================================== //

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
                  Para subir imágenes al hero se deberá seleccionar la imagen
                  deseada, agregar el titulo principal, subtitulo y el link al
                  que se redirigirá, la vista previa se actualiza cuando agrega
                  los datos, podrá cancelar la subida de cada uno eliminándola
                  de la lista de imágenes,{" "}
                  <span>SOLAMENTE CUANDO ESTÉ SEGURO</span>
                  puede dar <span>DOBLE CLICK</span> en subir para aplicar los
                  cambios.
                  <br />
                  También puede eliminar las páginas que se encuentren en la
                  base de datos haciendo click en el botón
                  <span>EDITAR PÁGINAS GUARDADAS</span>
                </p>
                <form
                  onSubmit={(e) =>
                    saveDataInArray(
                      e,
                      "hero",
                      false,
                      $("#heroImg").prop("files")[0],
                      $("#heroAlt").val().trim(),
                      $("#heroTitle").val().trim(),
                      $("#heroSubtitle").val().trim(),
                      $("#heroLink").val().trim()
                    )
                  }
                >
                  <div className={styles.inputGroup}>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="heroTitle">TITLE: </label>
                      <input
                        type="text"
                        name="heroTitle"
                        id="heroTitle"
                        required
                      />
                    </div>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="heroSubtitle">SUBTITLE: </label>
                      <input
                        type="text"
                        name="heroSubtitle"
                        id="heroSubtitle"
                        required
                      />
                    </div>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="heroLink">LINK: </label>
                      <input
                        type="text"
                        name="heroLink"
                        id="heroLink"
                        required
                      />
                    </div>
                    <div className={styles.inputGroupWithLabel}>
                      <label htmlFor="heroAlt">ALT: </label>
                      <input type="text" name="heroAlt" id="heroAlt" required />
                    </div>
                    <input
                      type="file"
                      name="heroImg"
                      id="heroImg"
                      accept="image/*"
                      required
                      onChange={(e) => {
                        if (e.target.files[0].size > 5242880) {
                          alert("El archivo debe pesar menos de 5MB");
                          e.target.value = "";
                        }
                      }}
                    />
                  </div>
                  <button type="submit">Agregar</button>
                </form>
                <div className={styles.heroImageList}>
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
                          onClick={() => handleDelete(image.previewUrl, "hero")}
                        >
                          <AiOutlineDelete />
                          BORRAR
                        </button>
                      </div>
                    ))}
                </div>
              </div>
              <div className={styles.dashSliderContainer}>
                <h2>Vista previa</h2>
                {loading ? (
                  <Loading />
                ) : (
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    autoplay={{
                      delay: 40000,
                      disableOnInteraction: false,
                    }}
                  >
                    {arrayWithHeroData.map((item, i) => (
                      <SwiperSlide key={i}>
                        <SwiperSlide>
                          <img
                            src={item.previewUrl || item.url}
                            alt={item.imgAlt}
                          />
                        </SwiperSlide>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
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
                  eliminándola de la lista de imágenes,{" "}
                  <span>SOLAMENTE CUANDO ESTÉ SEGURO</span> puede dar{" "}
                  <span>DOBLE CLICK</span> en subir para aplicar los cambios.
                  <br /> También puede eliminar las imágenes que se encuentren
                  en la base de datos haciendo click en el botón{" "}
                  <span>EDITAR IMÁGENES GUARDADAS</span>
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
                      <label htmlFor="promosAlt">ALT: </label>
                      <input
                        type="text"
                        name="promosAlt"
                        id="promosAlt"
                        required
                      />
                    </div>
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
                        if (e.target.files[0].size > 5242880) {
                          alert("El archivo debe pesar menos de 5MB");
                          e.target.value = "";
                        }
                      }}
                    />
                  </div>
                  <button type="submit">Agregar</button>
                </form>
                <div className={styles.heroImageList}>
                  {arrayWithPromosData
                    .filter((data) => data.id == null)
                    .map((image, i) => (
                      <div
                        className={styles.heroImageCard}
                        key={`${i}${Math.random()}`}
                      >
                        <img src={image.previewUrl} alt={image.imgAlt} />
                        <button
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
              <div className={styles.dashSliderContainer}>
                <h2>Vista previa</h2>
                {loading ? (
                  <Loading />
                ) : (
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    autoplay={{
                      delay: 40000,
                      disableOnInteraction: false,
                    }}
                  >
                    {arrayWithPromosData.map((item, i) => (
                      <SwiperSlide key={i}>
                        <SwiperSlide>
                          <img
                            src={item.previewUrl || item.url}
                            alt={item.imgAlt}
                          />
                        </SwiperSlide>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
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
