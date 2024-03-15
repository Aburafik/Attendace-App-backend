import React from "react";
import { Routes, Route } from "react-router-dom";
import Empolyees from "../../../pages/employee/Empolyees";
import NewEmployee from "../../../pages/employee/NewEmployee";
import ReportDetails from "../../../pages/employee/Employeedetails";

const EmployeeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Empolyees />} />
      <Route path="/new" element={<NewEmployee />} />
      <Route path="/employee-info" element={<ReportDetails />} />
    </Routes>
  );
};

export default EmployeeRoute;
