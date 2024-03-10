import React from "react";
import { Routes, Route } from "react-router-dom";
import Attendance from "../../../pages/attendance/Attendance";
import AttendanceHistory from "../../../pages/attendance/AttendanceHistory";

const AttendanceRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Attendance />} />
        <Route path="/attendance-records" element={<AttendanceHistory />} />
      </Routes>
    </div>
  );
};

export default AttendanceRouter;
