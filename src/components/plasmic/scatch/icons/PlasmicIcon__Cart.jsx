// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CartIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 55 54"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 48.155c0 3.027 2.475 5.503 5.5 5.503h44c3.025 0 5.5-2.476 5.5-5.503V12.383H42.362C41.064 5.349 34.9 0 27.5 0S13.936 5.35 12.638 12.383H0v35.772zM27.5 2.752c5.878 0 10.8 4.125 12.056 9.63H15.444c1.255-5.505 6.178-9.63 12.056-9.63zM12.375 15.135v8.255h2.75v-8.256h24.75v8.256h2.75v-8.256h9.625v33.021a2.754 2.754 0 01-2.75 2.752h-44a2.754 2.754 0 01-2.75-2.752v-33.02h9.625z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CartIcon;
/* prettier-ignore-end */
