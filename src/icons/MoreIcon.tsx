import type { SVGAttributes } from "react";
const MoreIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden={true}
      {...props}
    >
      <path d="M14 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
    </svg>
  );
};
export { MoreIcon };
