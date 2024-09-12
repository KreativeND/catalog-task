import React, { useState } from "react";
import { cx } from "../lib/utils";

const TimeBar = () => {
  const timePeriod = ["1d", "3d", "1w", "1m", "6m", "1y", "max"];
  const [active, setActive] = useState("1d");
  return (
    <div>
      {timePeriod.map((period) => {
        return (
          <>
            <button
              className={cx(
                "shadow-none border-transparent text-[#6F7177] dark:text-[#6F7177] text-[18px] bg-transparent hover:text-[#1A243A] dark:hover:text-[#1A243A] px-4 py-2 ",
                active == period && "bg-[#4B40EE] rounded-md text-white dark:text-white hover:text-white dark:hover:text-white"
              )}
              onClick={() => setActive(period)}
            >
              {period}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default TimeBar;
