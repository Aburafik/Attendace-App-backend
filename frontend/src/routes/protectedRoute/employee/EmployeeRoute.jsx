import React from "react";
import { Routes, Route } from "react-router-dom";
import Empolyees from "../../../pages/employee/Empolyees";
import NewEmployee from "../../../pages/employee/NewEmployee";
import ReportDetails from "../../../pages/employee/ReportDetails";

const EmployeeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Empolyees />} />
      <Route path="/new" element={<NewEmployee />} />
      <Route path="/employees/:id" element={<ReportDetails />} />
    </Routes>
  );
};

export default EmployeeRoute;
