import React from "react";
import { RiExpandDiagonalLine, RiAddCircleLine } from "@remixicon/react";
import TimeBar from "./timeBar";

const Actions = () => {
  return (
    <section className="flex flex-col gap-6 items-start lg:flex-row lg:items-center lg:gap-32">
      <div className="flex gap-4">
        <button className="shadow-none border-transparent text-[#6F7177] dark:text-[#6F7177] text-[18px] bg-transparent hover:text-[#1A243A] dark:hover:text-[#1A243A]">
          <span className="flex gap-2 items-center">
            <RiExpandDiagonalLine />
            Fullscreen
          </span>
        </button>

        <button className="shadow-none border-transparent text-[#6F7177] dark:text-[#6F7177] text-[18px] bg-transparent hover:text-[#1A243A] dark:hover:text-[#1A243A]">
          <span className="flex gap-2 items-center">
            <RiAddCircleLine />
            Compare
          </span>
        </button>
      </div>
      <TimeBar />
    </section>
  );
};

export default Actions;
