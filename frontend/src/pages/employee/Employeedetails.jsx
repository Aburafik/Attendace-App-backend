import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../components/employee/Dashboard";

const ReportDetails = () => {
  const employees = useSelector((state) => state.employees.employees);
  const navigate = useNavigate();

  return (
    <div className="flex justify-start">
      <div className="flex flex-col items-center">
        <div className="user-profile">
          User Profile
        </div>
        <div className="dashboard-container">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;
