import type { SVGAttributes } from "react";

const CaretRightIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
      <path d="M10 16V8a1 1 0 0 1 1.707-.707l4 4a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 10 16Z" />
    </svg>
  );
};

const caretRightIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10 16V8a1 1 0 0 1 1.707-.707l4 4a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 10 16Z"/></svg>';

export { CaretRightIcon, caretRightIcon };
