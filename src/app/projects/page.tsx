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
      <h1 className="text-2xl dark:text-color_btn pb-8">
        Confira meus projetos
      </h1>
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
