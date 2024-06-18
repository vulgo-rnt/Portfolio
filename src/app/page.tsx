import Link from "next/link";
import {
  AboutMe,
  Babel,
  Cookie,
  Css,
  Cypress,
  Docker,
  Express,
  Git,
  Graphql,
  Html,
  Jest,
  Jwt,
  Linux,
  NestJs,
  NextJs,
  NodeJs,
  Postgres,
  Projects,
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
import ScrollTopBtn from "@/components/scroll-top-btn";
import SlideAnimation from "@/components/slide-animation";

export default function Home() {
  return (
    <main className="flex flex-col mb-8 gap-5 ">
      <SlideAnimation
        animate="right"
        tag="section"
        className="text-primary flex flex-col gap-6 max-sm:items-center max-sm:text-xs"
      >
        <h1 className="font-medium dark:text-color_btn_dark text-4xl max-sm:text-3xl">
          Desenvolvedor web
        </h1>
        <p className="text-secondary sm:max-w-[60%] max-sm:text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fuga
          quam recusandae officiis tempore numquam exercitationem temporibus
          voluptatem aspernatur illo architecto, hic minima non debitis. Id a
          quis aliquid fuga?
        </p>
        <div className="flex items-center gap-2 mt-6">
          <Link className="cursor-pointer" href="/projects">
            <button className="flex gap-2 px-2 items-center group">
              <Projects />
              <div className="flex flex-col relative dark:text-color_btn_dark group-hover:text-tertiary transition-colors duration-700">
                <p className="pt-[2px]">Meus projetos</p>
                <span className="absolute bottom-0 w-0 h-[1px] bg-primary group-hover:bg-tertiary group-hover:w-full transition-all duration-700" />
              </div>
            </button>
          </Link>
          <Link className="cursor-pointer" href="about">
            <button className="flex  gap-2 px-2 items-center group">
              <AboutMe />
              <div className="flex flex-col relative dark:text-color_btn_dark group-hover:text-tertiary transition-colors duration-700">
                <p className="pt-[2px]">Sobre mim</p>
                <span className="absolute bottom-0 w-0 h-[1px] bg-primary group-hover:bg-tertiary group-hover:w-full transition-all duration-700" />
              </div>
            </button>
          </Link>
        </div>
      </SlideAnimation>
      <div className="grid grid-cols-6 gap-3 max-sm:grid-cols-3">
        <Vite />
        <Sqlite />
        <Babel />
        <Cookie />
        <Css />
        <Cypress />
        <Docker />
        <Express />
        <Git />
        <Graphql />
        <Html />
        <Jest />
        <Jwt />
        <Linux />
        <NestJs />
        <NextJs />
        <NodeJs />
        <Postgres />
        <React />
        <Sequelize />
        <SocketIo />
        <StyledComponents />
        <Tailwind />
        <TestingLibrary />
        <Typescript />
        <WebSockets />
      </div>
      <ScrollTopBtn />
    </main>
  );
}
