import React from "react";
import Nav from "../../components/navigationbar/Nav";
import Usercard from "../../components/cards/Usercard";
import { useNavigate } from "react-router-dom";
import { PlusCircleIcon } from "@primer/octicons-react";

const Empolyees = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row space-x-4 justify-between relative">
      <Nav />
      <div className="flex flex-col mt-5">
        <div className="flex flex-row justify-between space-x-40 ml-10">
          <p className="font-semibold tex-lg">Name</p>
          <p className="font-semibold text-lg">Department</p>
          <p className="font-semibold tex-lg">Date Joined</p>
          <p className="font-semibold tex-lg">Reports</p>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="flex flex-row space-x-3 justify-center items-center">
            <div className="p-7  bg-teal-500 rounded-full"></div>
            <div>
              <p>User1</p>
              <p>Software developer</p>
            </div>
          </div>
          <p>IT</p>
          <p>29-02-2023</p>
          <button
            onClick={() => navigate("/em-report")}
            className="bg-slate-400 p-1 rounded-lg text-white"
          >
            View details
          </button>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="flex flex-row space-x-3 justify-center items-center">
            <div className="p-7  bg-orange-100 rounded-full"></div>
            <div>
              <p>User1</p>
              <p>Software developer</p>
            </div>
          </div>
          <p>IT</p>
          <p>29-02-2023</p>
          <button className="bg-slate-400 p-1 rounded-lg text-white">
            View details
          </button>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="flex flex-row space-x-3 justify-center items-center">
            <div className="p-7  bg-teal-500 rounded-full"></div>
            <div>
              <p>User1</p>
              <p>Software developer</p>
            </div>
          </div>
          <p>IT</p>
          <p>29-02-2023</p>
          <button
            onClick={() => navigate("/em-report")}
            className="bg-slate-400 p-1 rounded-lg text-white"
          >
            View details
          </button>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="flex flex-row space-x-3 justify-center items-center">
            <div className="p-7  bg-orange-500 rounded-full"></div>
            <div>
              <p>User1</p>
              <p>Software developer</p>
            </div>
          </div>
          <p>IT</p>
          <p>29-02-2023</p>
          <button className="bg-slate-400 p-1 rounded-lg text-white">
            View details
          </button>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="flex flex-row space-x-3 justify-center items-center">
            <div className="p-7  bg-zinc-600 rounded-full"></div>
            <div>
              <p>User1</p>
              <p>Software developer</p>
            </div>
          </div>
          <p>IT</p>
          <p>29-02-2023</p>
          <button className="bg-slate-400 p-1 rounded-lg text-white">
            View details
          </button>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="flex flex-row space-x-3 justify-center items-center">
            <div className="p-7  bg-violet-500 rounded-full"></div>
            <div>
              <p>User1</p>
              <p>Software developer</p>
            </div>
          </div>
          <p>IT</p>
          <p>29-02-2023</p>
          <button className="bg-slate-400 p-1 rounded-lg text-white">
            View details
          </button>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="flex flex-row space-x-3 justify-center items-center">
            <div className="p-7  bg-green-200 rounded-full"></div>
            <div>
              <p>User1</p>
              <p>Software developer</p>
            </div>
          </div>
          <p>IT</p>
          <p>29-02-2023</p>
          <button className="bg-slate-400 p-1 rounded-lg text-white">
            View details
          </button>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="flex flex-row space-x-3 justify-center items-center">
            <div className="p-7  bg-green-200 rounded-full"></div>
            <div>
              <p>User1</p>
              <p>Software developer</p>
            </div>
          </div>
          <p>IT</p>
          <p>29-02-2023</p>
          <button className="bg-slate-400 p-1 rounded-lg text-white">
            View details
          </button>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="flex flex-row space-x-3 justify-center items-center">
            <div className="p-7  bg-green-200 rounded-full"></div>
            <div>
              <p>User1</p>t<p>Software developer</p>
            </div>
          </div>
          <p>IT</p>
          <p>29-02-2023</p>
          <button className="bg-slate-400 p-1 rounded-lg text-white">
            View details
          </button>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="flex flex-row space-x-3 justify-center items-center">
            <div className="p-7  bg-green-200 rounded-full"></div>
            <div>
              <p>User1</p>t<p>Software developer</p>
            </div>
          </div>
          <p>IT</p>
          <p>29-02-2023</p>
          <button className="bg-slate-400 p-1 rounded-lg text-white">
            View details
          </button>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="flex flex-row space-x-3 justify-center items-center">
            <div className="p-7  bg-green-200 rounded-full"></div>
            <div>
              <p>User1</p>t<p>Software developer</p>
            </div>
          </div>
          <p>IT</p>
          <p>29-02-2023</p>
          <button className="bg-slate-400 p-1 rounded-lg text-white">
            View details
          </button>
        </div>
        <div className="flex flex-row justify-between items-center mt-5">
          <div className="flex flex-row space-x-3 justify-center items-center">
            <div className="p-7  bg-green-200 rounded-full"></div>
            <div>
              <p>User1</p>t<p>Software developer</p>
            </div>
          </div>
          <p>IT</p>
          <p>29-02-2023</p>
          <button className="bg-slate-400 p-1 rounded-lg text-white">
            View details
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={() => navigate("/new")}
          className="bg-blue-300 rounded-xl p-2 mt-4"
        >
          <PlusCircleIcon size={24} className="mr-2" />
          New employee
        </button>
      </div>
    </div>
  );
};

export default Empolyees;
