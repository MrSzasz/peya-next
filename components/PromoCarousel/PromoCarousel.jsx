import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import SliderComponent from "../SliderComponent/SliderComponent";
import styles from "./PromoCarousel.module.scss";

const PromoCarousel = ({ imagesArray }) => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <section className={styles.promoCarouselContainer}>
      <SliderComponent>
        {windowWidth < 500
          ? imagesArray
              .filter((item) => item.mobile === true)
              .map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={item.url} alt={item.imgAlt} />
                </SwiperSlide>
              ))
          : imagesArray
              .filter((item) => item.mobile !== true)
              .map((item) => (
                <SwiperSlide key={item.id}>
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
