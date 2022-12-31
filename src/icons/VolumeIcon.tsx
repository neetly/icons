import type { SVGAttributes } from "react";

const VolumeIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden={true}
      {...props}
    >
      <path d="M11.383 4.076A1 1 0 0 1 12 5v14a1 1 0 0 1-1.707.707L6.586 16H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.586l3.707-3.707a1 1 0 0 1 1.09-.217Zm3.902.255a8.003 8.003 0 0 1 0 15.338 1 1 0 0 1-.57-1.917 6.003 6.003 0 0 0 0-11.504 1 1 0 1 1 .57-1.917Z" />
      <path d="M15.667 9.019A3.993 3.993 0 0 1 17 12a3.99 3.99 0 0 1-1.333 2.981 1 1 0 1 1-1.334-1.49 1.996 1.996 0 0 0 0-2.982 1 1 0 1 1 1.334-1.49Z" />
    </svg>
  );
};

export { VolumeIcon };
