import React, { useRef } from "react";
// import { Button, Icon } from "semantic-ui-react";
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
  return (
    <div>
      <nav className="navbar nav-div">
        <div style={{ marginTop: "10rem" }}>
          <div
            ref={buttonRef}
            style={{
              width: "100%",
              height: "10vh",
            }}
            className="bg-zinc-200 justify-start items-start p-2 flex-row"
          >
            {" "}
            <NoteIcon size={24} className="mr-7 mt-2" />
            <span className="text-xl ml-4 mr-28">Task</span>
          </div>
          <div
            ref={buttonRef}
            style={{
              width: "100%",
              height: "10vh",
              marginTop: ".2rem",
            }}
            className="bg-zinc-200 justify-center items-center p-2 flex-row"
          >
            {" "}
            <ChecklistIcon size={24} className="mr-7 mt-2" />
            <span className="text-xl mr-20 ml-4">Reports</span>
          </div>
          <div
            ref={buttonRef}
            style={{
              width: "100%",
              height: "10vh",
              marginTop: ".2rem",
            }}
            className="bg-zinc-200 justify-center items-center p-2 flex-row"
          >
            {" "}
            <PeopleIcon size={24} className="mr-7 mt-2" />
            <span className="text-xl mr-16 ml-4">Employees</span>
          </div>
          <div
            ref={buttonRef}
            style={{
              width: "100%",
              height: "10vh",
              marginTop: ".2rem",
            }}
            className="bg-zinc-200 justify-center items-center p-2 flex-row"
          >
            <LogIcon size={24} className="mr-5 mt-2" />
            <span className="text-xl mr-16 ml-4">Attendance</span>
          </div>
          <div
            ref={buttonRef}
            style={{
              width: "100%",
              height: "10vh",
              marginTop: ".2rem",
            }}
            className="bg-zinc-200 justify-center items-center p-2 flex-row"
          >
            <GraphIcon size={24} className="mr-5 mt-2" />
            <span className="text-xl">Leave management</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
