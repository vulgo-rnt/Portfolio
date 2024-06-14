import BtnPrimary from "@/components/btn-primary";
import SendMail from "@/components/icons/send-mail";
import InputPrimary from "@/components/input-primary";
import SlideAnimation from "@/components/slide-animation";

export default function Page() {
  return (
    <main className="overflow-x-hidden flex flex-col gap-6 sm:flex-row justify-around py-10 mt-5">
      <SlideAnimation
        animate="right"
        tag="section"
        className="flex flex-col max-sm:text-center max-sm:items-center max-sm:mb-4 dark:text-color_btn_dark"
      >
        <h1 className="text-xl">Obrigado por visitar meu portfólio!</h1>
        <p className="mt-4 max-w-[330px]">
          Se você tiver qualquer pergunta, desejar mais informações sobre meu
          trabalho ou estiver interessado em uma colaboração, ficarei feliz em
          ouvir de você.
        </p>
      </SlideAnimation>
      <SlideAnimation animate="left">
        <form className="flex flex-col gap-7">
          <div className="flex gap-4">
            <InputPrimary
              placeholder="Nome"
              name="name"
              required
              className="w-full"
            />
            <InputPrimary
              type="email"
              placeholder="Email"
              name="email"
              required
              className="w-full"
            />
          </div>
          <InputPrimary placeholder="Assunto" name="subtitle" required />
          <textarea
            placeholder="Messagem"
            name="message"
            required
            className="bg-[#c9d1d9] dark:focus:text-color_btn_dark dark:focus:placeholder:text-color_btn_dark placeholder:text-primary hover:bg-[#adb5bd] focus:bg-transparent focus:border-blue-500 border-transparent border-2 border-solid leading-none transition-colors duration-500 py-3 pl-6 rounded-xl min-h-[100px]"
          />
          <BtnPrimary className="self-end mr-5 active:bg-black">
            <SendMail />
            Enviar
          </BtnPrimary>
        </form>
      </SlideAnimation>
    </main>
  );
}
