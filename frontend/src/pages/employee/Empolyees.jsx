import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Usercard from "../../components/cards/Usercard";
import { useNavigate } from "react-router-dom";
import { PlusCircleIcon } from "@primer/octicons-react";
import {
  fetchEmployees,
  getEmployees,
} from "../../features/employee/Employeeslice";

const EmployeeCard = ({ employee, navigate }) => (
  <div className="flex flex-row">
    <div
      style={{ width: "55vw" }}
      className="flex flex-row justify-around items-center"
    >
      <div id={employee.id} className="p-7 bg-orange-500 rounded-full"></div>
      <div>
        <p>{employee.name}</p>
        <p>{employee.role}</p>
      </div>
      <div className="flex flex-row">
        <p>{employee.department}</p>
        <p>29-02-2023</p>
      </div>
    </div>
    <button
      onClick={() => navigate("report")}
      className="bg-slate-400 p-1 rounded-lg text-white"
    >
      View details
    </button>
  </div>
);

const Employees = () => {
  const employees = useSelector((state) => state.employees.employees);
  console.log(employees)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div className="flex space-x-4">
      <div className=" flex flex-col">
        <div className="flex flex-row justify-around ml-10">
          <p className="font-semibold tex-lg">Name</p>
          <p className="font-semibold text-lg">Department</p>
          <p className="font-semibold tex-lg">Date Joined</p>
          <p className="font-semibold tex-lg">Reports</p>
        </div>
        <div className="flex flex-col space-y-2 justify-between items-center mt-5">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              navigate={navigate}
            />
          ))}
        </div>
      </div>
      <div>
        <button
          onClick={() => navigate("/new")}
          className="bg-blue-300 rounded-xl p-2 mt-4"
        >
          <PlusCircleIcon size={24} className="mr-2" />
          New employee
        </button>
      </div>
    </div>
  );
};

export default Employees;
