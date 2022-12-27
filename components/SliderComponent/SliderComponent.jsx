import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const SliderComponent = ({ children, id }) => {
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      id={id}
    >
      {children}
    </Swiper>
  );
};

export default SliderComponent;
