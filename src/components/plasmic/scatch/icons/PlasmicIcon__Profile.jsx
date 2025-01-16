// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ProfileIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 51 54"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M32.315 27.831c4.71-2.465 7.929-7.39 7.929-13.075C40.244 6.606 33.637 0 25.488 0c-8.15 0-14.756 6.607-14.756 14.756 0 5.685 3.22 10.61 7.93 13.075C7.901 30.974 0 41.33 0 53.658h50.976c0-12.329-7.902-22.684-18.661-25.827zm-18.9-13.075c0-6.658 5.415-12.073 12.073-12.073 6.657 0 12.073 5.415 12.073 12.073S32.145 26.83 25.488 26.83c-6.658 0-12.073-5.415-12.073-12.073zm12.073 14.756c11.718 0 21.4 9.408 22.665 21.464H2.823C4.086 38.92 13.77 29.512 25.487 29.512z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ProfileIcon;
/* prettier-ignore-end */
