import * as React from "react";
const SVGComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 1920 1920"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.color || "#fff"}
    cursor={"pointer"}
    {...props}
  >
    <path
      d="M1920 1411.412v225.882H0v-225.882h1920Zm0-564.706v225.882H0V846.706h1920ZM1920 282v225.882H0V282h1920Z"
      fillRule="evenodd"
    />
  </svg>
);
export default SVGComponent;
