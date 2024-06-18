import Link from "next/link";

export function Css() {
  return (
    <Link
      href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
      target="_blank"
    >
      <svg
        width="80px"
        height="80px"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>CSS</title>
        <path
          d="M6 28L4 3H28L26 28L16 31L6 28Z"
          className="dark:fill-white fill-[#1172B8] transition-colors duration-700"
        />
        <path
          d="M26 5H16V29.5L24 27L26 5Z"
          className="dark:fill-[#c5c5c5] fill-[#33AADD] transition-colors duration-700"
        />
        <path
          d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
          className="fill-white dark:fill-bg_dark transition-colors duration-700"
        />
      </svg>
    </Link>
  );
}
