import Link from "next/link";

export function Html() {
  return (
    <Link
      href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
      target="_blank"
    >
      <svg
        width="80px"
        height="80px"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>HTML</title>
        <path
          d="M6 28L4 3H28L26 28L16 31L6 28Z"
          className="fill-[#E44D26] dark:fill-white transition-colors duration-700"
        />
        <path
          d="M26 5H16V29.5L24 27L26 5Z"
          className="fill-[#F16529] dark:fill-[#c5c5c5] transition-colors duration-700"
        />
        <path
          d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z"
          className="fill-white dark:fill-bg_dark transition-colors duration-700"
        />
      </svg>
    </Link>
  );
}
