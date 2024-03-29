import type { SVGAttributes } from "react";

const CaretLeftIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
      <path d="M14 8v8a1 1 0 0 1-1.707.707l-4-4a1 1 0 0 1 0-1.414l4-4A1 1 0 0 1 14 8Z" />
    </svg>
  );
};

const caretLeftIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M14 8v8a1 1 0 0 1-1.707.707l-4-4a1 1 0 0 1 0-1.414l4-4A1 1 0 0 1 14 8Z"/></svg>';

export { CaretLeftIcon, caretLeftIcon };
