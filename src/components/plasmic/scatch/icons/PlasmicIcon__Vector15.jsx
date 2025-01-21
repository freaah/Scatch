// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector15Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.444 10.857L11 19l8.556-8.143C21.04 9.754 22 8.004 22 6.032 22 2.702 19.262 0 15.889 0A6.13 6.13 0 0011 2.419 6.13 6.13 0 006.111 0C2.738 0 0 2.702 0 6.032c0 1.972.96 3.722 2.444 4.825zm3.667-9.771c1.568 0 3.066.741 4.009 1.983L11 4.23l.88-1.16a5.055 5.055 0 014.009-1.983c2.763 0 5.011 2.218 5.011 4.946 0 1.567-.73 3.01-2.006 3.958l-.054.04-.048.045L11 17.492l-7.792-7.417-.048-.046-.054-.04A4.896 4.896 0 011.1 6.033c0-2.728 2.248-4.946 5.011-4.946z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector15Icon;
/* prettier-ignore-end */
