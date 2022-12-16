import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import SliderComponent from "../SliderComponent/SliderComponent";
import styles from "./PromoCarousel.module.scss";

const PromoCarousel = ({ loading, imagesArray }) => {
  const [windowWidth, setWindowWidth] = useState(1000);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <section className={styles.promoCarouselContainer}>
      {/* <SliderComponent>
        {windowWidth > 500
          ? imagesArray
              .filter((item) => item.device === "mobile")
              .map((item) => ( 
                <SwiperSlide key={item.id}>
                  <img src={item.url} alt={item.imgAlt} />
                </SwiperSlide>
              ))
          : imagesArray
              .filter((item) => item.device !== "mobile")
              .map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={item.url} alt={item.imgAlt} />
                </SwiperSlide>
              ))}
      </SliderComponent> */}
      <SliderComponent>
        {imagesArray.length === 0 ? (
          <SwiperSlide>
            <SkeletonLoader locationClass={"skeletonPromosContainer"} />
          </SwiperSlide>
        ) : windowWidth > 500 ? (
          imagesArray
            .filter((item) => item.device === false)
            .sort(function (a, b) {
              return a.sort - b.sort;
            })
            .map((filteredItem) => (
              <SwiperSlide key={filteredItem.id}>
                <img src={filteredItem.url} alt={filteredItem.imgAlt} />
              </SwiperSlide>
            ))
        ) : (
          imagesArray
            .filter((item) => item.device === true)
            .sort(function (a, b) {
              return a.sort - b.sort;
            })
            .map((filteredItem) => (
              <SwiperSlide key={filteredItem.id}>
                <img src={filteredItem.url} alt={filteredItem.imgAlt} />
              </SwiperSlide>
            ))
        )}
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
