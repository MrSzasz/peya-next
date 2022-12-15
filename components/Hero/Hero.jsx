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

  return (
    <section id="hero" className={styles.heroContainer}>
      <SliderComponent>
        {imagesArray.length === 0 ? (
          <div className={styles.heroLoading}>
            <Loading />
          </div>
        ) : windowWidth < 500 ? (
          imagesArray
            .filter((item) => item.mobile === true)
            .map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.url} alt={item.imgAlt} />
              </SwiperSlide>
            ))
        ) : (
          imagesArray
            .filter((item) => item.mobile !== true)
            .map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.url} alt={item.imgAlt} />
              </SwiperSlide>
            ))
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
