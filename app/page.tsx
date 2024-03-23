import Card from "./components/Card";
import LastCard from "./components/LastCard";
import Image1 from "../public/Images/Image1.png";
import Image2 from "../public/Images/Image2.png";
import Image3 from "../public/Images/Image3.png";
import React from "react";
import BottomCard from "./components/BottomCard";
import Image5 from "../public/Images/Image5.png";
import Image6 from "../public/Images/Image6.png";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-20 items-center p-16 h-[100%] w-100%] bg-slate-200 dark:bg-[#232A3C]">
        <div className="flex flex-col gap-10 w-[78.0625rem ]">
          <div className="flex w-full justify-between items-center">
            <h2 className="text-[2rem] font-extrabold border-b-indigo-600 border-2 border-transparent w-fit dark:text-white">
              Sports
            </h2>
            <div className="ml-6">
              <ThemeToggle />
            </div>
          </div>
          <div className="flex items-center gap-4 justify-between lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 sm:justify-center">
            <Card
              title="Sacramento River Cats"
              events="48 Events"
              sport="Baseball"
              Image={Image1}
            />
            <Card
              title="Las Vegas Aviators"
              events="28 Events"
              sport="Baseball"
              Image={Image2}
            />
            <Card
              title="New Jersey Devils"
              events="15 Events"
              sport="Ice Hockey"
              Image={Image3}
            />
            <Card
              title="Las Vegas Aviators"
              events="28 Events"
              sport="Baseball"
              Image={Image2}
            />
            <LastCard />
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="bg-[#2C9CF0] p-3 pl-8 pr-8 rounded text-white cursor-pointer hover:bg-[#5795c4]">
              See More
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-16 p-8 w-[78.0625rem ] dark:bg-gradient-to-b from-[#19272A] to-[#221B2C] smm:w-full dark:smm:bg-slate-100">
          <div className="flex flex-col gap-4 h-full w-full items-center justify-center">
            <h1 className="text-[3rem] font-extrabold sm:text-2xl dark:text-white">
              Collection Spotlight
            </h1>
            <p className="flex items-center justify-center text-center dark:text-white w-[88%] smm:w-full">
              Discover extraordinary moments with our Spotlight Collection
              metatickets—exclusive access to premium events for an
              unforgettable experience. Grab yours today!
            </p>
          </div>
          <div className="flex w-full h-full gap-10 items-center justify-center bg:items-stretch">
            <button className="border-blue-500 border-2 text-blue-600 text-xl cursor-pointer w-10 h-16 flex items-center justify-center bg:hidden">
              <FiArrowLeft style={{ fontSize: "1.5rem" }} />{" "}
              {/* Increased font size */}
            </button>

            <div className="flex items-center gap-10 w-[58rem] h-full smm:grid smm:items-start smm:grid-cols-2 smm:w-[40rem] bg:flex bg:flex-col bg:justify-center bg:text-center">
              <BottomCard
                title="Las Vegas Aviators"
                location="Las Vegas Ballpark, Las Vegas, Nevada"
                image={Image5}
                buttontext="Take Flight Collection"
                date="Oct 15 | Sun | 4:30 PM"
              />
              <BottomCard
                title="Sacramento River Cats"
                location="Sutter Health Park, Sacramento, California"
                image={Image6}
                buttontext="Orange Collection"
                date="Oct 15 | Sun | 4:30 PM"
              />
              <BottomCard
                title="Las Vegas Aviators"
                location="Las Vegas Ballpark, Las Vegas, Nevada"
                image={Image5}
                buttontext="Take Flight Collection"
                date="Oct 15 | Sun | 4:30 PM"
              />
            </div>
            <button className="border-blue-500 border-2  text-blue-600 cursor-pointer w-10 h-16 flex items-center justify-center  bg:hidden">
              <FiArrowRight style={{ fontSize: "1.5rem" }} />{" "}
              {/* Increased font size */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
