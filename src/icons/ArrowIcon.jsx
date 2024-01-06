// eslint-disable-next-line react/prop-types
export default function ArrowIcon({ type, color, w, h }) {
  return (
    <svg
      width={w || "24"}
      height={h || "24"}
      viewBox={(w && h) ? `0 0 ${w} ${h}` : "0 0 24 24"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d={type === "left" ? "M19 12L5 12" : "M5 12H19"}
          stroke={color || "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={type === "left" ? "M12 19L5 12L12 5" : "M12 5L19 12L12 19"}
          stroke={color || "#ffffff"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
