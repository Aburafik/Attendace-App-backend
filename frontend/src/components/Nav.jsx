import React, { useRef } from "react";
// import { Button, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import {
  PeopleIcon,
  GraphIcon,
  LogIcon,
  NoteIcon,
  ChecklistIcon,
} from "@primer/octicons-react";
import "../styles/Navbar.css";

const Nav = () => {
  const buttonRef = useRef();
  const navigate = useNavigate();

  return (
    <div
      style={{ height: "599px" }}
      className="flex justify-end relative flex-col bg-slate-100"
    >
      <div style={{ marginTop: "10rem", possition: "sticky" }}>
        <div
          onClick={() => navigate("/task")}
          ref={buttonRef}
          className="bg-blue-200 justify-start items-start space-x-12 p-3 flex-row"
        >
          {" "}
          <NoteIcon size={24} />
          <span className="text-xl">Task</span>
        </div>
        <div
          onClick={() => navigate("/report")}
          ref={buttonRef}
          className="bg-blue-200 justify-start items-start mt-1 space-x-12 p-3 flex-row"
        >
          {" "}
          <ChecklistIcon size={24} />
          <span className="text-xl">Reports</span>
        </div>
        <div
          onClick={() => navigate("/employees")}
          ref={buttonRef}
          className="bg-blue-200 justify-start items-start mt-1 space-x-12 p-3 flex-row"
        >
          {" "}
          <PeopleIcon size={24} />
          <span className="text-xl">Employees</span>
        </div>
        <div
          onClick={() => navigate("/attendance")}
          ref={buttonRef}
          className="bg-blue-200 justify-start items-start mt-1 space-x-12 p-3 flex-row"
        >
          <LogIcon size={24} />
          <span className="text-xl">Attendance</span>
        </div>
        <div
          onClick={() => navigate("/leave")}
          ref={buttonRef}
          className="bg-blue-200 justify-start items-start mt-1 space-x-12 p-3 flex-row"
        >
          <GraphIcon size={24} />
          <span className="text-xl">Leave management</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
