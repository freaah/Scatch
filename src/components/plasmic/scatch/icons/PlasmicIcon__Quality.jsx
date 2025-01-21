// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function QualityIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.5 12.143a3.643 3.643 0 100-7.285 3.643 3.643 0 000 7.285zm0-6.072c1.34 0 2.429 1.09 2.429 2.429 0 1.34-1.09 2.429-2.429 2.429A2.431 2.431 0 016.072 8.5 2.43 2.43 0 018.5 6.071z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M13.357 15.47A8.485 8.485 0 0017 8.5a8.5 8.5 0 00-17 0 8.485 8.485 0 003.643 6.97v8.816L8.5 21.857l4.857 2.429V15.47zM8.5 1.214c4.018 0 7.286 3.269 7.286 7.286 0 4.018-3.268 7.286-7.286 7.286-4.017 0-7.286-3.268-7.286-7.286 0-4.017 3.269-7.286 7.286-7.286zm0 19.286l-3.643 1.82v-6.15A8.456 8.456 0 008.5 17a8.456 8.456 0 003.643-.829v6.15L8.5 20.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default QualityIcon;
/* prettier-ignore-end */
