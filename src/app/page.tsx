import Link from "next/link";
import { AboutMe, Projects } from "@/components/icons/@index";
import ScrollTopBtn from "@/components/scroll-top-btn";
import SlideAnimation from "@/components/slide-animation";
import { sora } from "@/styles/fonts";
import SkillsSection from "@/patterns/skills-section";
import ServiceSection from "@/patterns/service-section";

export default function Home() {
  return (
    <main>
      <span className="min-h-headerless_screen flex flex-col justify-around">
        <SlideAnimation
          duration={0.7}
          animate="right"
          tag="section"
          className="text-primary flex flex-col gap-6 max-sm:items-center max-sm:text-sm"
        >
          <h1 className="font-medium dark:text-color_btn_dark text-5xl max-sm:text-4xl whitespace-nowrap">
            Desenvolvedor web
          </h1>
          <p className="text-secondary text-lg dark:text-secondary_dark sm:max-w-[60%] max-sm:text-center">
            Com 22 anos, embarquei em uma jornada autodidata de aprendizado em
            programação, buscando incessantemente expandir meu conhecimento e
            habilidades. Com experiência em linguagens como TypeScript e
            JavaScript. Sou pró-ativo, colaborativo e estou ansioso para
            enfrentar os desafios e oportunidades que o futuro reserva.
          </p>
          <div className="flex items-center gap-2 mt-6 text-lg">
            <Link href="/projects">
              <button className="flex dark:text-color_btn_dark hover:text-tertiary dark:hover:text-tertiary transition-colors duration-700 gap-2 px-2 items-center group">
                <Projects />
                <div className="relative">
                  <p className="pt-[2px]">Meus projetos</p>
                  <span className="absolute right-0 left-0 bottom-0 w-0 h-[1px] bg-primary group-hover:bg-tertiary dark:group-hover:bg-tertiary_dark group-hover:w-full transition-all duration-700" />
                </div>
              </button>
            </Link>
            <Link href="about">
              <button className="flex dark:text-color_btn_dark hover:text-tertiary dark:hover:text-tertiary transition-colors duration-700  gap-2 px-2 items-center group">
                <AboutMe />
                <div className="relative">
                  <p className="pt-[2px]">Sobre mim</p>
                  <span className="absolute right-0 left-0 bottom-0 w-0 h-[1px] bg-primary group-hover:bg-tertiary dark:group-hover:bg-tertiary_dark group-hover:w-full transition-all duration-700" />
                </div>
              </button>
            </Link>
          </div>
        </SlideAnimation>
        <SlideAnimation
          animate="right"
          duration={0.7}
          delay={0.3}
          className={`flex justify-around py-16 max-w-[800px] w-full self-center ${sora.className}`}
          tag="section"
        >
          <Link
            href="https://cursos.alura.com.br/user/lelouch/fullCertificate/effe90e01dd5a924efe558d2100e8e9a"
            target="_blank"
          >
            <span className="text-center w-[117px]">
              <h1 className="text-4xl font-extrabold dark:text-tertiary_dark text-tertiary">
                +930
              </h1>
              <p className="dark:text-color_btn_dark text-secondary text-[10px] uppercase tracking-widest">
                horas de cursos
              </p>
            </span>
          </Link>
          <span className="w-[1px] bg-secondary" />
          <span className="text-center w-[117px]">
            <h1 className="text-4xl font-extrabold dark:text-tertiary_dark text-tertiary">
              +80
            </h1>
            <p className="dark:text-color_btn_dark text-secondary text-[10px] uppercase tracking-widest">
              cursos com certificado
            </p>
          </span>
          <span className="w-[1px] bg-secondary" />
          <span className="text-center w-[117px]">
            <h1 className="text-4xl font-extrabold dark:text-tertiary_dark text-tertiary">
              +25
            </h1>
            <p className="dark:text-color_btn_dark text-secondary text-[10px] uppercase tracking-widest">
              tecnologias que trabalho
            </p>
          </span>
        </SlideAnimation>
      </span>
      <ServiceSection />
      <SkillsSection />
      <ScrollTopBtn />
    </main>
  );
}
