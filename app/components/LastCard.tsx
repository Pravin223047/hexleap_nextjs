import Image5 from "../../public/Images/Image4.png";

import React from "react";

const LastCard = () => {
  return (
    <div className="bg-white h-[33.19rem] w-[14.81rem] flex flex-col shadow-md p-2 cursor-pointer dark:bg-[#3B3E47]">
      <div className="w-full h-[14.08rem] flex items-center justify-center">
        <img
          src={Image5.src}
          alt="Image1"
          className="border-4 border-solid dark:border-[#3B3E47] h-[100%] w-[100%]"
        />
      </div>
      <div className="border-[0.2px] border-slate-400/90 h-full p-2 flex flex-col gap-2">
        <h3 className=" text-black font-medium text-xl dark:text-white">
          Advertisement title
        </h3>
        <div className="h-full w-full text-sm text-slate-600/90 dark:text-slate-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  );
};

export default LastCard;
