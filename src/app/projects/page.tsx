import Carousel from "@/components/carousel";
import {
  CardCapputeeno,
  CardBreweries,
  CardBuildBox,
  CardFormLogin,
  CardWatchBtc,
  CardPokedex,
} from "@/components/projects-cards/@index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos",
  description: "",
};

export default function Page() {
  return (
    <main>
      <h2 className="text-md dark:text-color_btn_dark">
        Confira meus projetos.
      </h2>
      <h1 className="text-5xl dark:text-color_btn_dark pb-10">Experiência</h1>
      <Carousel>
        <CardCapputeeno />
        <CardBreweries />
        <CardBuildBox />
        <CardFormLogin />
        <CardWatchBtc />
        <CardPokedex />
      </Carousel>
    </main>
  );
}
