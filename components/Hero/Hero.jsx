// import { SwiperSlide } from "swiper/react";
// import SliderComponent from "../SliderComponent/SliderComponent";
// import styles from "./Hero.module.scss";
// import "swiper/css";
// import MainButton from "../MainButton/MainButton";
// import Loading from "../Loading/Loading";

// const Hero = ({ imagesArray }) => {
//   return (
//     <section id="hero" className={styles.heroContainer}>
//       <SliderComponent>
//         {imagesArray.length === 0 ? (
//           <div className={styles.heroLoading}>
//             <Loading />
//           </div>
//         ) : (
//           imagesArray.map((data) => (
//             <SwiperSlide key={data.id}>
//               <div className={styles.heroSliderContainer}>
//                 <div className={styles.heroContentLeft}>
//                   <h1>{data.title}</h1>
//                   <h3>{data.subtitle}</h3>
//                   <MainButton />
//                 </div>
//                 <img src={data.url} alt={data.imgAlt} />
//               </div>
//             </SwiperSlide>
//           ))
//         )}
//       </SliderComponent>
//     </section>
//   );
// };

// export default Hero;

/* ================================================================================================================================= */
/* ================================================================================================================================= */
/* ================================================================================================================================= */
/* ================================================================================================================================= */
/* ================================================================================================================================= */
/* ================================================================================================================================= */
/* ================================================================================================================================= */

// import { SwiperSlide } from "swiper/react";
// import SliderComponent from "../SliderComponent/SliderComponent";
// import styles from "./Hero.module.scss";
// import "swiper/css";
// import MainButton from "../MainButton/MainButton";
// import Loading from "../Loading/Loading";
// import { useEffect, useState } from "react";

// const Hero = ({ imagesArray }) => {
//   const [windowWidth, setWindowWidth] = useState(null);

//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//   }, []);
//   const top1 = `
//   align-self: center;
//   justify-self: flex-end;`;

//   const botonarriba = false;

//   return (
//     <section id="hero" className={styles.heroContainer}>
//       <SliderComponent>
//         <SwiperSlide>
//           <div className={styles.heroSliderContainer}>
//             <div className={styles.heroContentLeft}>
//               <h1>Llegó tu Visa Crédito PedidosYa Pagos</h1>
//               <h3>Con beneficios en restaurantes y supermercados</h3>
//               <MainButton />
//             </div>
//             {/* <div className={styles.img}> */}
//             {/* <div className="contenidoNuevo"></div> */}
//             {/* <div className={styles.contenidoNuevo}></div> */}
//             {/* <style jsx>{`
//                 .contenidoNuevo {
//                   height: 20px;
//                   width: 20px;
//                   background-color: black;
//                   ${top1}
//                 }
//               `}</style> */}
//             {/* </div> */}
//             <img src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/hero%2Fhero1.svg?alt=media&token=71b70b12-d326-4ab3-95f9-cac873748036" alt="" className={styles.heroImgBottom} />
//           </div>
//         </SwiperSlide>{" "}
//         {windowWidth > 500 ? (
//           <SwiperSlide>
//             <div className={styles.heroSliderContainer}>
//               <div className={styles.heroContentLeft}>
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/VisaTop.svg?alt=media&token=271cc3ff-3ac8-4ee8-b9a5-3c03bb8c6d27"
//                   alt="Visa Disclaimer"
//                   className={styles.heroImgTop}
//                 />
//                 <h1>¡Ganate un balón Al Rihla de Adidas, gracias a Visa!</h1>
//                 <h3>Pide tu Visa Crédito, haz 3 compras y gana.</h3>
//                 <MainButton />
//               </div>
//               <div className={styles.img}></div>
//             </div>
//           </SwiperSlide>
//         ) : botonarriba ? (
//           <SwiperSlide>
//             <div className={styles.heroSliderContainer}>
//               <div className={styles.heroContentLeft}>
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/VisaTop.svg?alt=media&token=271cc3ff-3ac8-4ee8-b9a5-3c03bb8c6d27"
//                   alt="Visa Disclaimer"
//                   className={styles.heroImgTop}
//                 />
//                 <h1>¡Ganate un balón Al Rihla de Adidas, gracias a Visa!</h1>
//                 <h3>Pide tu Visa Crédito, haz 3 compras y gana.</h3>
//               </div>
//               <MainButton />
//               {/* <div className={styles.img}></div> */}
//               <img
//                 src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/ball.png?alt=media&token=fb26b71f-2d4a-46d7-99a3-21201f6eb24a"
//                 alt=""
//               />
//             </div>
//           </SwiperSlide>
//         ) : (
//           <SwiperSlide>
//             <div className={styles.heroSliderContainerButtonCenter}>
//               <div className={styles.heroContentLeft}>
//                 <img
//                   src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/VisaTop.svg?alt=media&token=271cc3ff-3ac8-4ee8-b9a5-3c03bb8c6d27"
//                   alt="Visa Disclaimer"
//                   className={styles.heroImgTop}
//                 />
//                 <h1>¡Ganate un balón Al Rihla de Adidas, gracias a Visa!</h1>
//                 <h3>Pide tu Visa Crédito, haz 3 compras y gana.</h3>
//               </div>
//               <img
//                 src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/ball.png?alt=media&token=fb26b71f-2d4a-46d7-99a3-21201f6eb24a"
//                 className={styles.heroImgCenter}
//               />
//               <MainButton />
//               <div className={styles.img}></div>
//             </div>
//           </SwiperSlide>
//         )}
//       </SliderComponent>
//     </section>
//   );
// };

// export default Hero;

/* ================================================================================================================================= */
/* ================================================================================================================================= */
/* ================================================================================================================================= */
/* ================================================================================================================================= */
/* ================================================================================================================================= */
/* ================================================================================================================================= */
/* ================================================================================================================================= */

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
  const top1 = `
  align-self: center;
  justify-self: flex-end;`;

  const botonarriba = false;

  return (
    <section id="hero" className={styles.heroContainer}>
      {<style jsx>{``}</style>}
      <SliderComponent>
        {/* <SwiperSlide>
          <div className={styles.heroSliderContainer}>
            <div className={styles.heroContentLeft}>
              <h1>Llegó tu Visa Crédito PedidosYa Pagos</h1>
              <h3>Con beneficios en restaurantes y supermercados</h3>
              <MainButton />
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/hero%2Fhero1.svg?alt=media&token=71b70b12-d326-4ab3-95f9-cac873748036"
              alt=""
              className={styles.heroImgBottom}
            />
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className={styles.testheroSliderContainer}>
            <div className={styles.testheroTopContainer}>
              <h1>Llegó tu Visa Crédito PedidosYa Pagos</h1>
              <h3>Con beneficios en restaurantes y supermercados</h3>
              <MainButton />
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/croppedHero.svg?alt=media&token=ecbaa0a4-f343-4d0d-bf68-76c003509003"
              alt=""
              className={styles.heroImgBottom__bottom}
            />
          </div>
        </SwiperSlide>
        {windowWidth > 500 ? (
          <SwiperSlide>
            {/* <div className={styles.testheroSliderContainer}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/VisaTop.svg?alt=media&token=271cc3ff-3ac8-4ee8-b9a5-3c03bb8c6d27"
                alt="Visa Disclaimer"
                className={styles.heroImgTop}
              />
              <div className={styles.testheroTopContainer}>
                <h1>¡Ganate un balón Al Rihla de Adidas, gracias a Visa!</h1>
                <h3>Pide tu Visa Crédito, haz 3 compras y gana.</h3>
                <MainButton />
              </div>
              <div className={styles.img}></div>
            </div> */}
            <div className={styles.testheroSliderContainer}>
              <div className={styles.testheroTopContainer}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/VisaTop.svg?alt=media&token=271cc3ff-3ac8-4ee8-b9a5-3c03bb8c6d27"
                  alt="Visa Disclaimer"
                  className={styles.heroImgTop}
                />
                <h1>¡Ganate un balón Al Rihla de Adidas, gracias a Visa!</h1>
                <h3>Pide tu Visa Crédito, haz 3 compras y gana.</h3>
                <MainButton />
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/ball.png?alt=media&token=fb26b71f-2d4a-46d7-99a3-21201f6eb24a"
                alt=""
                className={styles.heroImgBottom__center}
              />
            </div>
          </SwiperSlide>
        ) : botonarriba ? (
          <SwiperSlide>
            <div className={styles.testheroSliderContainer}>
              <div className={styles.testheroTopContainer}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/VisaTop.svg?alt=media&token=271cc3ff-3ac8-4ee8-b9a5-3c03bb8c6d27"
                  alt="Visa Disclaimer"
                  className={styles.heroImgTop}
                />
                <h1>¡Ganate un balón Al Rihla de Adidas, gracias a Visa!</h1>
                <h3>Pide tu Visa Crédito, haz 3 compras y gana.</h3>
              </div>
              <MainButton />
              {/* <div className={styles.img}></div> */}
              <img
                src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/ball.png?alt=media&token=fb26b71f-2d4a-46d7-99a3-21201f6eb24a"
                alt=""
              />
            </div>
          </SwiperSlide>
        ) : (
          <SwiperSlide>
            <div className={styles.testheroSliderContainerButtonBottom}>
              <div className={styles.testheroTopContainer}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/VisaTop.svg?alt=media&token=271cc3ff-3ac8-4ee8-b9a5-3c03bb8c6d27"
                  alt="Visa Disclaimer"
                  className={styles.heroImgTop}
                />
                <h1>¡Ganate un balón Al Rihla de Adidas, gracias a Visa!</h1>
                <h3>Pide tu Visa Crédito, haz 3 compras y gana.</h3>
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/peya-pagos.appspot.com/o/ball.png?alt=media&token=fb26b71f-2d4a-46d7-99a3-21201f6eb24a"
                className={styles.testheroImgCenter}
              />
              <MainButton />
              {/* <div className={styles.imgForCenter}></div> */}
            </div>
          </SwiperSlide>
        )}
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
