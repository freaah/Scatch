// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AccountIcon(props) {
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
          "M15.214 12.967c2.218-1.149 3.733-3.443 3.733-6.092C18.947 3.078 15.837 0 12 0S5.053 3.078 5.053 6.875c0 2.649 1.515 4.943 3.733 6.092C3.72 14.43 0 19.256 0 25h24c0-5.744-3.72-10.569-8.786-12.033zM6.316 6.875c0-3.102 2.55-5.625 5.684-5.625 3.134 0 5.684 2.523 5.684 5.625S15.134 12.5 12 12.5c-3.135 0-5.684-2.523-5.684-5.625zM12 13.75c5.517 0 10.076 4.383 10.671 10H1.33c.595-5.617 5.154-10 10.671-10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AccountIcon;
/* prettier-ignore-end */
