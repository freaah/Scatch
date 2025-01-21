// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function TrashIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18 2h-5c0-1.103-.897-2-2-2H7C5.897 0 5 .897 5 2H0v2h18V2zM8 16H6V6H2v12.143C2 19.167 2.897 20 4 20h10c1.103 0 2-.833 2-1.857V6h-4v10h-2V6H8v10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TrashIcon;
/* prettier-ignore-end */
