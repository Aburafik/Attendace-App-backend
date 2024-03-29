import React from "react";
import {
  IssueOpenedIcon,
  ClockFillIcon,
  ClockIcon,
  PeopleIcon,
} from "@primer/octicons-react";

const Attendancebar = () => {
  return (
    <div
      style={{ minWidth: "75vw" }}
      className="flex flex-row justify-between ml-6 bg-slate-100 p-2"
    >
      <div className="flex flex-col justify-center border-purple-600 bg-purple-400 rounded-xl items-center border p-2">
        <PeopleIcon size={40} />
        <p className="font-bold text-zinc-400">Employee</p>
      </div>
      <div className="flex flex-col bg-green-300 justify-center rounded-xl border-green-600 items-center border p-2">
        <ClockFillIcon size={40} />
        <p className="font-bold text-zinc-400">Checkin</p>
      </div>
      <div className="flex flex-col justify-center bg-violet-400 rounded-xl items-center border border-violet-600 p-2">
        <ClockIcon size={40} />
        <p className="font-bold text-zinc-400">Checkout</p>
      </div>
      <div className="flex flex-col justify-center items-center border p-2 rounded-xl border-orange-600 bg-orange-200">
        <IssueOpenedIcon size={40} color="bue" />
        <p className="font-bold text-zinc-400">Status</p>
      </div>
    </div>
  );
};

export default Attendancebar;
