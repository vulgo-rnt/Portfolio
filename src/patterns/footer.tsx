import BtnPrimary from "@/components/btn-primary";
import {
  AboutMe,
  Github,
  Gmail,
  Linkedin,
  LogoIcon,
  Projects,
  Whatsapp,
} from "@/components/icons/@index";
import WrapperClientRender from "@/components/wrapper-client-render";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <WrapperClientRender>
        <span className="mx-4 h-[1px] bg-secondary flex"></span>
        <section className="md:py-10 py-[20px] flex flex-col items-center gap-5 dark:text-color_btn_dark">
          <h1 className="text-xl">Obrigado por visitar meu portfólio!</h1>
          <p className="text-[14px] opacity-[90%] max-w-[620px] text-center p-5">
            Se você tiver qualquer pergunta, desejar mais informações sobre meu
            trabalho ou estiver interessado em uma colaboração, ficarei feliz em
            ouvi-lo.
          </p>
          <div className="flex gap-7 mt-5">
            <Link href="/projects">
              <BtnPrimary>
                <Projects btn /> Projetos
              </BtnPrimary>
            </Link>
            <Link href="/contact">
              <BtnPrimary>
                <AboutMe btn /> Contato
              </BtnPrimary>
            </Link>
          </div>
        </section>
      </WrapperClientRender>
      <span className="mx-4 h-[1px] bg-secondary flex"></span>
      <section className="flex flex-col gap-2 items-center py-5">
        <LogoIcon />
        <div className="flex gap-2 mt-2">
          <Github />
          <Whatsapp />
          <Linkedin />
          <Gmail />
        </div>
        <p className="text-sm font-mono dark:text-color_btn_dark">
          &copy; 2024 Renan Toniolo
        </p>
      </section>
    </footer>
  );
}
