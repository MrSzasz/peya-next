import { SwiperSlide } from "swiper/react";
import SliderComponent from "../SliderComponent/SliderComponent";
import styles from "./Hero.module.scss";
import "swiper/css";
import MainButton from "../MainButton/MainButton";
import Loading from "../Loading/Loading";

const Hero = ({ imagesArray }) => {
  return (
    <section id="hero" className={styles.heroContainer}>
      <SliderComponent>
        {imagesArray.length === 0 ? (
          <div className={styles.heroLoading}>
            <Loading />
          </div>
        ) : (
          imagesArray.map((data) => (
            <SwiperSlide key={data.id}>
              <div className={styles.heroSliderContainer}>
                <div className={styles.heroContentLeft}>
                  {data?.topImg ? <img src={data.topImg} /> : null}
                  <h1>{data.title}</h1>
                  <h3>{data.subtitle}</h3>
                  <MainButton />
                </div>
                <img src={data.url} alt={data.imgAlt} />
              </div>
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
