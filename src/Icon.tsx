import type { ComponentType, SVGAttributes } from "react";

type IconType = ComponentType<IconProps>;

type IconProps = SVGAttributes<SVGSVGElement>;

export { type IconProps, type IconType };
