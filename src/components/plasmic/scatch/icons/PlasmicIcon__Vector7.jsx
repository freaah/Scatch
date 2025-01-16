// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.526 16.057c0 1.985-.902 9.562-1.985 12.268 0 0 3.203 1.222 4.33.902 1.127-.319 0-2.536 0-2.536l.722-14.242 1.082-8.48-1.804-1.624L0 0c3.428 2.345 2.526 14.072 2.526 16.057z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
