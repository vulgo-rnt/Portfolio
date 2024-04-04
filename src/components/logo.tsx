import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex gap-4 items-center">
      <span className="hidden md:flex border-primary border-2 p-2 text-primary rounded-[100%]">
        <span className="w-[24px] text-center font-medium">R</span>
      </span>
      <span className="flex flex-col">
        <span className="font-medium text-3xl dark:text-primary_dark text-primary">
          Renan Toniolo
        </span>
        <span className="text-sm text-secondary dark:text-secondary_dark tracking-[4px]">
          Desenvolvedor Web
        </span>
      </span>
    </Link>
  );
}
