// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LetterIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.389.3c-.25-.186-.555-.3-.89-.3H1.5C1.166 0 .86.114.61.3L7.5 7.19 14.389.3z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M0 1.81v8.69c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5V1.81l-7.5 7.5L0 1.81z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LetterIcon;
/* prettier-ignore-end */
