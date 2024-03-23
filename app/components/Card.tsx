import React from "react";

interface CardProps {
  title: string;
  events: string;
  sport: string;
  Image: {
    src: string;
  };
}

const Card: React.FC<CardProps> = ({ title, events, sport, Image }) => {
  return (
    <div className="bg-white h-[33.19rem] w-[14.81rem] flex flex-col shadow-md p-2 gap-4 cursor-pointer dark:bg-[#3B3E47]">
      <div className="w-full h-[24.08rem] flex items-center justify-center">
        <img
          src={Image.src}
          alt="Image1"
          className="border-4 border-solid dark:border-[#3B3E47] h-[100%] w-[100%] bg-[#3B3E47]"
        />
      </div>
      <h3 className="text-black font-medium dark:text-white">{title}</h3>
      <div className="bg-slate-200/50 h-[4rem] w-full flex gap-4 p-3 items-center justify-between dark:bg-[#292B32]">
        <div className="flex flex-col gap-1">
          <p className="font-normal text-xs text-slate-400 dark:text-slate-200">
            Total Events
          </p>
          <h4 className="text-base font-bold text-black dark:text-white">
            {events}
          </h4>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-normal text-xs text-slate-400 dark:text-slate-200 ">
            Sport
          </p>
          <h4 className="text-base font-bold text-slate-800 dark:text-white">
            {sport}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
