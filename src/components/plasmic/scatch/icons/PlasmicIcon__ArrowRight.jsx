// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ArrowRightIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 10.7h15.449l-8.716 8.716.821.822 10.12-10.119L7.553 0l-.821.822 8.716 8.716H0V10.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowRightIcon;
/* prettier-ignore-end */
