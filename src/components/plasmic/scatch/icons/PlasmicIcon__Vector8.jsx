// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.251 8.48c0-3.068-4.919-6.96-7.725-8.48 3.408 1.095 10.433 2.706 10.82 8.48.159 2.374-3.482 5.773-4.449 6.495-.967.721-5.415 1.984-8.897 1.984 2.127-.541 6.048-2.213 7.93-3.969.967-.902 2.321-2.526 2.321-4.51z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
