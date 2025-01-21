// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Note2Icon(props) {
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
          "M18 17.882a1 1 0 01-1 1H2a1 1 0 01-1-1V3.118a1 1 0 011-1h6.941a.559.559 0 100-1.118H1a1 1 0 00-1 1v17a1 1 0 001 1h17a1 1 0 001-1V9.882a.5.5 0 00-1 0v8z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M7.293 8.407A1 1 0 007 9.114V12a1 1 0 001 1h2.886a1 1 0 00.707-.293l7.7-7.7a1 1 0 000-1.414L16.407.707a1 1 0 00-1.414 0l-7.7 7.7zm3.82 3.14a1 1 0 01-.707.293H9.16a1 1 0 01-1-1V9.594a1 1 0 01.293-.707l6.54-6.54a1 1 0 011.414 0l1.246 1.246a1 1 0 010 1.414l-6.54 6.54z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Note2Icon;
/* prettier-ignore-end */
