// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LocationIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.542 15.833s5.541-4.75 5.541-10.291A5.542 5.542 0 100 5.542c0 5.541 5.542 10.291 5.542 10.291zm0-11.083a.791.791 0 110 1.583.791.791 0 010-1.583z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LocationIcon;
/* prettier-ignore-end */
