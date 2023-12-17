import Swipe from "./Swipe";
import { data, data_2, data_3 } from "../../../data.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className="my-8">
      <Swipe />
      <div className="mt-20">
        <h1 className="text-center md:text-4xl xl:text-6xl text-2xl font-bold">
          NEW RELEASES
        </h1>
        <div className="mt-4">
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            loop={true}
            className="mySwiper"
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1536: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card w-full max-w-[200px] border-2 border-primary bg-base-100">
                  <figure className="px-4 py-4">
                    <img src={item.img} alt="Shoes" className="mx-auto" />
                  </figure>
                </div>
                <div className="card-body items-center">
                  <h2 className="font-bold text-xl mt-4">{item.title}</h2>
                  <p className="text-neutral-700 font-light text-sm">
                    {item.description}
                  </p>
                  <h2 className="text-neutral-400 font-bold">{item.type}</h2>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">{item.price}</h2>
                    <h2 className="font-semibold line-through text-red-500">
                      {item.old_price}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className="bg-[#00230F] text-white py-2 px-24 mx-auto flex mt-12 hover:bg-[#63C630] transition-all duration-300 ease-out">
          SEE ALL
        </button>
      </div>
      <div className="mt-20">
        <h1 className="text-center md:text-4xl xl:text-6xl text-2xl font-bold">
          PRE ORDERS
        </h1>
        <div className="mt-4">
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            loop={true}
            className="mySwiper"
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1536: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            {data_2.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card w-full max-w-96 border-2 border-primary bg-base-100">
                  <figure className="px-4 py-4 ">
                    <img src={item.img} alt="Shoes" className="mx-auto" />
                  </figure>
                </div>
                <div className="card-body items-center">
                  <h2 className="font-bold text-xl mt-4">{item.title}</h2>
                  <p className="text-neutral-700 font-light text-sm">
                    {item.description}
                  </p>
                  <h2 className="text-neutral-400 font-bold">{item.type}</h2>
                  <h2 className="font-semibold">{item.price}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className="bg-[#00230F] text-white py-2 px-24 mx-auto flex mt-12 hover:bg-[#63C630] transition-all duration-300 ease-out">
          SEE ALL
        </button>
      </div>
      <div className="mt-20">
        <h1 className="text-center md:text-4xl xl:text-6xl text-2xl font-bold">
          THE BEATLES
        </h1>
        <div className="mt-4">
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            loop={true}
            className="mySwiper"
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1536: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            {data_3.map((item, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <div className="card w-full max-w-96 border-2 border-primary bg-base-100">
                  <figure className="">
                    <img src={item.img} alt="Shoes" className="mx-auto " />
                  </figure>
                </div>
                <div className="card-body items-center">
                  <h2 className="font-bold text-xl mt-4">{item.title}</h2>
                  <p className="text-neutral-700 font-light text-sm">
                    {item.description}
                  </p>
                  <h2 className="text-neutral-400 font-bold">{item.type}</h2>
                  <h2 className="font-semibold">{item.price}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className="bg-[#00230F] text-white py-2 px-24 mx-auto flex mt-12 hover:bg-[#63C630] transition-all duration-300 ease-out">
          SEE ALL
        </button>
      </div>
    </div>
  );
};

export default Hero;
