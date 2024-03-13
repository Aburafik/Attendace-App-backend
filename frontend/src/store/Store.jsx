import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import EmployeeReducer from "../features/employee/Employeeslice";

export default configureStore({
  reducer: {
    auth: authReducer,
    employees: EmployeeReducer,
  },
});
