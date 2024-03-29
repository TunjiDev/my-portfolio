import * as React from "react";
const SVGComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#1D9BF0"
      d="M13.567 5.144c.008.123.008.247.008.371 0 3.796-2.889 8.173-8.172 8.173v-.002A8.131 8.131 0 0 1 1 12.398a5.768 5.768 0 0 0 4.25-1.19 2.876 2.876 0 0 1-2.683-1.995c.431.083.875.066 1.297-.05A2.873 2.873 0 0 1 1.56 6.348v-.036c.4.222.847.345 1.304.36a2.876 2.876 0 0 1-.89-3.836 8.152 8.152 0 0 0 5.92 3 2.874 2.874 0 0 1 4.895-2.619 5.763 5.763 0 0 0 1.824-.697 2.883 2.883 0 0 1-1.262 1.588A5.712 5.712 0 0 0 15 3.656a5.834 5.834 0 0 1-1.433 1.488z"
    />
  </svg>
);
export default SVGComponent;
