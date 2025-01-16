// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SubtractIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 318 227"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M46.142 0C17.62 28.739 0 68.312 0 112c0 45.229 18.885 86.048 49.2 115h219.6c30.315-28.952 49.2-69.771 49.2-115 0-43.688-17.62-83.261-46.142-112H46.142z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SubtractIcon;
/* prettier-ignore-end */
