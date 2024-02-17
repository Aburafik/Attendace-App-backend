import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
    if (form.email.length < 5 || form.name < 5 || form.staffId < 5) {
      window.alert("Please enter all fields");
      navigate(0);
    } else {
      navigate("/submit", { state: { form } });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="Form">
      <form>
        <h1>Sign Up</h1>
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
