import { SwiperSlide } from "swiper/react";
import SliderComponent from "../SliderComponent/SliderComponent";
import styles from "./PromoCarousel.module.scss";

const PromoCarousel = ({ imagesArray }) => {
  console.log(imagesArray);

  return (
    <section className={styles.promoCarouselContainer}>
      <SliderComponent>
        {imagesArray.map((item) => (
          <SwiperSlide>
            <img src={item.url} alt={item.imgAlt} />
          </SwiperSlide>
        ))}
      </SliderComponent>
    </section>
  );
};

export default PromoCarousel;

/*

  {
    imgAlt: "alt",
    url: "http..."
  } 

*/
