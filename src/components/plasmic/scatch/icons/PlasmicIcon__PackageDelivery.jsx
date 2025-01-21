// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PackageDeliveryIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.333 3.333L10 7.333l2.667 8 11.333-4-2.667-8zM11.68 8.155l8.818-3.112 1.824 5.47-8.818 3.112-1.824-5.47zM14 24.667A1.333 1.333 0 1014 22a1.333 1.333 0 000 2.667z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M22.422 15.823l-12 4L3.814 0H0v1.333h2.853L9.578 21.51l13.265-4.421-.421-1.266z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PackageDeliveryIcon;
/* prettier-ignore-end */
