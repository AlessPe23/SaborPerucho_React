import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { RiArrowRightCircleLine, RiArrowLeftCircleLine } from "react-icons/ri";

type SlidesProps = {
  id: number;
  src: string;
  alt: string;

};
interface CarruselProps {
  slides: SlidesProps[];
}

const Carrusel = ({ slides }: CarruselProps) => {
  return (
    <Swiper
      effect={"coverflow"}
      spaceBetween={50}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation, A11y]}
      className="mySwiper relative group left-40"
      navigation={{
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide",
      }}
    >
      {slides.map(({ id, src, alt }) => (
        <SwiperSlide key={id}>
          {src.endsWith("mp4") ? (
            <video
              autoPlay
              muted
              loop
              className="mx-auto w-[100%] "
            >
              <source
                src="/public/VideoPromo.mp4"
                type="video/mp4"
              />
            </video>
          ) : (
            <img
            className="w-[100%]"
              src={src}
              alt={alt}

            />
          )}
        </SwiperSlide>
      ))}
      <div className="top-[50%] absolute z-10 button-prev-slide left-0 duration-500 w-[40px] h-[40px] text-3xl text-white bg-black grid place-items-center">
        <RiArrowLeftCircleLine />
      </div>
      <div className="top-[50%] absolute z-10 button-next-slide right-0 duration-500 w-[40px] h-[40px] text-3xl text-white bg-black grid place-items-center">
        <RiArrowRightCircleLine />
      </div>
    </Swiper>
  );
};

export default Carrusel;
