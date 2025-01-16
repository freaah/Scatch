// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Letter2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.188.317A1.565 1.565 0 0014.25 0H1.583C1.231 0 .908.12.645.317l7.272 7.272L15.188.317z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M0 1.911v9.172c0 .871.713 1.584 1.583 1.584H14.25c.87 0 1.583-.713 1.583-1.584V1.911L7.917 9.828 0 1.91z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Letter2Icon;
/* prettier-ignore-end */
