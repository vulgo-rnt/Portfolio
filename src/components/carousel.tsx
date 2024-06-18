"use client";

import { PropsWithChildren, ReactNode } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "@/styles/carousel.css";
import { ArrowIcon } from "./icons/arrow";

export default function Carousel({ children }: PropsWithChildren) {
  const arrayOfElements = children as Array<ReactNode>;

  return (
    <Swiper
      modules={[Pagination]}
      speed={700}
      pagination={{
        clickable: true,
      }}
      tag="section"
      spaceBetween={40}
    >
      <SlidePrevButton />
      {arrayOfElements.map((el, index) => (
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
