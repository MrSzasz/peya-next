import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import SliderComponent from "../SliderComponent/SliderComponent";
import { SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import styles from "./PromoCarousel.module.scss";
import Image from "next/image";

const PromoCarousel = ({ imagesArray }) => {
  const [windowWidth, setWindowWidth] = useState(1000);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

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
                <Image
                  src={filteredItem.url}
                  alt={filteredItem.imgAlt}
                  height={0}
                  width={0}
                  quality={100}
                  sizes="100vw"
                  className="w-auto h-auto"
                />
              </SwiperSlide>
            ))
        ) : (
          imagesArray
            .filter((item) => item.device === true)
            .map((filteredItem) => (
              <SwiperSlide key={filteredItem.id}>
                <Image
                  src={filteredItem.url}
                  alt={filteredItem.imgAlt}
                  height={0}
                  width={0}
                  unoptimized
                  sizes="100vw"
                  className="w-auto h-auto"
                />
              </SwiperSlide>
            ))
        )}
        <div className={styles.moreInfoLinkCarouselContainer}>
          {/* <a
            target="_blank"
            href="/docs/tyc-balon.html"
            className={styles.moreInfoLinkCarousel}
          >
            Más información
          </a> */}
        </div>
      </SliderComponent>
    </section>
  );
};

export default PromoCarousel;
