import type { SVGAttributes } from "react";

const BookmarkOutlineIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden={true} {...props}>
      <path d="M5 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1.555.832L12 17.202l-5.445 3.63A1 1 0 0 1 5 20V4Zm2 1v13.131l4.445-2.963a1 1 0 0 1 1.11 0L17 18.13V5H7Z" />
    </svg>
  );
};

const bookmarkOutlineIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M5 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1.555.832L12 17.202l-5.445 3.63A1 1 0 0 1 5 20V4Zm2 1v13.131l4.445-2.963a1 1 0 0 1 1.11 0L17 18.13V5H7Z"/></svg>';

export { BookmarkOutlineIcon, bookmarkOutlineIcon };
