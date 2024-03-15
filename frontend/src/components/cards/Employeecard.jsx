import React from "react";
import { PersonIcon } from "@primer/octicons-react";

const Employeecard = ({ employee, navigate, route }) => (
  <div className="flex flex-col items-center justify-between p-4 border-b border-gray-300 bg-amber-50">
    <div className="flex items-center space-x-4 flex-col">
      <div className=" p-6 items-center justify-center bg-slate-100 rounded-full">
      <PersonIcon size={33} />
      </div>
      <div>
        <p className="font-semibold text-2xl">{employee.name}</p>
        <p className="tracking-widest tex-sanserif">{employee.role}</p>
      </div>
    </div>
    <div className="flex flex-col">
      <div>{employee.department}</div>
      <div className="flex flex-col space-y-2 items-center space-x-2">
        <p>{employee.email}</p>
        <p>Joined: 29-02-2023</p>
      </div>
    </div>
    <button
      onClick={() => navigate(route)}
      className="bg-slate-400 p-2 rounded-lg text-white"
    >
      View Details
    </button>
  </div>
);

export default Employeecard;
