import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../pages/Form/Login";
import Register from "../../pages/Form/Register";
import Register1 from "../../pages/Form/Register1";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthenticationRoute = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("login");
  // }, []);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/submit" element={<Register1 />} />
      </Routes>
    </div>
  );
};

export default AuthenticationRoute;
