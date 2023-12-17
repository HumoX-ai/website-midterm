// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function Swipe() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <img src="/hero_1.png" alt="" className="sm:block hidden" />
          <img src="/hero_mobile_1.webp" alt="" className="sm:hidden block" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hero_2.webp" alt="" className="sm:block hidden" />
          <img src="/hero_mobile_2.webp" alt="" className="sm:hidden block" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hero_3.webp" alt="" className="sm:block hidden" />
          <img src="/hero_mobile_3.webp" alt="" className="sm:hidden block" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
