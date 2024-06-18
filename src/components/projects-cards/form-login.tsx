import Link from "next/link";
import { Github } from "../icons/github";
import { sf_pro_display, poppins } from "@/styles/fonts";
import Image from "next/image";

export function CardFormLogin() {
  return (
    <div className="relative max-w-[600px] group">
      <Github
        href="https://github.com/vulgo-rnt/form-login"
        className="max-xxsm:w-8 max-xxsm:top-[39px] absolute top-[45px] group-hover:fill-white hover:w-10 transition-all duration-200 right-10 z-10 w-9 mt-[5px] fill-gray-300"
      />
      <Link href="https://form-login-mauve.vercel.app/" target="_blank">
        <span className="vsm:h-[600px] max-w-[600px] h-[700px] bg-gradient-to-b from-[#3b5998] to-[#3b82f6] from-55% relative group p-10 overflow-hidden rounded-2xl flex flex-col gap-4">
          <h1
            className={`text-white text-[40px] max-xxsm:text-4xl ${sf_pro_display.className}`}
          >
            Form Login
          </h1>
          <p
            className={`${poppins.className} max-xxsm:text-base text-lg text-gray-300`}
          >
            Formulário de login feito em{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Next.js
            </strong>
            , se comunicando com um db{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Postgres
            </strong>{" "}
            com autenticação{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              JWT
            </strong>{" "}
            salvando em{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Cookies
            </strong>
            , validação com{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Zod
            </strong>{" "}
            e salvando senhas criptografadas com{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Bcrypt
            </strong>
            , feito no intuito de estudar autenticação do{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Next.js
            </strong>{" "}
            e os estilos do{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Tailwind
            </strong>
            .
          </p>
          <div className="max-xxsm:-bottom-28 max-xxsm:group-hover:-bottom-20 absolute right-10 -bottom-44 group-hover:-bottom-36 transition-all duration-300">
            <div className="relative w-[291px] h-[400px] max-xxsm:w-[223px] max-xxsm:h-[309px]">
              <Image
                src="/form-login.png"
                style={{
                  objectFit: "contain",
                  borderRadius: "15px",
                }}
                fill
                sizes="inherit"
                alt="Image Project Capputteno"
              />
            </div>
          </div>
        </span>
      </Link>
    </div>
  );
}
