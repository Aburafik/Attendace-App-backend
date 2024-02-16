import "./Login.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register");
  };
  return (
    <div className="login-Form">
      <h1>Login</h1>
      <input
        type="text"
        className="text-Input "
        placeholder="Enter your email address"
      />
      <input
        type="text"
        className="text-Input "
        placeholder="Enter your password"
      />
      <button className="login-btn">Login</button>
      <div className="txt">
        <p>Don't have an Accout?</p>
        <p onClick={handleClick} className="s-p">
          SignUp
        </p>
      </div>
    </div>
  );
};

export default Login;
