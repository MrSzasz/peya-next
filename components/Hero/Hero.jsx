import { SwiperSlide } from "swiper/react";
import SliderComponent from "../SliderComponent/SliderComponent";
import styles from "./Hero.module.scss";
import "swiper/css";
import MainButton from "../MainButton/MainButton";

const Hero = () => {
  return (
    <section id="hero" className={styles.heroContainer}>
      <SliderComponent>
        <SwiperSlide>
          <div className={styles.heroSliderContainer}>
            <div className={styles.heroContentLeft}>
              <h1>Llegó tu Visa Crédito PedidosYa Pagos</h1>
              <h3>Con beneficios en restaurantes y supermercados</h3>
              <MainButton />
            </div>
            <img src="/images/hero.png" alt="hero" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.heroSliderContainer}>
            <div className={styles.heroContentLeft}>
              <h1>Llegó tu Visa Crédito PedidosYa Pagos</h1>
              <h3>Con beneficios en restaurantes y supermercados</h3>
              <MainButton />
            </div>
            <img src="/images/hero.png" alt="hero" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.heroSliderContainer}>
            <div className={styles.heroContentLeft}>
              <h1>Llegó tu Visa Crédito PedidosYa Pagos</h1>
              <h3>Con beneficios en restaurantes y supermercados</h3>
              <MainButton />
            </div>
            <img src="/images/hero.png" alt="hero" />
          </div>
        </SwiperSlide>
      </SliderComponent>
    </section>
  );
};

export default Hero;
