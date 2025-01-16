// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.581 14.95a.802.802 0 01-.543-.578.807.807 0 01-.032-.336c.013-.09.316-1.332.671-2.76.69-2.758.681-2.727.88-2.771.044-.01 1.32-.154 2.831-.32 1.512-.166 2.787-.31 2.832-.32a.472.472 0 00.176-.114c.076-.08.092-.125.092-.253s-.016-.172-.092-.252a.472.472 0 00-.176-.115c-.045-.01-1.32-.154-2.832-.32-1.512-.166-2.787-.31-2.832-.32-.198-.044-.188-.012-.879-2.77a145.595 145.595 0 01-.67-2.76C-.062.406.44-.092.964.013c.093.02.607.25 1.202.54.572.278 3.576 1.745 6.676 3.253 4.846 2.362 5.66 2.77 5.805 2.899.47.425.47 1.16 0 1.585-.144.127-.96.537-5.805 2.898-3.1 1.508-6.104 2.972-6.673 3.25-1.227.6-1.279.617-1.589.511z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
