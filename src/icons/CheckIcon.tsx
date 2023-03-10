import type { SVGAttributes } from "react";

const CheckIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
      <path d="M20.707 6.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L10 15.586l9.293-9.293a1 1 0 0 1 1.414 0Z" />
    </svg>
  );
};

const checkIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M20.707 6.293a1 1 0 0 1 0 1.414l-10 10a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L10 15.586l9.293-9.293a1 1 0 0 1 1.414 0Z"/></svg>';

export { CheckIcon, checkIcon };
