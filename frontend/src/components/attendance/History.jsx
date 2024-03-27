import React from "react";
import {
    DevicesIcon,
    ClockIcon,
    ColumnsIcon,
    HourglassIcon,
  } from "@primer/octicons-react";

const History = () => {
  return (
    <div className=" ml-10 flex flex-row justify-between mt-4 bg-slate-200 p-.5 rounded-lg">
      <div className=" p-2 flex flex-col justify-center items-center space-y-1">
        <div
          className="bg-red-200 p-3.5 justify-center items-center flex"
          style={{
            borderRadius: "7vh",
            width: "8.5vh",
            textWrap: "wrap",
          }}
        >
          <DevicesIcon size={24} />
        </div>
        <p className="text-lg font-semibold">08:00</p>
        <p>Average working Hour</p>
      </div>
      <div className="p-2 flex flex-col justify-center items-center space-y-1">
        <div
          className="bg-blue-200 p-3.5 justify-center items-center flex"
          style={{
            borderRadius: "7vh",
            width: "8.5vh",
            // height: "8vh",
            textWrap: "wrap",
          }}
        >
          <ClockIcon size={24} />
        </div>
        <p className="text-lg font-semibold">9:30 AM</p>
        <p>Average Time in</p>
      </div>
      <div className="p-2 flex flex-col justify-center items-center space-y-1">
        <div
          className="bg-green-200 p-3.5 justify-center items-center flex"
          style={{
            borderRadius: "7vh",
            width: "8.5vh",
            // height: "8vh",
            textWrap: "wrap",
          }}
        >
          <ColumnsIcon size={24} />
        </div>
        <p className="text-lg font-semibold">7:00 pm</p>
        <p>Average Time out</p>
      </div>
      <div className="p-2 flex flex-col justify-center items-center space-y-1">
        <div
          className="bg-orange-200 p-3.5 justify-center items-center flex"
          style={{
            borderRadius: "7vh",
            width: "8.5vh",
            // height: "8vh",
            textWrap: "wrap",
          }}
        >
          <HourglassIcon size={16} />
        </div>
        <p className="text-lg font-semibold">1:00 pm</p>
        <p>Average Break Time</p>
      </div>
    </div>
  );
};

export default History;
