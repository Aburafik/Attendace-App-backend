import React from "react";
import Nav from "../../components/navigationbar/Nav";
import History from "../../components/attendance/History";
import Header from "../../components/attendance/Header";

const AttendanceHistory = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col items-center">
        <Header />
      </div>
    </div>
  );
};

export default AttendanceHistory;
