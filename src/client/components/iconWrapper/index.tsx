import { FC } from "react";
import { IconWrapperType } from "./types";

export const IconWrapper: FC<IconWrapperType> = ({
  width = 24,
  height = 24,
  className,
  children,
}) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);
