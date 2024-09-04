export default function ColorWheels({ colorMode }: { colorMode: boolean }) {
  return (
    <svg width="35" height="35" viewBox="0 0 48 48">
      <rect width="35" height="35" stroke="none" opacity={0} />

      <g transform="matrix(0.55 0 0 0.55 24 24)">
        <g>
          <g transform="matrix(1 0 0 1 13.44 -19)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#fff" : "rgb(181,56,56)"}
              transform=" translate(-53.44, -21)"
              d="M 66.87 13.13 C 59.993 6.253 50.494 2 40 2 L 40 40 L 66.87 13.13 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 19 -13.44)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#fff" : "rgb(184,110,62)"}
              transform=" translate(-59, -26.56)"
              d="M 78 40 C 78 30.275 74.29 20.55 66.87 13.129999999999999 L 40 40 L 78 40 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 19 13.44)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#ffffff" : "rgb(184,143,40)"}
              transform=" translate(-59, -53.44)"
              d="M 66.87 66.87 C 73.747 59.993 78 50.494 78 40 L 40 40 L 66.87 66.87 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 13.44 19)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#ffffff" : "rgb(81,150,108)"}
              transform=" translate(-53.44, -59)"
              d="M 40 78 C 49.725 78 59.45 74.29 66.87 66.87 L 40 40 L 40 78 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -13.44 19)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#878a8f" : "rgb(86,130,186)"}
              transform=" translate(-26.56, -59)"
              d="M 13.13 66.87 C 20.007 73.747 29.506 78 40 78 L 40 40 L 13.13 66.87 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -19 13.44)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#6c757d" : "rgb(73,101,168)"}
              transform=" translate(-21, -53.44)"
              d="M 2 40 C 2 49.725 5.71 59.45 13.13 66.87 L 40 40 L 2 40 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -19 -13.44)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#495057" : "rgb(126,93,158)"}
              transform=" translate(-21, -26.56)"
              d="M 13.13 13.13 C 6.253 20.007 2 29.506 2 40 L 40 40 L 13.13 13.13 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -13.44 -19)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#343a40" : "rgb(145,70,131)"}
              transform=" translate(-26.56, -21)"
              d="M 40 2 C 30.275 2 20.55 5.71 13.129999999999999 13.13 L 40 40 L 40 2 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 13.08 -18.5)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#f8f9fa" : "rgb(235,96,96)"}
              transform=" translate(-53.08, -21.5)"
              d="M 66.163 13.837 C 59.467 7.141 50.217 3 40 3 L 40 40 L 66.163 13.837 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 18.5 -13.08)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#e9ecef" : "rgb(240,138,72)"}
              transform=" translate(-58.5, -26.92)"
              d="M 77 40 C 77 30.531 73.388 21.062 66.163 13.837 L 40 40 L 77 40 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 18.5 13.08)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#dee2e6" : "rgb(255,223,89)"}
              transform=" translate(-58.5, -53.08)"
              d="M 66.163 66.163 C 72.859 59.467 77 50.217 77 40 L 40 40 L 66.163 66.163 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 13.08 18.5)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#ced4da" : "rgb(118,214,125)"}
              transform=" translate(-53.08, -58.5)"
              d="M 40 77 C 49.469 77 58.938 73.388 66.163 66.163 L 40 40 L 40 77 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -13.08 18.5)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#adb5bd" : "rgb(102,159,237)"}
              transform=" translate(-26.92, -58.5)"
              d="M 13.837 66.163 C 20.533 72.859 29.783 77 40 77 L 40 40 L 13.837 66.163 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -18.5 13.08)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#6c757d" : "rgb(111,133,232)"}
              transform=" translate(-21.5, -53.08)"
              d="M 3 40 C 3 49.469 6.612 58.938 13.837 66.163 L 40 40 L 3 40 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -18.5 -13.08)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#495057" : "rgb(176,93,227)"}
              transform=" translate(-21.5, -26.92)"
              d="M 13.837 13.837 C 7.141 20.533 3 29.783 3 40 L 40 40 L 13.837 13.837 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
          <g transform="matrix(1 0 0 1 -13.08 -18.5)">
            <path
              stroke="none"
              strokeDasharray="none"
              strokeWidth={1}
              strokeMiterlimit={4}
              strokeDashoffset={0}
              strokeLinejoin="miter"
              fillRule="nonzero"
              opacity={1}
              fill={colorMode ? "#343a40" : "rgb(220,93,227)"}
              transform=" translate(-26.92, -21.5)"
              d="M 40 3 C 30.531 3 21.062 6.612 13.837 13.837 L 40 40 L 40 3 z"
              className="transition-colors duration-500"
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
