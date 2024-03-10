import React from "react";
import Nav from "../../components/navigationbar/Nav";
import Reportcard from "../../components/cards/Reportcard";

const ReportDetails = () => {
  return (
    <div className="flex flex-row space-x-20">
      <Nav />
      <div className="flex flex-col">
        <Reportcard />
        <Reportcard />
        <Reportcard />
        <Reportcard />
        <Reportcard />
      </div>
    </div>
  );
};

export default ReportDetails;
