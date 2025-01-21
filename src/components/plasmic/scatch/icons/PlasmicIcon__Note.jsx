// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function NoteIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M18.947 18.823H1.053V1.177H10V0H0v20h20V8.824h-1.053v10z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M8 8.03V12h3.97L20 3.97 16.03 0 8 8.03zm3.526 2.9H9.071V8.473l6.96-6.96 2.455 2.455-6.96 6.96z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NoteIcon;
/* prettier-ignore-end */
