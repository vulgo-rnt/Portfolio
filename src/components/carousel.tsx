"use client";

import { ReactNode } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/carousel.css";
import { ArrowIcon } from "./icons/arrow";

interface PropsCarousel {
  children: ReactNode[];
  slidesPerGroup?: number;
  className?: string;
  wrapperClassName?: string;
}

export default function Carousel(props: PropsCarousel) {
  return (
    <Swiper
      slidesPerView={props.slidesPerGroup || 1}
      modules={[Pagination]}
      speed={700}
      pagination={{
        clickable: true,
      }}
      tag="section"
      spaceBetween={40}
      grabCursor
      touchEventsTarget="container"
      className={props.className}
      wrapperClass={props.wrapperClassName}
    >
      <SlidePrevButton />
      {props.children.map((el, index) => (
        <SwiperSlide key={index}>{el}</SwiperSlide>
      ))}
      <SlideNextButton />
    </Swiper>
  );
}

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      className="absolute top-[280px] right-0 z-10 max-carousel_sm:hidden"
      onClick={() => swiper.slideNext()}
    >
      <ArrowIcon direction="right" />
    </button>
  );
}

function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button
      className="absolute top-[280px] left-0 z-10 max-carousel_sm:hidden"
      onClick={() => swiper.slidePrev()}
    >
      <ArrowIcon direction="left" />
    </button>
  );
}
