import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import profile from "../../pages/profile";
import Attendance from "../../pages/Attendance";
import LeaveManagement from "../../pages/LeaveManagement";
import Reports from "../../pages/Reports";
import Task from "../../pages/Task";
import EmployeeRoute from "./employee";

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<profile />} />
      <Route path="/task" element={<Task />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/*" element={<EmployeeRoute />} />
      <Route path="/leave" element={<LeaveManagement />} />
      <Route path="/report" element={<Reports />} />
    </Routes>
  );
};
