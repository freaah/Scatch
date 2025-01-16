// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.222 10L10 17.5l7.778-7.5A5.55 5.55 0 0020 5.556 5.558 5.558 0 0014.444 0 5.548 5.548 0 0010 2.228 5.548 5.548 0 005.556 0 5.558 5.558 0 000 5.556 5.55 5.55 0 002.222 10zm3.334-9A4.58 4.58 0 019.2 2.827l.8 1.069.8-1.068A4.575 4.575 0 0114.444 1 4.56 4.56 0 0119 5.556 4.527 4.527 0 0117.176 9.2l-.048.037-.044.042L10 16.111 2.917 9.28l-.044-.042-.049-.037A4.529 4.529 0 011 5.555 4.56 4.56 0 015.556 1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
