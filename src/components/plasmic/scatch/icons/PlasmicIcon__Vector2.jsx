// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1921 83"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 29.068C9 29.068 499.5 78 499.5 78l366-73 602 66.5s449-31.194 453.5-31.194"
        }
        stroke={"currentColor"}
        strokeWidth={"9"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
