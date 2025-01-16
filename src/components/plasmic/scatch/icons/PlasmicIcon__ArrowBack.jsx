// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArrowBackIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.262 1.648l-.354-.358-.355.358-12.908 13-.35.352.35.352 12.908 13 .355.358.354-.358 1.093-1.1.35-.352-.35-.352L4.889 15 16.355 3.453l.35-.353-.35-.352-1.093-1.1z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBackIcon;
/* prettier-ignore-end */
