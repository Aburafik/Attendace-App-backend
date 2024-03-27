import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import EmployeeReducer from "../features/slice/Employeeslice";
import AttendanceReducer from "../features/slice/AttendanceSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    employees: EmployeeReducer,
    attendance: AttendanceReducer,
  },
});
