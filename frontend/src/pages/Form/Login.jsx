import "./Login.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUserAsync } from "../../features/auth/authService";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { MailIcon, LockIcon } from "@primer/octicons-react";

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
    <div className="login-Form p-3">
      <h1 className="font-bold text-xl">Login</h1>
      <div className="flex flex-col justify-center items-center">
        <div className="justify-center items-start flex flex-col mt-5">
          <p className="text-xl font-bold">Email</p>
          <div className="space-x-4 border-2 justify-center items-center mt-2 rounded-full py-3 px-2 flex flex-row border-gray-900">
            <MailIcon size={24} />
            <input
              name="email"
              type="text"
              className="text-Input "
              placeholder="Enter your email address"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="justify-center items-start flex flex-col mt-5">
          <p className="text-xl font-bold">Password</p>
          <div
            className="space-x-4 
                        py-3
                        px-2
                        border-2 
                        justify-center 
                        items-center 
                        mt-2 rounded-full 
                        flex flex-row 
                        border-gray-900"
          >
            <LockIcon size={24} />
            <input
              name="password"
              type="password"
              className="text-Input "
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
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
