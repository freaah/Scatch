// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.923 5.468c1.915-2.887-2.887-2.346-4.33-2.526-.36.18 5.232-3.428 7.036-2.887 1.425.428 2.241 3.94 1.985 5.052-.542 2.345-5.875 4.915-7.037 5.413-.461.197-4.434-.42-7.5-.6-.743-.043 4.149-.721 5.953-1.624 1.443-.721 2.924-1.367 3.893-2.828z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
