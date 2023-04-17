import React from "react";

export default function TrashIcon(props: {
  width?: string;
  height?: string;
  color?: string;
}) {
  return (
    <svg
      width={props.width || "18"}
      height={props.height || "20"}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={"currentColor" || props.color || "black"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7V16C3 17.6569 4.34315 19 6 19H12C13.6569 19 15 17.6569 15 16V7M11 8V15M7 8V15M1 4H17M13 4V3C13 1.89543 12.1046 1 11 1H8.5H7C5.89543 1 5 1.89543 5 3V4"
      />
    </svg>
  );
}
