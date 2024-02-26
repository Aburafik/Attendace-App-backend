import React from "react";
import Nav from "../components/Nav";
import {
  WorkflowIcon,
  ArrowSwitchIcon,
  HomeIcon,
} from "@primer/octicons-react";

const Attendance = () => {
  return (
    <div className="flex flex-row">
      <Nav />
      <div
        className="bg-white ml-12 flex flex-col p-5"
        style={{ width: "75vw", textWrap: "wrap" }}
      >
        <h1>Attendance</h1>
        <div className="mt-5 flex flex-row space-x-10 justify-center">
          <div className="flex flex-row items-center space-x-3 bg-orange-200 p-2 rounded-xl">
            <img
              src="https://i.ibb.co/z4z4z4z/attendance.png"
              alt="attendance"
              style={{ width: "12vh", borderRadius: "7vh" }}
            />
            <div>
              <p className="font-bold text-lg">Maria Smith</p>
              <p>Software developer</p>
            </div>
          </div>

          <div className="flex flex-row items-center space-x-5 bg-emerald-200 rounded-xl p-2">
            <div
              style={{
                backgroundColor: "#5FBDFF",
                padding: "3vh",
                borderRadius: "7vh",
              }}
            >
              <WorkflowIcon size={24} />
            </div>
            <div className="space-y-2">
              <p className="font-bold text-lg">Employee ID</p>
              <p>EHSDJE94383</p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-5 bg-blue-400 rounded-xl p-2">
            <div
              style={{
                backgroundColor: "#1D24CA",
                padding: "3vh",
                borderRadius: "7vh",
              }}
            >
              <ArrowSwitchIcon size={24} />
            </div>
            <div className="space-y-2">
              <p className="font-bold text-lg">Joining Date</p>
              <p>21 April, 2001</p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-5 bg-violet-400 rounded-xl p-2">
            <div
              style={{
                backgroundColor: "#D04848",
                padding: "3vh",
                borderRadius: "7vh",
              }}
            >
              <HomeIcon size={24} />
            </div>
            <div className="space-y-2">
              <p className="font-bold text-lg">Department</p>
              <p>Account</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
