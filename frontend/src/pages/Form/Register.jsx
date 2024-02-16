import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Register1 from "./Register1";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    staffId: "",
  });

  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/submit", { state: { form } });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="form">
      <form>
        <input
          name="name"
          type="text"
          placeholder="Enter your name"
          className="Input"
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="Input"
          onChange={handleChange}
        />
        <input
          name="staffId"
          type="text"
          placeholder="Enter your staff Id"
          className="Input"
          onChange={handleChange}
        />
        {/* <input name='sex' type='checkbox' placeholder='Date of Birth' /> */}
        <button className="next-btn" onClick={handleClick}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Register;
