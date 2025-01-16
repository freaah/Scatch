// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.614 5.626a10.904 10.904 0 004.76 4.76l1.589-1.59a.725.725 0 01.736-.18 8.205 8.205 0 002.579.412.722.722 0 01.722.722v2.528a.723.723 0 01-.722.722A12.278 12.278 0 010 .722.722.722 0 01.722 0H3.25a.722.722 0 01.722.722c0 .903.145 1.77.412 2.579a.725.725 0 01-.18.736l-1.59 1.59z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
