import { Github } from "../icons/github";
import { poppins } from "@/styles/fonts";
import Image from "next/image";
import { Btc } from "../icons/btc";

export function CardWatchBtc() {
  return (
    <div className="relative max-w-[600px] group">
      <Github
        href="https://github.com/vulgo-rnt/watch-tx-sucess-bitcoin-extension"
        className="max-xxsm:w-8 absolute top-[50px] group-hover:fill-black hover:w-10 transition-all duration-200 right-10 z-10 w-9 mt-[5px] fill-[#2f2f2f]"
      />
      <span className="vsm:h-[600px] max-w-[600px] h-[700px] bg-gradient-to-b from-[#FEEDD9] to-[#F7931A] relative group p-10 overflow-hidden rounded-2xl flex flex-col gap-4">
        <Btc className="mt-[5px]" />
        <p
          className={`${poppins.className} max-xxsm:text-base text-lg text-[#2f2f2f]`}
        >
          Implementação simples para notificar a confirmação de blocos na rede
          Bitcoin, notifica a confirmação a partir de um id de transação e um
          número delimitado de blocos, extensão de navegador usando{" "}
          <strong className="font-extrabold text-xl max-xxsm:text-lg">
            ServiceWorker
          </strong>{" "}
          a partir de uma conexão{" "}
          <strong className="font-extrabold text-xl max-xxsm:text-lg">
            WebSockets
          </strong>{" "}
          que se comunica com a api{" "}
          <strong className="font-extrabold text-xl max-xxsm:text-lg">
            Blockcypher
          </strong>
          .
        </p>
        <div className="absolute -right-20 bottom-16 group-hover:right-2 transition-all duration-300">
          <div className="relative w-[395px] h-[142px] max-card_sm:w-[305px] max-card_sm:h-[111px]">
            <Image
              src="/watch-btc.png"
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
    </div>
  );
}
