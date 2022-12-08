import { SwiperSlide } from "swiper/react";
import SliderComponent from "../SliderComponent/SliderComponent";
import styles from "./PromoCarousel.module.scss";

const PromoCarousel = () => {
  return (
    <section className={styles.promoCarouselContainer}>
      <SliderComponent>
        <SwiperSlide>
          <img src="/images/promoImg.png" alt="promo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/promoImg.png" alt="promo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/promoImg.png" alt="promo" />
        </SwiperSlide>
      </SliderComponent>
    </section>
  );
};

export default PromoCarousel;
