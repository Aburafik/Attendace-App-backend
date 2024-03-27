import React from "react";
import { Routes, Route } from "react-router-dom";
import Reports from "../../../pages/report/Reports";
import Details from "../../../pages/report/Details";
import NewReport from "../../../pages/report/NewReport";

const ReportRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Reports />} />
      <Route path="/edit-report" element={<Details />} />
      <Route path="/new-report" element={<NewReport />} />
    </Routes>
  );
};

export default ReportRouter;
