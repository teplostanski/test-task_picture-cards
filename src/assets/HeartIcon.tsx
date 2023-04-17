import React from "react";

export default function HeartIcon(props: {
  width?: string;
  height?: string;
  color?: string;
}) {
  return (
    <svg
      width={props.width || "20"}
      height={props.height || "18"}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={"currentColor" || props.color || "black"}
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M10 17C10.1903 17 10.4622 16.878 10.6616 16.7647C15.7644 13.6275 19 9.97603 19 6.26362C19 3.17865 16.7976 1 13.9517 1C12.247 1 10.9217 1.87558 10.0898 3.22794C10.0492 3.29399 9.95141 3.29366 9.91115 3.2274C9.09418 1.88307 7.75241 1 6.04834 1C3.20242 1 1 3.17865 1 6.26362C1 9.97603 4.23565 13.6275 9.34743 16.7647C9.53776 16.878 9.80967 17 10 17Z"
      />
    </svg>
  );
}
