import Carousel from "@/components/carousel";
import {
  CardCapputeeno,
  CardBreweries,
  CardBuildBox,
  CardFormLogin,
  CardWatchBtc,
  CardPokedex,
} from "@/components/projects-cards/@index";

export default function Page() {
  return (
    <main>
      <h1>Confira meus projetos</h1>
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
