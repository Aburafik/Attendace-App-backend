import React, { useState, useRef } from "react";
import { CheckboxIcon, ProjectRoadmapIcon } from "@primer/octicons-react";
import Completedtask from "./summary/Completedtask";
import Ongoingtask from "./summary/Ongoingtask";
import ReportDetails from "./../../pages/employee/Employeedetails";
import Reportssummary from "./summary/Reportssummary";

const Dashboard = () => {
  const [details, setDetails] = useState(null);
  const taskCompleted = <Completedtask />;
  const pendingTasxk = <Ongoingtask />;
  const reports = <Reportssummary />;
  return (
    <div className="flex flex-row">
      <div>
        <h1 className="text-2xl font-bold mb-1">Task Summary</h1>
        <div className="flex flex-row space-x-8">
          <div className="flex flex-col items-center space-y-5 bg-teal-100 p-4 px-10">
            <div className="flex flex-row items-center space-x-2">
              <CheckboxIcon size={33} />
              <h1 className="text-lg">Completed Tasks</h1>
            </div>
            <h1 className="text-5xl font-bold text-blue-500">20</h1>
            <button
              onClick={() => setDetails(taskCompleted)}
              className="bg-slate-400 p-1 text-white px-16 border border-slate-600"
            >
              view
            </button>
          </div>
          <div className="flex flex-col items-center space-y-5 bg-orange-200 p-4 px-10">
            <div className="flex flex-row items-center space-x-2">
              <ProjectRoadmapIcon size={33} />
              <h1 className="text-lg">Pending Task</h1>
            </div>
            <h1 className="text-5xl font-bold text-blue-500">4</h1>
            <button
              onClick={() => setDetails(pendingTasxk)}
              className="bg-slate-400 p-1 text-white px-16 border border-slate-600"
            >
              view
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center bg-slate-100 justify-center p-4 px-10 space-y-5 mt-10">
          <h1 className="text-2xl font-bold mb-4">Reports</h1>
          <div className="flex flex-row items-center space-x-2">
            <h1 className="text-lg">Total</h1>
          </div>
          <h1 className="text-5xl font-bold text-blue-500">8</h1>
          <button
            onClick={() => setDetails(reports)}
            className="bg-slate-400 p-1 text-white px-16 border border-slate-600"
          >
            view
          </button>
        </div>
      </div>
      <div className="max-w-lg ml-5 flex flex-col">{details}</div>
    </div>
  );
};

export default Dashboard;
