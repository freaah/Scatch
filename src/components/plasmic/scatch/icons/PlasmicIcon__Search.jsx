// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SearchIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.729 19.458a9.684 9.684 0 006.365-2.382L25.017 26l.983-.983-8.924-8.923a9.684 9.684 0 002.382-6.365C19.458 4.356 15.102 0 9.729 0 4.356 0 0 4.356 0 9.729c0 5.373 4.356 9.729 9.729 9.729zm0-18.068c4.598 0 8.34 3.74 8.34 8.339 0 4.598-3.742 8.34-8.34 8.34s-8.34-3.742-8.34-8.34 3.742-8.34 8.34-8.34z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SearchIcon;
/* prettier-ignore-end */
