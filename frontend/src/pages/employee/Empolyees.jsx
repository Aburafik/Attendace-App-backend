import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Employeecard from "../../components/cards/Employeecard";
import { useNavigate } from "react-router-dom";
import { PlusCircleIcon } from "@primer/octicons-react";
import { fetchEmployees } from "../../features/slice/Employeeslice";

const Employees = () => {
  const employees = useSelector((state) => state.employees.employees);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div className="container mx-auto py-4 mt-10">
      {employees.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {employees.map((employee) => (
              <Employeecard
                key={employee._id}
                employee={employee}
                navigate={navigate}
                route="employee-info"
              />
            ))}
          </div>
          <button
            onClick={() => navigate("/new")}
            className="bg-blue-300 rounded-xl p-2 mt-4"
          >
            <PlusCircleIcon size={24} className="mr-2" />
            New Employee
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-56">
          {" "}
          <p>failed to load data, check your internet connection</p>
        </div>
      )}
    </div>
  );
};

export default Employees;
