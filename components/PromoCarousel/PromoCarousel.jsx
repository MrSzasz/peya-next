import { SwiperSlide } from "swiper/react";
import SliderComponent from "../SliderComponent/SliderComponent";
import styles from "./PromoCarousel.module.scss";

const PromoCarousel = ({ imagesArray }) => {
  return (
    <section className={styles.promoCarouselContainer}>
      <SliderComponent>
        {/* {imagesArray.map((item) => (
          <SwiperSlide>
            <img src={item.url} alt={item.imgAlt} />
          </SwiperSlide>
        ))} */}
        {window.innerWidth < 500
          ? imagesArray
              .filter((item) => item.mobile === "on")
              .map((item) => (
                <SwiperSlide>
                  <img src={item.url} alt={item.imgAlt} />
                </SwiperSlide>
              ))
          : imagesArray
              .filter((item) => item.mobile !== "on")
              .map((item) => (
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
