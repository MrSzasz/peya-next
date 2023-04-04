import SliderComponent from "../SliderComponent/SliderComponent";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import MainButton from "../MainButton/MainButton";
import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Hero.module.scss";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

const Hero = ({ imagesArray, fn, tyc }) => {
  const [windowWidth, setWindowWidth] = useState(null);
  const { componentLoaded } = useAppContext();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <section id="hero" className={styles.heroContainer}>
      <SliderComponent>
        {imagesArray.length === 0 ? (
          <SwiperSlide>
            <SkeletonLoader locationClass={"skeletonHeroContainer"} />
          </SwiperSlide>
        ) : windowWidth > 500 ? (
          imagesArray
            .filter((item) => item.device !== "mobile")
            .map((data) => (
              <SwiperSlide key={data.id}>
                <div className={styles.heroSliderContainer}>
                  <div className={styles.heroTopContainer}>
                    {data.topUrl !== null ? (
                      <img
                        src={data.topUrl}
                        className={styles.heroImgTop}
                        alt={`Imagen extra, que acompaña a ${data.imgAlt}`}
                      />
                    ) : null}
                    <h1>{data.title}</h1>
                    <h3>{data.subtitle}</h3>
                    {/* {data.textButton === "Pedir Ya" ? (
                      <MainButton href={data.buttonLink} fn={fn} />
                    ) : (
                      <MainButton href={data.buttonLink} />
                    )} */}
                    <MainButton
                      href={data.buttonLink}
                      fn={fn}
                      component="Hero"
                    />
                    {data.tyc !== "" && data.tyc !== null ? (
                      <small
                        onClick={() => {
                          tyc(data.tyc),
                            componentLoaded(
                              "clickedButtons",
                              "campaing_name",
                              data.title,
                              "cobranded_campaign_info.clicked"
                            );
                        }}
                      >
                        Más información
                      </small>
                    ) : undefined}
                  </div>
                  {data.desktopImagePosition === "bottom" ? (
                    <motion.img
                      src={data.url}
                      alt={data.imgAlt}
                      className={styles.heroImgBottom__bottom}
                      initial={{
                        transform: "translateY(+100%)",
                      }}
                      transition={{ delay: 5 }}
                      whileInView={{
                        transform: "translateY(0%)",
                        transition: {
                          duration: 1,
                          type: "tween",
                          damping: 25,
                          stiffness: 500,
                        },
                      }}
                      viewport={{ once: true }}
                      exit={{
                        transform: "translateY(0%)",
                      }}
                    />
                  ) : (
                    <motion.img
                      src={data.url}
                      alt={data.imgAlt}
                      className={styles.heroImgBottom__center}
                      initial={{
                        transform: "translateX(+100%)",
                      }}
                      whileInView={{
                        transform: "translateX(0%)",
                        transition: {
                          duration: 1,
                          type: "tween",
                          damping: 25,
                          stiffness: 500,
                        },
                      }}
                      viewport={{ once: true }}
                      exit={{
                        transform: "translateY(0%)",
                      }}
                    />
                  )}
                </div>
              </SwiperSlide>
            ))
        ) : (
          imagesArray
            .filter((item) => item.device === "mobile")
            .map((data) => (
              <SwiperSlide key={data.id}>
                <div className={styles.heroSliderContainer}>
                  <div className={styles.heroTopContainer}>
                    {data.topUrl !== null ? (
                      <img
                        src={data.topUrl}
                        className={styles.heroImgTop}
                        alt={`Imagen extra, que acompaña a ${data.imgAlt}`}
                      />
                    ) : null}
                    <h1>{data.title}</h1>
                    <h3>{data.subtitle}</h3>
                    {data.mobileButtonPosition === "top" ? (
                      <>
                        <MainButton href={data.buttonLink} component="Hero" />
                        {data.tyc !== "" && data.tyc !== null ? (
                          <small
                            onClick={() => {
                              tyc(data.tyc),
                                componentLoaded(
                                  "clickedButtons",
                                  "campaing_name",
                                  data.title,
                                  "cobranded_campaign_info.clicked"
                                );
                            }}
                          >
                            Más información
                          </small>
                        ) : undefined}
                      </>
                    ) : undefined}
                  </div>
                  <motion.img
                    src={data.url}
                    alt={data.imgAlt}
                    className={
                      data.desktopImagePosition === "bottom"
                        ? styles.heroImgBottom__bottom
                        : styles.heroImgBottom__center
                    }
                    initial={{
                      transform: "translateX(+100%)",
                    }}
                    transition={{ delay: 5 }}
                    whileInView={{
                      transform: "translateX(0%)",
                      transition: {
                        duration: 1,
                        type: "tween",
                        damping: 25,
                        stiffness: 500,
                      },
                    }}
                    viewport={{ once: true }}
                    exit={{
                      transform: "translateX(0%)",
                    }}
                  />
                  {data.mobileButtonPosition === "bottom" ? (
                    <div className={styles.bottomButtonContainer}>
                      <MainButton href={data.buttonLink} component="Hero" />
                    </div>
                  ) : undefined}
                </div>
              </SwiperSlide>
            ))
        )}
      </SliderComponent>
    </section>
  );
};

export default Hero;
