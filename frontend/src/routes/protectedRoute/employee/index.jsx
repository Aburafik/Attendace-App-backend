import { Routes, Route } from "react-router-dom";
import Empolyees from "../../../pages/employee/Empolyees";
import NewEmployee from "../../../pages/employee/NewEmployee";

const EmployeeRoute = () => {
  return (
    <Routes>
      <Route path="/employees" element={<Empolyees />} />
      <Route path="/employees/new" element={<NewEmployee />} />
    </Routes>
  );
};

export default EmployeeRoute;
