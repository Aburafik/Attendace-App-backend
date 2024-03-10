import React from "react";
import { Routes, Route } from "react-router-dom";
import LeaveManagement from "../../../pages/leave/LeaveManagement";
import LeaveDetails from "../../../pages/leave/LeaveDetails";

const LeaveRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LeaveManagement />} />
      <Route path="/leave-info" element={<LeaveDetails />} />
    </Routes>
  );
};

export default LeaveRouter;
