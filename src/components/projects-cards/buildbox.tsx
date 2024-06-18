import Link from "next/link";
import { Github } from "../icons/github";
import { sf_pro_display, poppins } from "@/styles/fonts";
import Image from "next/image";

export function CardBuildBox() {
  return (
    <div className="relative max-w-[600px] group">
      <Github
        href="https://github.com/vulgo-rnt/challenge-front-end-buildbox"
        className="max-xxsm:w-8 max-xxsm:top-[39px] absolute top-[45px] group-hover:fill-white hover:w-10 transition-all duration-200 right-10 z-10 w-9 mt-[5px] fill-[#9f9f9f]"
      />
      <Link
        href="https://challenge-front-end-buildbox.vercel.app/"
        target="_blank"
      >
        <span className="vsm:h-[600px] max-w-[600px] h-[700px] bg-gradient-to-b from-[#232323] to-[#343434] relative group p-10 overflow-hidden rounded-2xl flex flex-col gap-4">
          <h1
            className={`text-[#71bb00] max-xxsm:text-4xl text-[40px] ${sf_pro_display.className}`}
          >
            buildbox
          </h1>
          <p
            className={`${poppins.className} max-xxsm:text-base text-lg text-[#9f9f9f]`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            accusamus corporis inventore voluptatibus adipisci, saepe possimus
            distinctio reiciendis laboriosam repellendus non aliquam, assumenda
            incidunt. Obcaecati ratione molestiae aperiam quos illum!
          </p>
          <div className="max-xxsm:-bottom-28 max-xxsm:group-hover:-bottom-20 absolute right-10 -bottom-44 group-hover:-bottom-36 transition-all duration-300">
            <div className="relative w-[291px] h-[400px] max-xxsm:w-[223px] max-xxsm:h-[309px]">
              <Image
                src="/buildbox.png"
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
