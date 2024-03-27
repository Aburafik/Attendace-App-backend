import React from "react";
import { Routes, Route } from "react-router-dom";
import Task from "../../../pages/task/Task";

const TaskRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Task />} />
    </Routes>
  );
};

export default TaskRouter;
