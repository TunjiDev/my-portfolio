import * as React from "react";
const SVGComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="#cb479a"
    width={props.width || 24}
    height={props.height || 24}
    cursor={"pointer"}
    viewBox="0 0 14 14"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.4 1H1.6a.6.6 0 0 0-.6.6v10.8a.6.6 0 0 0 .6.6h10.8a.6.6 0 0 0 .6-.6V1.6a.6.6 0 0 0-.6-.6m-7 8.665H4.336v-5.33H5.4v5.33zm4.268 0H6.467V8.6h3.2v1.066zm0-2.132H6.467V6.467h3.2v1.066zm0-2.135H6.467V4.332h3.2v1.066z" />
  </svg>
);
export default SVGComponent;
