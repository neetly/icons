import type { SVGAttributes } from "react";

const CaretUpIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
      <path d="M16 14H8a1 1 0 0 1-.707-1.707l4-4a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 16 14Z" />
    </svg>
  );
};

const caretUpIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M16 14H8a1 1 0 0 1-.707-1.707l4-4a1 1 0 0 1 1.414 0l4 4A1 1 0 0 1 16 14Z"/></svg>';

export { CaretUpIcon, caretUpIcon };
