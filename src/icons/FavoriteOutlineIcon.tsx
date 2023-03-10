import type { SVGAttributes } from "react";

const FavoriteOutlineIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
      <path d="M12.464 5.964a5 5 0 1 1 7.071 7.072l-6.828 6.828a1 1 0 0 1-1.414 0l-6.829-6.829a5 5 0 1 1 7.072-7.07l.464.464.464-.465Zm5.657 1.415a3 3 0 0 0-4.242 0L12.707 8.55a1 1 0 0 1-1.414 0L10.12 7.38a3 3 0 1 0-4.24 4.24L12 17.743l6.121-6.122a3 3 0 0 0 0-4.242Z" />
    </svg>
  );
};

const favoriteOutlineIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12.464 5.964a5 5 0 1 1 7.071 7.072l-6.828 6.828a1 1 0 0 1-1.414 0l-6.829-6.829a5 5 0 1 1 7.072-7.07l.464.464.464-.465Zm5.657 1.415a3 3 0 0 0-4.242 0L12.707 8.55a1 1 0 0 1-1.414 0L10.12 7.38a3 3 0 1 0-4.24 4.24L12 17.743l6.121-6.122a3 3 0 0 0 0-4.242Z"/></svg>';

export { FavoriteOutlineIcon, favoriteOutlineIcon };
