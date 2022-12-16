import { SwiperSlide } from "swiper/react";
import SliderComponent from "../SliderComponent/SliderComponent";
import styles from "./Hero.module.scss";
import "swiper/css";
import MainButton from "../MainButton/MainButton";
import { useEffect, useState } from "react";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import { motion } from "framer-motion";

const Hero = ({ imagesArray }) => {
  const [windowWidth, setWindowWidth] = useState(null);

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
            .filter((item) => item.device !== "mobile" && item.id !== "links")
            .sort(function (a, b) {
              return a.sort - b.sort;
            })
            .map((data) => (
              <SwiperSlide>
                <div className={styles.heroSliderContainer}>
                  <div className={styles.heroTopContainer}>
                    {data.topUrl !== null ? (
                      <img src={data.topUrl} className={styles.heroImgTop} />
                    ) : null}
                    <h1>{data.title}</h1>
                    <h3>{data.subtitle}</h3>
                    <MainButton href={data.buttonLink} />
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
            .filter((item) => item.device === "mobile" && item.id !== "links")
            .sort(function (a, b) {
              return a.sort - b.sort;
            })
            .map((data) => (
              <SwiperSlide>
                <div className={styles.heroSliderContainer}>
                  <div className={styles.heroTopContainer}>
                    {data.topUrl !== null ? (
                      <img src={data.topUrl} className={styles.heroImgTop} />
                    ) : null}
                    <h1>{data.title}</h1>
                    <h3>{data.subtitle}</h3>
                    {data.mobileButtonPosition === "top" ? (
                      <MainButton href={data.buttonLink} />
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
                      <MainButton href={data.buttonLink} />
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
