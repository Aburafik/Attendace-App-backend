import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ProtectedRoutes } from "./protectedRoute";
import AuthenticationRoute from "./authRoute";
import React from "react";
import { useNavigate } from "react-router-dom";

const isAuthenticated = true;

export const AppRouters = () => {
  return isAuthenticated ? <ProtectedRoutes /> : <AuthenticationRoute />;
};

// const User = useSelector((state) => state.auth.user);
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

// useEffect(() => {
//   if (User) {
//     setIsAuthenticated(true);
//   }
//   isAuthenticated && navigate("/");
// }, [isAuthenticated, navigate]);
// return isAuthenticated ? <ProtectedRoutes /> : <AuthenticationRoute />;
// export default AppRouters
