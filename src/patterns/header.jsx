import BtnScreenMode from "@/components/btn-screen-mode";
import Logo from "../components/logo";
import MenuBurger from "../components/menu-burger";

export default function Header() {
  return (
    <header className="relative z-50 items-center flex justify-between bg-transparent">
      <Logo />
      <div className="flex gap-4 items-center">
        <BtnScreenMode />
        <MenuBurger />
      </div>
    </header>
  );
}
