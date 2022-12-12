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

const index = () => {
  const [fileToUpload, setFileToUpload] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [arraydefotos, setarraydefotos] = useState([]);
  const [promoDataFromDB, setPromoDataFromDB] = useState([]);
  const [loading, setLoading] = useState(true);

  const [heroDataArray, setHeroDataArray] = useState([]);
  const [promosDataArray, setPromosDataArray] = useState([]);

  // const handleSubmit = async (location, e) => {
  const handleSubmit = async (arrayFromInputToDB, location) => {

console.log(arrayFromInputToDB);

    // if (arrayFromInputToDB.length === 0) {
    //   alert("No hay datos para subir a la base de datos");
    // } else {
    //   // const db = await getFirestore();

    //   // await dataFromInput.forEach((name) => {
    //   //   addDoc(collection(db, collectionOnFB), { ...name }).then(
    //   //     console.log("done")
    //   //   );
    //   // });

    //   try {
    //     // e.preventDefault();
    //     if (arrayFromInputToDB[0].url === null) {
    //       throw new Error("Suba una imagen antes de continuar");
    //     }

    //     for (const input of arrayFromInputToDB) {
    //       const result = await uploadFileToFirebase(input.url, location);
    //       console.log(result);
    //       handleSaveToFB(arrayFromInputToDB, location, result);
    //       // // console.log(location);
    //     }
    //   } catch (err) {
    //     console.error(err);
    //     alert(err);
    //   }
    // }
  };
  const handleAddToPreview = (array, e) => {
    e.preventDefault();
    const reader = new FileReader();
    if (array === "hero") {
      reader.onloadend = () => {
        // setHeroDataArray([...heroDataArray, { url: reader.result }]);
        setHeroDataArray([
          ...heroDataArray,
          {
            url: reader.result,
            imgAlt: $("#headerAlt").val(),
            title: $("#headerTitle").val(),
            subtitle: $("#headerSubtitle").val(),
            buttonLink: $("#headerLink").val(),
          },
        ]);
      };
      reader.readAsDataURL(fileToUpload);
    } else {
      reader.onloadend = () => {
        setPromosDataArray([
          ...promosDataArray,
          {
            url: reader.result,
            imgAlt: e.target.firstChild.firstChild.lastChild.value,
          },
        ]);
      };
      reader.readAsDataURL(fileToUpload);
    }
  };

  const getProductsFromFirebase = async (collectionToUse) => {
    const db = getFirestore();

    if (collectionToUse === "hero") {
      const queryCollection = collection(db, "hero");

      await getDocs(queryCollection).then((res) =>
        // setPromoDataFromDB(
        //   res.docs.map((item) => ({ ...item.data(), id: item.id }))
        // )
        setHeroDataArray(
          res.docs.map((item) => ({ ...item.data(), id: item.id }))
        )
      );
      setLoading(false);
    } else {
      const queryCollection = collection(db, "promos");

      await getDocs(queryCollection).then((res) =>
        // setPromoDataFromDB(
        //   res.docs.map((item) => ({ ...item.data(), id: item.id }))
        // )
        setPromosDataArray(
          res.docs.map((item) => ({ ...item.data(), id: item.id }))
        )
      );
      setLoading(false);
    }
  };

  const handleDelete = (arrayToModify, url) => {
    console.table(arrayToModify, url);
    // arraydefotos.splice(index, 1);

    if (arrayToModify === "hero") {
      setHeroDataArray((heroDataArray) => {
        return heroDataArray.filter((value) => value.url !== url);
      });
    } else {
      setPromosDataArray((promosDataArray) => {
        return promosDataArray.filter((value) => value.url !== url);
      });
    }
  };

  const handleSaveToFB = async (dataFromInput, collectionOnFB, newUrl) => {
    if (dataFromInput.length === 0) {
      alert("No hay datos para subir a la base de datos");
    } else {
      // const db = await getFirestore();

      // await dataFromInput.forEach((promoData) => {
      //   addDoc(collection(db, collectionOnFB), { ...promoData, url:newUrl }).then(
      //     console.log("done")
      //   );
      // });
      // console.log(dataFromInput, collectionOnFB);
      // console.log(dataFromInput, collectionOnFB);
      dataFromInput.forEach((item) =>
        console.log({ ...item, url: newUrl }, collectionOnFB)
      );
    }
  };

  useEffect(() => {
    // getProductsFromFirebase("hero");
    getProductsFromFirebase("promos");
  }, []);

  return (
    <div className={styles.dashContainer}>
      <Link href="/" className={styles.goToMain}>
        <AiOutlineLeft />
        Volver a la página principal
      </Link>
      <div className={styles.sectionsContainer}>
        <section className={styles.dashHeroSectionContainer}>
          <div className={styles.dashSectionTop}>
            <h2>Agregar al Hero</h2>
            <p>
              Para subir imágenes al hero se deberá seleccionar la imagen
              deseada, agregar el titulo principal, subtitulo y el link al que
              se redirigirá, la vista previa se actualiza cuando agrega los
              datos, podrá cancelar la subida de cada uno eliminándola de la
              lista de imágenes, <span>SOLAMENTE CUANDO ESTÉ SEGURO</span>puede
              dar <span>DOBLE CLICK</span> en subir para aplicar los cambios.
              <br />
              También puede eliminar las páginas que se encuentren en la base de
              datos haciendo click en el botón
              <span>EDITAR PÁGINAS GUARDADAS</span>
            </p>
            <form onSubmit={(e) => handleAddToPreview("hero", e)}>
              <div className={styles.inputGroup}>
                <div className={styles.inputGroupWithLabel}>
                  <label htmlFor="headerTitle">TITLE: </label>
                  <input
                    type="text"
                    name="headerTitle"
                    id="headerTitle"
                    required
                  />
                </div>
                <div className={styles.inputGroupWithLabel}>
                  <label htmlFor="headerSubtitle">SUBTITLE: </label>
                  <input
                    type="text"
                    name="headerSubtitle"
                    id="headerSubtitle"
                    required
                  />
                </div>
                <div className={styles.inputGroupWithLabel}>
                  <label htmlFor="headerLink">LINK: </label>
                  <input
                    type="text"
                    name="headerLink"
                    id="headerLink"
                    required
                  />
                </div>
                <div className={styles.inputGroupWithLabel}>
                  <label htmlFor="headerAlt">ALT: </label>
                  <input type="text" name="headerAlt" id="headerAlt" required />
                </div>
                <input
                  type="file"
                  name="headerImg"
                  id="headerImg"
                  accept="image/*"
                  required
                  onChange={(e) => {
                    if (e.target.files[0].size > 5242880) {
                      alert("El archivo debe pesar menos de 5MB");
                      e.target.value = "";
                    } else {
                      setFileToUpload(e.target.files[0]);
                    }
                  }}
                />
              </div>
              <button type="submit">Agregar</button>
            </form>
            <div className={styles.heroImageList}>
              {heroDataArray
                .filter((data) => data.id == null)
                .map((image, i) => (
                  <div
                    className={styles.heroImageCard}
                    key={`${i}${Math.random()}`}
                  >
                    <img src={image.url} alt="" />
                    <button onClick={() => handleDelete("hero", image.url)}>
                      <AiOutlineDelete />
                      BORRAR
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.dashSliderContainer}>
            <h2>Vista previa</h2>
            {/* {promoDataFromDB.length === 0 ? ( */}
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
                {/* {heroDataFromDB.map((item) => ( */}

                {/* {promoDataFromDB.map((item) => ( */}
                {heroDataArray.map((item, i) => (
                  <SwiperSlide key={i}>
                    <SwiperSlide>
                      <img src={item.url} alt={item.imgAlt} />
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
            onDoubleClick={() =>
              handleSaveToFB(
                heroDataArray.filter((data) => data.id == null),
                "promos"
              )
            }
          >
            Guardar imágenes en base de datos
          </button>
        </section>

        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}
        {/* ============================================================================================================================ */}

        <section className={styles.dashHeroSectionContainer}>
          <div className={styles.dashSectionTop}>
            <h2>Agregar a las promos</h2>
            <p>
              Para subir imágenes a las promos se deberá seleccionar la imagen
              deseada, la vista previa se actualiza cuando agrega una nueva
              imagen, podrá cancelar la subida de la imagen eliminándola de la
              lista de imágenes, <span>SOLAMENTE CUANDO ESTÉ SEGURO</span> puede
              dar <span>DOBLE CLICK</span> en subir para aplicar los cambios.
              <br /> También puede eliminar las imágenes que se encuentren en la
              base de datos haciendo click en el botón{" "}
              <span>EDITAR IMÁGENES GUARDADAS</span>
            </p>
            <form onSubmit={(e) => handleAddToPreview("promo", e)}>
              <div className={styles.inputGroup}>
                <div className={styles.inputGroupWithLabel}>
                  <label htmlFor="promosAlt">ALT: </label>
                  <input type="text" name="promosAlt" id="promosAlt" required />
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
                    } else {
                      // setFileToUpload(e.target.files[0]);
                      console.log(e.target.files[0]);
                    }
                  }}
                />
              </div>
              <button type="submit">Agregar</button>
            </form>
            <div className={styles.heroImageList}>
              {promosDataArray
                .filter((data) => data.id == null)
                .map((image, i) => (
                  <div
                    className={styles.heroImageCard}
                    key={`${i}${Math.random()}`}
                  >
                    <img src={image.url} alt="" />
                    <button onClick={() => handleDelete("promos", image.url)}>
                      <AiOutlineDelete />
                      BORRAR
                    </button>
                  </div>
                ))}
            </div>
          </div>
          <div className={styles.dashSliderContainer}>
            <h2>Vista previa</h2>
            {/* {promoDataFromDB.length === 0 ? ( */}
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
                {/* {heroDataFromDB.map((item) => ( */}

                {/* {promoDataFromDB.map((item) => ( */}
                {promosDataArray.map((item, i) => (
                  <SwiperSlide key={i}>
                    <SwiperSlide>
                      <img src={item.url} alt={item.imgAlt} />
                    </SwiperSlide>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <Link className={styles.goToEdit} href={"private-dash/edit/promos"}>
            Editar imágenes guardadas
            <AiOutlineRight />
          </Link>
          <button
            className={styles.saveDataInFB}
            onDoubleClick={() =>
              handleSubmit($("#promosImg").prop("files")
                // promosDataArray.filter((data) => data.id == null),
                // "promos"
                
              )
            }
          >
            Guardar imágenes en base de datos
          </button>
        </section>

        {/* <section className={styles.dashPromoSectionContainer}>
          <div className={styles.dashSectionTop}>
            <h2>Administrador de las promociones</h2>
            <p>
              Para subir imágenes al Hero se deberán seleccionar la imagen
              deseada, la vista previa le permite editar el contenido de la
              misma, SOLAMENTE CUANDO ESTÉ SEGURO puede dar click en subir, y
              este generará la nueva página para el header
            </p>
            <form onSubmit={(e) => handleSubmit("promoImages", e)}>
              <input
                type="file"
                name="headerImg"
                id="headerImg"
                accept="image/*"
                onChange={(e) => setFileToUpload(e.target.files[0])}
              />
              <button type="submit">Agregar</button>
            </form>
          </div>
          <div className={styles.dashSliderContainer}>
            <h2>Vista previa</h2>
            {promoDataFromDB.length === 0 ? (
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
                {promoDataFromDB.map((item) => (
                  <SwiperSlide>
                    <SwiperSlide>
                      <img src={item.url} alt={item.imgAlt} />
                    </SwiperSlide>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default index;
