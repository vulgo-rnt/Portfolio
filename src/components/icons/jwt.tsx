import Link from "next/link";

export function Jwt() {
  return (
    <Link href="https://jwt.io/" target="_blank">
      <svg
        height="80"
        viewBox=".4 .3 99.7 100"
        width="80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>JWT</title>
        <g fill="none" fillRule="evenodd">
          <path
            d="m57.8 27.2-.1-26.9h-15l.1 26.9 7.5 10.3zm-15 46.1v27h15v-27l-7.5-10.3z"
            className="fill-[#e3e3e3] dark:fill-[white] transition-colors duration-700"
          />
          <path
            d="m57.8 73.3 15.8 21.8 12.1-8.8-15.8-21.8-12.1-3.9zm-15-46.1-15.9-21.8-12.1 8.8 15.8 21.8 12.2 3.9z"
            fill="#00f2e6"
            className="fill-[#00f2e6] dark:fill-[#CED4DA] transition-colors duration-700"
          />
          <path
            d="m30.6 36-25.6-8.3-4.6 14.2 25.6 8.4 12.1-4zm31.8 18.2 7.5 10.3 25.6 8.3 4.6-14.2-25.6-8.3z"
            className="fill-[#00b9f1] dark:fill-[#ADB5BD] transition-colors duration-700"
          />
          <path
            d="m74.5 50.3 25.6-8.4-4.6-14.2-25.6 8.3-7.5 10.3zm-48.5 0-25.6 8.3 4.6 14.2 25.6-8.3 7.5-10.3z"
            className="fill-[#d63aff] dark:fill-[#6C757D] transition-colors duration-700"
          />
          <path
            d="m30.6 64.5-15.8 21.8 12.1 8.8 15.9-21.8v-12.7zm39.3-28.5 15.8-21.8-12.1-8.8-15.8 21.8v12.7z"
            fill="#fb015b"
            className="fill-[#fb015b] dark:fill-[#495057] transition-colors duration-700"
          />
        </g>
      </svg>
    </Link>
  );
}
