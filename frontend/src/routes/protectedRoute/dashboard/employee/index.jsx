import { Routes, Route } from "react-router-dom";
import Empolyees from "../../../../pages/employee/Empolyees";
import NewEmployee from "../../../../pages/employee/NewEmployee";
import ReportDetails from "../../../../pages/employee/ReportDetails";

const EmployeeRoute = () => {
  return (
    <Routes>
      <Route path="/employees" element={<Empolyees />} />
      <Route path="/new" Component={NewEmployee} />
      <Route path="/em-report" Component={ReportDetails} />
    </Routes>
  );
};

export default EmployeeRoute;
