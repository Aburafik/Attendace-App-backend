import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Employeecard from "../../components/cards/Employeecard";
import { useNavigate } from "react-router-dom";
import { PlusCircleIcon } from "@primer/octicons-react";
import { fetchEmployees } from "../../features/slice/Employeeslice";
import { MutatingDots } from "react-loader-spinner";

const Employees = () => {
  const employees = useSelector((state) => state.employees.employees);
  const { isLoading } = useSelector((state) => state.employees);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div className="mx-auto py-4 mt-10">
      {isLoading ? (
        <div className="flex-1 items-center justify-center h-full">
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Employees;
