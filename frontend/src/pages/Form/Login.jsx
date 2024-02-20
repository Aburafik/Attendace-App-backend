import "./Login.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserAsync } from "../../features/auth/authService";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [loading, setIsLoading] = useState(false);
  const [forgotpsd, setForgotpsd] = useState("");
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(loginUserAsync(form));
  };

  useEffect(() => {
    if (isAuthenticated) {
      const timeout = setTimeout(() => {
        navigate("/");
      });

      return () => clearTimeout(timeout);
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  if (loading) {
    return <p>loading</p>;
  }
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
          Sign-Up
        </p>
        <div className="forgot-pasd">{forgotpsd}</div>
      </div>
    </div>
  );
};

export default Login;
