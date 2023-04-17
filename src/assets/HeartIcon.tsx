import React from "react";

export default function HeartIcon(props: {
  width?: string;
  height?: string;
  color?: string;
}) {
  return (
    <svg
      width={props.width || "22"}
      height={props.height || "22"}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={"currentColor" || props.color || "black"}
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      />
    </svg>
  );
}
