import Link from "next/link";
import { Github } from "../icons/github";
import { domine, poppins } from "@/styles/fonts";
import Image from "next/image";

export function CardPokedex() {
  return (
    <div className="relative max-w-[600px] group">
      <Github
        href="https://github.com/vulgo-rnt/pokedex"
        className="max-xxsm:w-8 absolute top-[54px] group-hover:fill-white hover:w-10 transition-all duration-200 right-10 z-10 w-9 mt-[5px] fill-[#ffffffca]"
      />
      <Link href="https://pokedex-vulgo-rnt.vercel.app/" target="_blank">
        <span className="vsm:h-[600px] max-w-[600px] h-[700px] bg-gradient-to-b from-[#1f191a] to-99% to-[#f50a32] relative group p-10 overflow-hidden rounded-2xl flex flex-col gap-4">
          <Image
            src="/pokedex-icon.png"
            width={70}
            height={70}
            alt="Pokedex Icon"
          />
          <p
            className={`${poppins.className} max-xxsm:text-base text-lg text-[#ffffffca]`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure sed
            odit deleniti labore quas dignissimos repudiandae cupiditate
            consequatur, aliquam exercitationem, in tempora qui? Ab officiis
            ipsum quod accusamus ipsa porro?
          </p>
          <div className="max-xxsm:-bottom-28 max-xxsm:group-hover:-bottom-20 absolute right-10 -bottom-44 group-hover:-bottom-36 transition-all duration-300">
            <div className="relative w-[293px] h-[400px] max-xxsm:w-[223px] max-xxsm:h-[310px]">
              <Image
                src="/pokedex.png"
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
