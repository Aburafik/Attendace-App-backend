import React from "react";
import Sidebar from "./navigationbar/Nav";
import {
  SearchIcon,
  CommentIcon,
  BellIcon,
  PersonIcon,
} from "@primer/octicons-react";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div
        style={{ maxHeight: "30px", maxWidth: "950px", position: "absolute" }}
        className=" bg-white ml-72 w-full flex items-center justify-between mt-2"
      >
        <div
          style={{ width: "75%" }}
          className="border border-slate-400 rounded-lg mt-2 flex flex-row items-center justify-start py-2"
        >
          <SearchIcon size={28} />
          <input className="w-full" placeholder="Search" />
        </div>
        <div className="flex flex-row space-x-2 items-center justify-center ">
          <div className="p-1 border border-slate-300 rounded-lg items-center justify-center">
            <CommentIcon size={22} />
          </div>
          <div className="p-1 border border-slate-300 rounded-lg items-center justify-center">
            <BellIcon size={22} />
          </div>
        </div>
        <div className="flex flex-row items-center space-x-2 border border-slate-400 rounded-lg px-2">
          <div className="p-2 rounded-full bg-amber-300">
            <PersonIcon size={22} />
          </div>
          <div>
            <p className="font-medium">Jhon Lever</p>
            <p>UI Designer</p>
          </div>
        </div>
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default Layout;
