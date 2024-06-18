import Link from "next/link";
import { Github } from "../icons/github";
import { poppins, saira } from "@/styles/fonts";
import Image from "next/image";

export function CardCapputeeno() {
  return (
    <div className="relative max-w-[600px] group">
      <Github
        href="https://github.com/vulgo-rnt/challenge-front-end-rocketseat"
        className="absolute max-xxsm:top-[39px] top-[45px] hover:w-10 group-hover:fill-black transition-all duration-500 right-10 z-10 w-9 max-xxsm:w-8  mt-[5px] fill-[#3a3a43]"
      />
      <Link href="https://capputeeno.vulgo-rnt.vercel.app/" target="_blank">
        <span className="vsm:h-[600px] max-w-[600px] h-[700px] bg-gradient-to-b from-[#f0f0f5] to-[#ffa585] from-65% relative group p-10 overflow-hidden rounded-2xl flex flex-col gap-4">
          <h1
            className={`text-[#5d5d6d] max-xxsm:text-4xl text-[40px] ${saira.className}`}
          >
            capputeeno
          </h1>
          <p
            className={`${poppins.className} max-xxsm:text-base text-lg text-[#5d5d6d]`}
          >
            E-commerce feito em{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Next.js
            </strong>{" "}
            consumindo uma api{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Graphql
            </strong>
            , usando cache do{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              React-Query(Tanstack)
            </strong>
            , chamada de api com{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Axios
            </strong>
            , estilizada com{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Styled-Components
            </strong>{" "}
            e orquestrada com{" "}
            <strong className="font-extrabold text-xl max-xxsm:text-lg">
              Docker
            </strong>
            , fork do teste técnico para desenvolvedor Front-end da Rocketset.
          </p>
          <div className="absolute right-10 max-xxsm:-bottom-28 max-xxsm:group-hover:-bottom-20 -bottom-44 group-hover:-bottom-36 transition-all duration-300">
            <div className="relative w-[293px] h-[400px] max-xxsm:w-[223px] max-xxsm:h-[310px]">
              <Image
                src="/capputeeno.png"
                style={{
                  objectFit: "contain",
                  borderRadius: "15px",
                }}
                sizes="inherit"
                fill
                alt="Image Project Capputteno"
              />
            </div>
          </div>
        </span>
      </Link>
    </div>
  );
}
