import type { SVGAttributes } from "react";

const FavoriteIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
      <path d="M19.535 5.964a5 5 0 0 1 0 7.072l-6.828 6.828a1 1 0 0 1-1.414 0l-6.829-6.829a5 5 0 1 1 7.072-7.07l.464.464.464-.465a5 5 0 0 1 7.071 0Z" />
    </svg>
  );
};

const favoriteIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19.535 5.964a5 5 0 0 1 0 7.072l-6.828 6.828a1 1 0 0 1-1.414 0l-6.829-6.829a5 5 0 1 1 7.072-7.07l.464.464.464-.465a5 5 0 0 1 7.071 0Z"/></svg>';

export { FavoriteIcon, favoriteIcon };
