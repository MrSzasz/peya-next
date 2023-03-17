import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import SliderComponent from "../SliderComponent/SliderComponent";
import { SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import styles from "./PromoCarousel.module.scss";

const PromoCarousel = ({ imagesArray, tyc }) => {
  const [windowWidth, setWindowWidth] = useState(1000);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  console.log(imagesArray);

  return (
    <section className={styles.promoCarouselContainer}>
      <SliderComponent id={"promosCarouselId"}>
        {imagesArray.length === 0 ? (
          <SwiperSlide>
            <SkeletonLoader locationClass={"skeletonPromosContainer"} />
          </SwiperSlide>
        ) : windowWidth > 500 ? (
          imagesArray
            .filter((item) => item.device === false)
            .map((filteredItem) => (
              <SwiperSlide key={filteredItem.id}>
                <img src={filteredItem.url} alt={filteredItem.imgAlt} />
                {filteredItem.tyc !== "" && filteredItem.tyc !== null ? (
                  <small onClick={() => tyc(filteredItem.tyc)}>
                    Más información
                  </small>
                ) : null}
              </SwiperSlide>
            ))
        ) : (
          imagesArray
            .filter((item) => item.device === true)
            .map((filteredItem) => (
              <SwiperSlide key={filteredItem.id}>
                <img src={filteredItem.url} alt={filteredItem.imgAlt} />
                {filteredItem.tyc !== "" && filteredItem.tyc !== null ? (
                  <small onClick={() => tyc(filteredItem.tyc)}>
                    Más información
                  </small>
                ) : null}
              </SwiperSlide>
            ))
        )}
        <div className={styles.moreInfoLinkCarouselContainer}></div>
      </SliderComponent>
    </section>
  );
};

export default PromoCarousel;
