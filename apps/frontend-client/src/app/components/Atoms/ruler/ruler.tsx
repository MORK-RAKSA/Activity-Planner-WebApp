import { WidthProps } from "@/app/types/all-type-survey.type";
import React from "react";

export default function Ruler({
  width,
  color = "purple",
  className = "",
}: WidthProps) {
  const baseStyles = "h-[5px] rounded-full";
  const style = {
    purple: "bg-purpleColor",
    warning: "bg-red-500",
    success: "bg-green-500",
  };
  return (
    <div className=" bg-[#E8ECED] w-full h-[5px] rounded-full">
      <div
        className={`${baseStyles} ${style[color]} ${className}`}
        style={{ width }}
      ></div>
    </div>
  );
}
