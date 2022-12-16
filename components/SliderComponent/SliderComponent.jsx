import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const SliderComponent = ({ children }) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      // loop={true}
      // autoplay={{
      //   delay: 4000,
      //   disableOnInteraction: false,
      // }}
      autoHeight={true}
    >
      {children}
    </Swiper>
  );
};

export default SliderComponent;
