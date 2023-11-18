import * as React from "react";
const SVGComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill={props.color || "#fff"}
    viewBox="0 0 512 512"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m256 34 176 176-21.2 21.21L271 91.4V478h-30V91.4L101.16 231.25 80 210Z" />
  </svg>
);
export default SVGComponent;
