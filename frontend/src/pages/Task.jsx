import React from "react";
import Nav from "../components/Nav";

const Task = () => {
  return (
    <div className="flex flex-row relative space-x-20">
      <Nav />
      <div className="bg-black w-80">
        <p>Task</p>
      </div>
    </div>
  );
};

export default Task;
