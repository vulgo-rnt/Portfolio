import Link from "next/link";

export function Tailwind() {
  return (
    <Link href="https://tailwindcss.com/" target="_blank">
      <svg
        width="80px"
        height="80px"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Tailwind</title>
        <path
          d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
          className="fill-[#44a8b3] dark:fill-white transition-colors duration-700"
        />
      </svg>
    </Link>
  );
}
