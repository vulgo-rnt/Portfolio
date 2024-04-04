import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu({ handler }: HandlerEvent) {
  const path = usePathname();

  return (
    <motion.nav
      key="menu"
      transition={{ duration: 0.7 }}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      className="justify-center gap-3 fixed font-sans -z-10 bg-slide dark:bg-slide_dark dark:text-menu_primary_dark text-menu_primary flex flex-col items-center top-0 bottom-0 right-0 left-0 text-3xl"
    >
      <Link href="/projects">
        <h2
          onClick={() => handler()}
          className={`${
            path === "/projects" && "font-bold"
          } dark:hover:text-white hover:text-black duration-1000`}
        >
          Projetos
        </h2>
      </Link>
      <Link href="/about">
        <h2
          onClick={() => handler()}
          className={`${
            path === "/about" && "font-bold"
          } dark:hover:text-white hover:text-black duration-1000`}
        >
          Sobre mim
        </h2>
      </Link>
      <Link href="/contact">
        <h2
          onClick={() => handler()}
          className={`${
            path === "/contact" && "font-bold"
          } dark:hover:text-white hover:text-black duration-1000`}
        >
          Contato
        </h2>
      </Link>
      <footer className="fixed bottom-4 text-sm font-mono">
        &copy; 2024 Renan Toniolo
      </footer>
    </motion.nav>
  );
}
