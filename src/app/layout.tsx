import type { Metadata } from "next";
import Header from "@/patterns/header";
import DefaultContanier from "@/components/default-contanier";
import Menu from "@/components/menu";
import Footer from "@/patterns/footer";
import "@/styles/scroll-bar.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Portfólio",
    default: "Home",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <DefaultContanier>
        <Header />
        <Menu />
        {children}
        <Footer />
      </DefaultContanier>
    </html>
  );
}
