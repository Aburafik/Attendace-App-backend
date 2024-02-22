import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProtectedRoutes from "./protectedRoute";
import AuthenticationRoute from "./authRoute";
import React from "react";

const AppRouters = () => {
    const User = useSelector((state) => state.auth.user);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        if(User){
            setIsAuthenticated(true);
        }
    },[User])
  return (
    isAuthenticated ? <ProtectedRoutes/> : <AuthenticationRoute />
  )
}

export default AppRouters
