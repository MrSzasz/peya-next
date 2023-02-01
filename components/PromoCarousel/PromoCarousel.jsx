import SliderComponent from "../SliderComponent/SliderComponent";
import { SwiperSlide } from "swiper/react";
import styles from "./PromoCarousel.module.scss";

const PromoCarousel = () => {
  return (
    <section className={styles.promoCarouselContainer}>
      <SliderComponent id={"promosCarouselId"}>
        <SwiperSlide>
          <img src={"/demo/promos/promo.png"} alt={"Promo"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/demo/promos/promo.png"} alt={"Promo"} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={"/demo/promos/promo.png"} alt={"Promo"} />
        </SwiperSlide>
        <div className={styles.moreInfoLinkCarouselContainer}>
        </div>
      </SliderComponent>
    </section>
  );
};

export default PromoCarousel;
