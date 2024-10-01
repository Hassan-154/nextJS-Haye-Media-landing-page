"use client";
import React from "react";

const Button = ({
  name = "Book a call",
  className = "",
  onClick = () => {},
}) => {
  return (
    <button
      className={`bg-violet text-white text-[14.5px] font-medium py-[8px] px-[14px] rounded-[11px] ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
