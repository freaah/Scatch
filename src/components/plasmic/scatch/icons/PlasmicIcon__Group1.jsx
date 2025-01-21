// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        transform={"matrix(.50702 .86193 .50702 -.86193 2 0)"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        d={"M0-1h5.917"}
      ></path>

      <path
        transform={"matrix(.50702 -.86193 .50702 .86193 2 10.2)"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        d={"M0-1h5.917"}
      ></path>
    </svg>
  );
}

export default Group1Icon;
/* prettier-ignore-end */
