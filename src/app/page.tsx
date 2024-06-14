import Link from "next/link";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="flex flex-col mt-6 max-w-[60%] gap-5">
      <section>
        <h1 className="font-medium text-4xl w-auto">Desenvolvedor web</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere fuga
          quam recusandae officiis tempore numquam exercitationem temporibus
          voluptatem aspernatur illo architecto, hic minima non debitis. Id a
          quis aliquid fuga?
        </p>
        <div className="flex gap-4">
          <Link className="cursor-pointer font-medium" href="/projects">
            Veja meus projetos
          </Link>
          {" ou "}
          <Link className="cursor-pointer font-medium" href="about">
            Sobre mim
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
