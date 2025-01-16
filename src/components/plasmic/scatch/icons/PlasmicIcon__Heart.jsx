// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HeartIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 53 47"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.888 26.857L26.5 47l20.612-20.143A14.974 14.974 0 0053 14.921C53 6.684 46.404 0 38.278 0 33.464 0 29.179 2.358 26.5 5.984 23.82 2.358 19.536 0 14.722 0 6.596 0 0 6.685 0 14.92c0 4.88 2.31 9.207 5.888 11.937zm8.834-24.171c3.776 0 7.386 1.834 9.657 4.907l2.121 2.87 2.121-2.87c2.271-3.073 5.88-4.907 9.657-4.907 6.657 0 12.072 5.488 12.072 12.235 0 3.878-1.76 7.447-4.834 9.79l-.128.098-.117.114L26.5 43.27 7.729 24.922l-.117-.114-.128-.098C4.412 22.368 2.65 18.8 2.65 14.921c0-6.747 5.415-12.235 12.072-12.235z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HeartIcon;
/* prettier-ignore-end */
