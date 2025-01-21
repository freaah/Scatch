// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function InvoiceIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.063 4.688H4.687v1.041h9.375V4.688zm0 4.166H4.687v1.042h9.375V8.854zM9.896 13.02H4.687v1.043h5.209V13.02z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M0 20.833l4.688-2.083 4.687 2.083 4.688-2.083 4.687 2.083V0H0v20.833zM1.042 1.042h16.666V19.23l-3.223-1.432-.422-.188-.423.188-4.265 1.895-4.265-1.895-.423-.188-.422.188-3.223 1.432V1.042z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InvoiceIcon;
/* prettier-ignore-end */
