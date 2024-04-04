import BtnScreenMode from "@/components/btn-screen-mode";
import Logo from "../components/logo";
import MenuBurger from "./menu-burger";

export default function Header() {
  return (
    <header className="items-center flex justify-between bg-transparent">
      <Logo />
      <div className="flex gap-4 items-center">
        <BtnScreenMode />
        <MenuBurger />
      </div>
    </header>
  );
}
