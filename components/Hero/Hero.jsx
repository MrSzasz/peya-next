import { SwiperSlide } from "swiper/react";
import SliderComponent from "../SliderComponent/SliderComponent";
import styles from "./Hero.module.scss";
import "swiper/css";
import MainButton from "../MainButton/MainButton";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";

const Hero = ({ imagesArray }) => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  /*

buttonLink, desktopImagePosition, device, heroPosition, imgAlt, mobileButtonPosition, subtitle, title, topUrl, url




*/

  return (
    // <section id="hero" className={styles.heroContainer}>
    //   <SliderComponent>
    //     <SwiperSlide>
    //       <div className={styles.testheroSliderContainer}>
    //         <div className={styles.testheroTopContainer}>
    //           <h1>Llegó tu Visa Crédito PedidosYa Pagos</h1>
    //           <h3>Con beneficios en restaurantes y supermercados</h3>
    //           <MainButton />
    //         </div>
    //         <img
    //           src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/croppedHero.svg?alt=media&token=ecbaa0a4-f343-4d0d-bf68-76c003509003"
    //           alt=""
    //           className={styles.heroImgBottom__bottom}
    //         />
    //       </div>
    //     </SwiperSlide>
    //     {windowWidth > 500 ? (
    //       <SwiperSlide>
    //         <div className={styles.testheroSliderContainer}>
    //           <div className={styles.testheroTopContainer}>
    //             <img
    //               src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/VisaTop.svg?alt=media&token=271cc3ff-3ac8-4ee8-b9a5-3c03bb8c6d27"
    //               alt="Visa Disclaimer"
    //               className={styles.heroImgTop}
    //             />
    //             <h1>¡Ganate un balón Al Rihla de Adidas, gracias a Visa!</h1>
    //             <h3>Pide tu Visa Crédito, haz 3 compras y gana.</h3>
    //             <MainButton />
    //           </div>
    //           <img
    //             src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/ball.png?alt=media&token=fb26b71f-2d4a-46d7-99a3-21201f6eb24a"
    //             alt=""
    //             className={styles.heroImgBottom__center}
    //           />
    //         </div>
    //       </SwiperSlide>
    //     ) : botonarriba ? (
    //       <SwiperSlide>
    //         <div className={styles.testheroSliderContainer}>
    //           <div className={styles.testheroTopContainer}>
    //             <img
    //               src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/VisaTop.svg?alt=media&token=271cc3ff-3ac8-4ee8-b9a5-3c03bb8c6d27"
    //               alt="Visa Disclaimer"
    //               className={styles.heroImgTop}
    //             />
    //             <h1>¡Ganate un balón Al Rihla de Adidas, gracias a Visa!</h1>
    //             <h3>Pide tu Visa Crédito, haz 3 compras y gana.</h3>
    //           </div>
    //           <MainButton />
    //           {/* <div className={styles.img}></div> */}
    //           <img
    //             src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/ball.png?alt=media&token=fb26b71f-2d4a-46d7-99a3-21201f6eb24a"
    //             alt=""
    //           />
    //         </div>
    //       </SwiperSlide>
    //     ) : (
    //       <SwiperSlide>
    //         <div className={styles.testheroSliderContainerButtonBottom}>
    //           <div className={styles.testheroTopContainer}>
    //             <img
    //               src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/VisaTop.svg?alt=media&token=271cc3ff-3ac8-4ee8-b9a5-3c03bb8c6d27"
    //               alt="Visa Disclaimer"
    //               className={styles.heroImgTop}
    //             />
    //             <h1>¡Ganate un balón Al Rihla de Adidas, gracias a Visa!</h1>
    //             <h3>Pide tu Visa Crédito, haz 3 compras y gana.</h3>
    //           </div>
    //           <img
    //             src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/ball.png?alt=media&token=fb26b71f-2d4a-46d7-99a3-21201f6eb24a"
    //             className={styles.testheroImgCenter}
    //           />
    //           <MainButton />
    //           {/* <div className={styles.imgForCenter}></div> */}
    //         </div>
    //       </SwiperSlide>
    //     )}
    //   </SliderComponent>
    // </section>
    <section id="hero" className={styles.heroContainer}>
      <SliderComponent>
        {windowWidth > 500
          ? imagesArray
              .filter((item) => item.device !== "mobile")
              .map((data) => (
                <SwiperSlide>
                  <div className={styles.testheroSliderContainer}>
                    <div className={styles.testheroTopContainer}>
                      {data.topUrl !== null ? (
                        <img src={data.topUrl} className={styles.heroImgTop} />
                      ) : null}
                      <h1>{data.title}</h1>
                      <h3>{data.subtitle}</h3>
                      <MainButton />
                    </div>
                    <img
                      src={data.url}
                      alt={data.imgAlt}
                      className={
                        data.desktopImagePosition === "bottom"
                          ? styles.heroImgBottom__bottom
                          : styles.heroImgBottom__center
                      }
                    />
                  </div>
                </SwiperSlide>
              ))
          : imagesArray
              .filter((item) => item.device === "mobile")
              .map((data) => (
                <SwiperSlide>
                  <div className={styles.testheroSliderContainer}>
                    <div className={styles.testheroTopContainer}>
                      {data.topUrl !== null ? (
                        <img src={data.topUrl} className={styles.heroImgTop} />
                      ) : null}
                      <h1>{data.title}</h1>
                      <h3>{data.subtitle}</h3>
                      {data.mobileButtonPosition === "top" ? (
                        <MainButton />
                      ) : undefined}
                    </div>
                    <img
                      src={data.url}
                      alt={data.imgAlt}
                      className={
                        data.desktopImagePosition === "bottom"
                          ? styles.heroImgBottom__bottom
                          : styles.heroImgBottom__center
                      }
                    />
                    {data.mobileButtonPosition === "bottom" ? (
                      <div className={styles.bottomButtonContainer}>
                        <MainButton />
                      </div>
                    ) : undefined}
                  </div>
                </SwiperSlide>
              ))}
      </SliderComponent>
    </section>
  );
};

export default Hero;

/*

  {
    url: "http...",
    imgAlt: "alt",
    title: "title",
    subtitle: "subtitle"
  } 



  
*/
