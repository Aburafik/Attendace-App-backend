import { Routes, Route } from "react-router-dom";
import Home from "../../../pages/Dashboard";
import Attendance from "../../../pages/attendance/Attendance";

const DashboardRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Attendance />} />
    </Routes>
  );
};

export default DashboardRoute;
