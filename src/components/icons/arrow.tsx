export function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="-4.5 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={`${direction === "right" && "rotate-180"}  w-14 h-14`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-345.000000, -6679.000000)"
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                className="fill-tertiary dark:fill-tertiary_dark"
                d="M299.633777,6519.29231 L299.633777,6519.29231 C299.228878,6518.90256 298.573377,6518.90256 298.169513,6519.29231 L289.606572,6527.55587 C288.797809,6528.33636 288.797809,6529.60253 289.606572,6530.38301 L298.231646,6538.70754 C298.632403,6539.09329 299.27962,6539.09828 299.685554,6538.71753 L299.685554,6538.71753 C300.100809,6538.32879 300.104951,6537.68821 299.696945,6537.29347 L291.802968,6529.67648 C291.398069,6529.28574 291.398069,6528.65315 291.802968,6528.26241 L299.633777,6520.70538 C300.038676,6520.31563 300.038676,6519.68305 299.633777,6519.29231"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
