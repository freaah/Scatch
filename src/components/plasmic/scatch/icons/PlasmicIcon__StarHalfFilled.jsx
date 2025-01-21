// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function StarHalfFilledIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.268 15.652l-.268-.17-.268.17-5.165 3.281 1.371-6.225.062-.282-.213-.195-4.613-4.214 6.061-.55.304-.028.115-.284L10 1.337l2.346 5.818.114.284.305.027 6.06.55-4.622 4.214-.214.196.063.282 1.38 6.224-5.164-3.28z"
        }
        stroke={"currentColor"}
      ></path>

      <path
        d={"M10 16.074V0L7.19 6.968 0 7.621 5.45 12.6 3.82 20 10 16.074z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarHalfFilledIcon;
/* prettier-ignore-end */
