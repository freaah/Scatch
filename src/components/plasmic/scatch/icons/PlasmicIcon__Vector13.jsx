// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector13Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 45"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.33 1.734l-.422-.672-.424.672-12.907 20.5-.168.266.168.266 12.907 20.5.424.672.423-.672 1.092-1.735.168-.266-.168-.266L4.776 22.5 16.423 4.001l.168-.266-.168-.266-1.092-1.735z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector13Icon;
/* prettier-ignore-end */
