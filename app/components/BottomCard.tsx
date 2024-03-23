// Card.tsx
import React from "react";

interface CardProps {
  title: string;
  location: string;
  buttontext: string;
  date: string;
  image: {
    src: string;
  };
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  location,
  buttontext,
  date,
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-xl h-full w-full max-w-sm p-4 flex flex-col gap-4 dark:bg-[#3B3E47] 
    "
    >
      <img
        className="w-full h-full object-cover"
        src={image.src}
        alt={image.src}
      />
      <div className="border-t-2 border-dashed border-slate-400/60 mt-2 relative flex justify-between items-center">
        <span className="absolute -left-7 top-1/2 transform -translate-y-1/2 bg-slate-200 rounded-full shadow-2xl w-6 h-6 dark:bg-[#221B2C]"></span>{" "}
        <span className="absolute -right-7 top-1/2 transform -translate-y-1/2 bg-slate-200 rounded-full shadow-2xl w-6 h-6 dark:bg-[#221B2C]"></span>{" "}
      </div>
      <div className=" flex flex-col items-center justify-center gap-3">
        <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h3>
        <h4 className="text-medium text-black dark:text-slate-200">{date}</h4>
        <h3 className="ml-4 text-medium text-gray-700 flex text-sm items-center justify-center text-center dark:text-slate-200">
          {location}
        </h3>
        <button className="text-white bg-black p-2 pr-6 pl-6 flex items-center justify-center text-center w-full text-sm">
          {buttontext}
        </button>
      </div>
    </div>
  );
};

export default Card;
