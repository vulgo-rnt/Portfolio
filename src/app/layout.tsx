import type { Metadata } from "next";
import Header from "@/patterns/header";
import DefaultContanier from "@/components/default-contanier";
import Menu from "@/components/menu";

export const metadata: Metadata = {
  title: "Portfolio",
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
      </DefaultContanier>
    </html>
  );
}
