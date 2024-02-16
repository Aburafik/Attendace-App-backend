import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAuthService } from "./auth/AuthService";

const Login = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const token = loginAuthService(form);

      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
      } else {
        throw new Error("Token not recieved");
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="login-Form">
      <h1>Login</h1>
      <input
        name="email"
        type="text"
        className="text-Input "
        placeholder="Enter your email address"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        className="text-Input "
        placeholder="Enter your password"
        onChange={handleChange}
      />
      <button onClick={handleSubmit} className="login-btn">
        Login
      </button>
      <div className="txt">
        <p>Don't have an Account?</p>
        <p onClick={handleClick} className="s-p">
          SignUp
        </p>
      </div>
    </div>
  );
};

export default Login;
