import type { SVGAttributes } from "react";

const ExpandIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
      <path d="m12.707 4.293 4 4a1 1 0 0 1-1.414 1.414L12 6.414 8.707 9.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0ZM7.293 15.707a1 1 0 1 1 1.414-1.414L12 17.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4Z" />
    </svg>
  );
};

const expandIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12.707 4.293 4 4a1 1 0 0 1-1.414 1.414L12 6.414 8.707 9.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0ZM7.293 15.707a1 1 0 1 1 1.414-1.414L12 17.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4Z"/></svg>';

export { ExpandIcon, expandIcon };
