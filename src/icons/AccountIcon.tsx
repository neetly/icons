import type { SVGAttributes } from "react";

const AccountIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
      <path d="M6.782 14.666a7 7 0 1 1 10.436 0 9.013 9.013 0 0 1 3.498 5.085 1 1 0 1 1-1.937.498A7.012 7.012 0 0 0 15.608 16 6.968 6.968 0 0 1 12 17a6.967 6.967 0 0 1-3.608-1 7.012 7.012 0 0 0-3.172 4.25 1 1 0 1 1-1.936-.5 9.013 9.013 0 0 1 3.498-5.084ZM7 10c0 1.448.615 2.752 1.599 3.665A4.983 4.983 0 0 0 11.984 15H12a4.98 4.98 0 0 0 3.401-1.335A5 5 0 1 0 7 10Z" />
    </svg>
  );
};

export { AccountIcon };
