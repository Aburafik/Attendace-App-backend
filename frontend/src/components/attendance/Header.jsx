import React from "react";
import {
  WorkflowIcon,
  ArrowSwitchIcon,
  HomeIcon,
} from "@primer/octicons-react";
import History from "./History";
import Usercard from "../cards/Usercard";

const Header = () => {
  return (
    <div className="flex flex-col ml-10">
      <div
        className="items-center flex flex-col"
        style={{ width: "70vw", textWrap: "wrap" }}
      >
        <div>
          <h1>Attendance</h1>
        </div>
        <div className="mt-5 flex flex-row space-x-10 justify-between">
          <Usercard />
          <div className="flex flex-row items-center space-x-3 bg-emerald-200 rounded-xl p-1.5">
            <div
              style={{
                backgroundColor: "#5FBDFF",
                padding: "1vh",
                borderRadius: "7vh",
              }}
            >
              <WorkflowIcon size={24} />
            </div>
            <div className="">
              <p className="font-bold text-lg">Employee ID</p>
              <p>EHSDJE94383</p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-3 bg-blue-400 rounded-xl p-1.5">
            <div
              style={{
                backgroundColor: "#1D24CA",
                padding: "1vh",
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
          <div className="flex flex-row items-center space-x-3 bg-violet-400 rounded-xl p-1.5">
            <div
              style={{
                backgroundColor: "#D04848",
                padding: "1vh",
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
      <History />
      <div className="ml-10">
        <div className="flex flex-row justify-between mt-2 p-2">
          <p className="font-bold">DATE</p>
          <p className="font-bold">CHECK IN</p>
          <p className="font-bold">CHECK OUT</p>
          <p className="font-bold">STATUS</p>
          <p className="font-bold">ACTION</p>
        </div>
      </div>
      <div className="">
        <div className="flex flex-row justify-between mt-2 p-2">
          <p>23 OCT, 2023</p>
          <p>24 DEC, 2023</p>
          <p>25 DEC, 2023</p>
          <p className="rounded-2xl bg-green-200 p-1 border border-green-600 px-3">
            PRESENT
          </p>
          <p>edit</p>
        </div>
        <div className="flex flex-row justify-between mt-2 p-2">
          <p>23 OCT, 2023</p>
          <p>24 DEC, 2023</p>
          <p>25 DEC, 2023</p>
          <p className="rounded-2xl bg-green-200 p-1 border border-green-600 px-3">
            PRESENT
          </p>
          <p>edit</p>
        </div>
        <div className="flex flex-row justify-between mt-2 p-2">
          <p>23 OCT, 2023</p>
          <p>24 DEC, 2023</p>
          <p>25 DEC, 2023</p>
          <p className="rounded-2xl bg-red-200 p-1 border border-red-600 px-3">
            ABSENT
          </p>
          <p>edit</p>
        </div>
        <div className="flex flex-row justify-between mt-2 p-2">
          <p>23 OCT, 2023</p>
          <p>24 DEC, 2023</p>
          <p>25 DEC, 2023</p>
          <p className="rounded-2xl bg-red-200 p-1 border border-red-600 px-3">
            ABSENT
          </p>
          <p>edit</p>
        </div>
        <div className="flex flex-row justify-between mt-2 p-2">
          <p>23 OCT, 2023</p>
          <p>24 DEC, 2023</p>
          <p>25 DEC, 2023</p>
          <p className="rounded-2xl bg-green-200 p-1 border border-green-600 px-3">
            PRESENT
          </p>
          <p>edit</p>
        </div>
        <div className="flex flex-row justify-between mt-2 p-2">
          <p>23 OCT, 2023</p>
          <p>24 DEC, 2023</p>
          <p>25 DEC, 2023</p>
          <p className="rounded-2xl bg-green-200 p-1 border border-green-600 px-3">
            PRESENT
          </p>
          <p>edit</p>
        </div>
        <div className="flex flex-row justify-between mt-2 p-2">
          <p>23 OCT, 2023</p>
          <p>24 DEC, 2023</p>
          <p>25 DEC, 2023</p>
          <p className="rounded-2xl bg-red-200 p-1 border border-red-600 px-3">
            ABSENT
          </p>
          <p>edit</p>
        </div>
        <div className="flex flex-row justify-between mt-2 p-2">
          <p>23 OCT, 2023</p>
          <p>24 DEC, 2023</p>
          <p>25 DEC, 2023</p>
          <p className="rounded-2xl bg-green-200 p-1 border px-3 border-green-600">
            PRESENT
          </p>
          <p>edit</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
