import type { SVGAttributes } from "react";

const ChevronUpIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
      <path d="M11.293 7.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6Z" />
    </svg>
  );
};

const chevronUpIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11.293 7.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6Z"/></svg>';

export { ChevronUpIcon, chevronUpIcon };
