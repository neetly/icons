import type { SVGAttributes } from "react";

const SearchIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
      <path d="M10 3a7 7 0 0 1 5.606 11.192l5.101 5.1a1 1 0 0 1-1.414 1.415l-5.1-5.1A7 7 0 1 1 10 3Zm-5 7a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z" />
    </svg>
  );
};

const searchIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10 3a7 7 0 0 1 5.606 11.192l5.101 5.1a1 1 0 0 1-1.414 1.415l-5.1-5.1A7 7 0 1 1 10 3Zm-5 7a5 5 0 1 0 10 0 5 5 0 0 0-10 0Z"/></svg>';

export { SearchIcon, searchIcon };
