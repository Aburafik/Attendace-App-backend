import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import profile from "../../pages/profile";
import Attendance from "../../pages/attendance/Attendance";
import LeaveManagement from "../../pages/leave/LeaveManagement";
import Reports from "../../pages/report/Reports";
import Task from "../../pages/Task";
import EmployeeRoute from "./dashboard/employee";
import NewReport from "../../pages/report/NewReport";
import AttendanceHistory from "../../pages/attendance/AttendanceHistory";
import ReportDetails from "../../pages/employee/ReportDetails";

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
      <Route path="/newReport" Component={NewReport} />
      <Route path="/history" Component={AttendanceHistory} />{" "}
    </Routes>
  );
};
