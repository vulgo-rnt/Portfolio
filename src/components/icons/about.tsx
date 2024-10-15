export function AboutMe({ btn }: { btn?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 ${
        btn ? "stroke-color_btn" : "stroke-primary"
      } dark:stroke-secondary_dark group-hover:stroke-tertiary dark:group-hover:stroke-tertiary_dark transition-colors duration-700`}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <circle cx="12" cy="9" r="3" strokeWidth="1.5"></circle>
        <circle cx="12" cy="12" r="10" strokeWidth="1.5"></circle>
        <path
          d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
      </g>
    </svg>
  );
}
