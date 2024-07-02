import React from "react";

// eslint-disable-next-line react/prop-types
const MyButton = ({ text, style }) => {
  return (
    <div
      className={`w-[243px] h-[56px] hover:cursor-pointer hover:bg-[#a63434] tracking-[1px] bg-[#DB4444] text-[white] rounded-[4px] grid place-items-center
     ${style}`}
    >
      {text}
    </div>
  );
};

export default MyButton;
