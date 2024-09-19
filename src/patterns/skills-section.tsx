"use client";

import Carousel from "@/components/carousel";
import {
  Babel,
  Cookie,
  Css,
  Cypress,
  Docker,
  Express,
  Git,
  Graphql,
  Html,
  JavaScript,
  Jest,
  Jwt,
  Linux,
  NestJs,
  NextJs,
  NodeJs,
  Postgres,
  Puppeteer,
  React,
  Sequelize,
  SocketIo,
  Sqlite,
  StyledComponents,
  Tailwind,
  TestingLibrary,
  Typescript,
  Vite,
  WebSockets,
} from "@/components/icons/@index";
import ColorWheel from "@/components/icons/color-wheel";
import SlideAnimation from "@/components/slide-animation";
import { useScreenMode } from "@/context/screen-mode-context";
import useScreenSize from "@/hooks/useScreenSize";
import { useState } from "react";

export default function SkillsSection() {
  const [colorIcon, setColorIcon] = useState(false);
  const { mode, loading } = useScreenMode();
  const { width } = useScreenSize();

  if (!loading) {
    return (
      <div className="overflow-hidden flex flex-col gap-5">
        <div className="flex justify-between">
          <h1 className="ml-4 font-medium dark:text-color_btn_dark text-4xl max-sm:text-3xl">
            Habilidades
          </h1>
          {mode && (
            <button onClick={() => setColorIcon((prev) => !prev)}>
              <ColorWheel colorMode={colorIcon} />
            </button>
          )}
        </div>

        <div className="flex flex-col gap-10">
          <SlideAnimation
            className="w-full flex flex-col items-end"
            animate="left"
            duration={1.5}
            delay={0.5}
            updateUi={[colorIcon, mode, width]}
          >
            <h2 className="text-xl dark:text-color_btn_dark font-light italic p-5">
              Front-End
            </h2>
            <Carousel
              slidesPerGroup={Math.ceil((width - width * 0.05) / 200)}
              className={`${colorIcon && "light"} !max-w-full`}
              wrapperClassName={`${
                Math.ceil((width - width * 0.05) / 200) > 11 && "justify-center"
              }`}
            >
              <JavaScript />
              <Html />
              <Css />
              <React />
              <Vite />
              <NextJs />
              <StyledComponents />
              <Babel />
              <Tailwind />
              <Jwt />
              <Cookie />
            </Carousel>
          </SlideAnimation>
          <SlideAnimation
            animate="right"
            duration={1.5}
            delay={0.5}
            className="w-full flex flex-col"
            updateUi={[colorIcon, mode, width]}
          >
            <h2 className="text-xl dark:text-color_btn_dark font-light italic p-5">
              Back-End
            </h2>
            <Carousel
              slidesPerGroup={Math.ceil((width - width * 0.05) / 200)}
              className={`${colorIcon && "light"} !max-w-full`}
              wrapperClassName={`${
                Math.ceil((width - width * 0.05) / 200) > 11 && "justify-center"
              }`}
            >
              <Typescript />
              <NodeJs />
              <Express />
              <NestJs />
              <Graphql />
              <Sequelize />
              <Postgres />
              <SocketIo />
              <WebSockets />
              <Sqlite />
              <Puppeteer />
            </Carousel>
          </SlideAnimation>
          <SlideAnimation
            className="w-full flex flex-col items-end"
            animate="left"
            duration={1.5}
            delay={0.5}
            updateUi={[colorIcon, mode, width]}
          >
            <h2 className="text-xl dark:text-color_btn_dark font-light italic p-5">
              Devops Qa
            </h2>
            <Carousel
              slidesPerGroup={Math.ceil((width - width * 0.05) / 200)}
              className={`${colorIcon && "light"} !max-w-full`}
              wrapperClassName={`${
                Math.ceil((width - width * 0.05) / 200) > 6 && "justify-center"
              }`}
            >
              <Linux />
              <Docker />
              <Jest />
              <Git />
              <Cypress />
              <TestingLibrary />
            </Carousel>
          </SlideAnimation>
        </div>
      </div>
    );
  }
}
