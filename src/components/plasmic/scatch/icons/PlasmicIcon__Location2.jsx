// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Location2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 42"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.5 0C6.492 0 0 6.581 0 14.7 0 29.4 14.5 42 14.5 42S29 29.4 29 14.7C29 6.581 22.508 0 14.5 0zm0 39.123C11.03 35.665 2.071 25.673 2.071 14.7c0-6.948 5.576-12.6 12.429-12.6 6.853 0 12.429 5.652 12.429 12.6 0 10.975-8.96 20.966-12.429 24.423z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M14.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Location2Icon;
/* prettier-ignore-end */
