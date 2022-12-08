// Import Swiper React components
import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const SliderComponent = ({ children }) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={true}
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 40000,
        disableOnInteraction: false,
      }}
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      {children}
    </Swiper>
  );
};

export default SliderComponent;
