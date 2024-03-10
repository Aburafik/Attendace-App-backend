import React from "react";
import Nav from "../../components/navigationbar/Nav";
import { useNavigate } from "react-router-dom";
import Header from "../../components/attendance/Header";
import { DevicesIcon } from "@primer/octicons-react";
import Usercard from "../../components/cards/Usercard";
import Active from "../../widget/status/Active";
import {
  PersonIcon,
  IssueOpenedIcon,
  ClockFillIcon,
  ClockIcon,
  PeopleIcon,
} from "@primer/octicons-react";

const Attendance = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "100vh" }} className="flex relative flex-row">
      <Nav />
      <div className="mt-5">
        <h1>Today</h1>
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
        <div
          onClick={() => navigate("attendance-records")}
          className="flex flex-row justify-between items-center ml-6 bg-slate-50 border border-zinc-200 mt-2 p-1"
        >
          <div className="flex flex-row items-center justify-center space-x-2">
            <div>
              <PersonIcon size={32} />
            </div>
            <p className="text-lg">Meech</p>
          </div>
          <p>02-04-24</p>
          <p>02-04-24</p>
          <Active isActive="Absent" color="red" />
        </div>
        <div
          onClick={() => navigate("attendance-records")}
          className="flex flex-row justify-between items-center ml-6 bg-slate-50 border border-zinc-200 mt-2 p-1"
        >
          <div className="flex flex-row items-center justify-center space-x-2">
            <div>
              <PersonIcon size={32} />
            </div>
            <p className="text-lg">Meech</p>
          </div>
          <p>02-04-24</p>
          <p>02-04-24</p>
          <Active isActive="Present" color="green" />
        </div>
        <div
          onClick={() => navigate("attendance-records")}
          className="flex flex-row justify-between items-center ml-6 bg-slate-50 border border-zinc-200 mt-2 p-1"
        >
          <div className="flex flex-row items-center justify-center space-x-2">
            <div>
              <PersonIcon size={32} />
            </div>
            <p className="text-lg">Meech</p>
          </div>
          <p>02-04-24</p>
          <p>02-04-24</p>
          <Active isActive="Absent" color="red" />
        </div>
        <div
          onClick={() => navigate("attendance-records")}
          className="flex flex-row justify-between items-center ml-6 bg-slate-50 border border-zinc-200 mt-2 p-1"
        >
          <div className="flex flex-row items-center justify-center space-x-2">
            <div>
              <PersonIcon size={32} />
            </div>
            <p className="text-lg">Meech</p>
          </div>
          <p>02-04-24</p>
          <p>02-04-24</p>
          <Active isActive="Absent" color="red" />
        </div>
        <div
          onClick={() => navigate("attendance-records")}
          className="flex flex-row justify-between items-center ml-6 bg-slate-50 border border-zinc-200 mt-2 p-1"
        >
          <div className="flex flex-row items-center justify-center space-x-2">
            <div>
              <PersonIcon size={32} />
            </div>
            <p className="text-lg">Meech</p>
          </div>
          <p>02-04-24</p>
          <p>02-04-24</p>
          <Active isActive="Present" color="green" />
        </div>
        <div
          onClick={() => navigate("attendance-records")}
          className="flex flex-row justify-between items-center ml-6 bg-slate-50 border border-zinc-200 mt-2 p-1"
        >
          <div className="flex flex-row items-center justify-center space-x-2">
            <div>
              <PersonIcon size={32} />
            </div>
            <p className="text-lg">Meech</p>
          </div>
          <p>02-04-24</p>
          <p>02-04-24</p>
          <Active isActive="Present" color="green" />
        </div>
      </div>
    </div>
  );
};

{
  /* <Nav />
      <Header /> */
}

export default Attendance;
