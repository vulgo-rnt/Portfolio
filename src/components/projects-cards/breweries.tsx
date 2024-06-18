import Link from "next/link";
import { Github } from "../icons/github";
import { domine, poppins } from "@/styles/fonts";
import Image from "next/image";

export function CardBreweries() {
  return (
    <div className="relative max-w-[600px] group">
      <Github
        href="https://github.com/vulgo-rnt/challenge-front-end-linx"
        className="max-xxsm:w-8 max-xxsm:top-[37px] absolute top-[45px] group-hover:fill-white hover:w-10 transition-all duration-200 right-10 z-10 w-9 mt-[5px] fill-[#ffffffca]"
      />
      <Link href="https://challenge-linx-vulgo-rnt.vercel.app/" target="_blank">
        <span className="vsm:h-[600px] max-w-[600px] h-[700px] bg-gradient-to-b from-[#1f191a] to-[#46403f] relative group p-10 overflow-hidden rounded-2xl flex flex-col gap-4">
          <h1
            className={`text-white max-xxsm:text-4xl text-[40px] ${domine.className}`}
          >
            Breweries
          </h1>
          <p
            className={`${poppins.className} max-xxsm:text-base text-lg text-[#ffffffca]`}
          >
            Uma lista de cervejarias consumindo a api do{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Open Brewery DB
            </strong>{" "}
            feito em{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              React
            </strong>{" "}
            com{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Vite
            </strong>
            , estilizado com{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Styled-Components
            </strong>
            , rotas gerenciadas com{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              React-Router-Dom
            </strong>
            , usando{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Jest
            </strong>{" "}
            para teste unitário com{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Babel
            </strong>{" "}
            configurado e{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Dockerfile
            </strong>
            , feito para o teste técnico Front-end da Linx.
          </p>
          <div className="max-xxsm:-bottom-28 max-xxsm:group-hover:-bottom-20 absolute right-10 -bottom-44 group-hover:-bottom-36 transition-all duration-300">
            <div className="relative w-[293px] h-[400px] max-xxsm:w-[223px] max-xxsm:h-[310px]">
              <Image
                src="/breweries.png"
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
