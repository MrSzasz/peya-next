import styles from "./index.module.scss";
import { AiOutlineLeft } from "react-icons/ai";
import { uploadFileToFirebase } from "../../firebase/config";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";

const index = () => {
  const [fileToUpload, setFileToUpload] = useState(null);
  const [promoDataFromDB, setPromoDataFromDB] = useState([]);

  const handleSubmit = async (location, e) => {
    try {
      e.preventDefault();
      if (fileToUpload === null) {
        throw new Error("Suba una imagen antes de continuar");
      }
      const result = await uploadFileToFirebase(fileToUpload, location);
      console.log(result);
      // console.log(location);
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  const getProductsFromFirebase = async () => {
    const db = getFirestore();

    const queryCollection = collection(db, "promos");

    await getDocs(queryCollection).then((res) =>
      setPromoDataFromDB(
        res.docs.map((item) => ({ ...item.data(), id: item.id }))
      )
    );
  };

  useEffect(() => {
    getProductsFromFirebase();
  }, []);

  return (
    <div className={styles.dashContainer}>
      <a href="/" className={styles.goToMain}>
        <AiOutlineLeft />
        Volver a la página principal
      </a>
      <div className={styles.sectionsContainer}>
        <section className={styles.dashHeroSectionContainer}>
          <div className={styles.dashSectionTop}>
            <h2>Administrador del Hero</h2>
            <p>
              Para subir imágenes al Hero se deberán seleccionar la imagen
              deseada, la vista previa le permite editar el contenido de la
              misma, SOLAMENTE CUANDO ESTÉ SEGURO puede dar click en subir, y
              este generará la nueva página para el header
            </p>

            <form onSubmit={(e) => handleSubmit("heroImages", e)}>
              <input
                type="file"
                name="headerImg"
                id="headerImg"
                accept="image/*"
                onChange={(e) => setFileToUpload(e.target.files[0])}
              />
              <button type="submit">Subir imagen</button>
            </form>
          </div>
          <div className={styles.dashSliderContainer}>
            <h2>Vista previa</h2>
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
              {promoDataFromDB.map((item) => (
                <SwiperSlide>
                  <SwiperSlide>
                    <img src={item.url} alt={item.imgAlt} />
                  </SwiperSlide>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className={styles.dashPromoSectionContainer}>
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
              <button type="submit">Subir imagen</button>
            </form>
          </div>
          <div className={styles.dashSliderContainer}>
            <h2>Vista previa</h2>
            <Swiper spaceBetween={50} slidesPerView={1}>
              {promoDataFromDB.map((item) => (
                <SwiperSlide>
                  <SwiperSlide>
                    <img src={item.url} alt={item.imgAlt} />
                  </SwiperSlide>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default index;
