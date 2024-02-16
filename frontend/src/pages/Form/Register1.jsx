import React, { useState } from "react";
import "./Register.css";
import { useLocation, useNavigate } from "react-router-dom";
import PasswordCheck from "./passwordFeatures/PasswordCheck";
import AuthService from "./auth/AuthService";
import { Ellipsis } from "react-awesome-spinners";
export default function Register1() {
  const location = useLocation();
  const navigate = useNavigate();
  // const prevFom = location.state.form;

  const [isValidLength, setIsValidLength] = useState(false);
  const prevForm = location.state
    ? location.state.form
    : { name: "", email: "", staffId: "" };
  const [hasUpperAndLower, setHasUpperAndLower] = useState(false);
  const [hasAnumber, setHasAnumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: prevForm.name,
    email: prevForm.email,
    staffId: prevForm.staffId,
    password: "",
    role: "admin",
    password1: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const input = value;

    const checker = new PasswordCheck();
    checker.add(input);

    setIsValidLength(checker.isEightOrMore());
    setHasUpperAndLower(checker.containsUpperAndLower());
    setHasAnumber(checker.constainsAnumber());
    setSpecialChar(checker.containsAspecialChar());

    // Update the form state based on the input field name
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Check if the passwords match
    if (name === "password1") {
      setPasswordMatch(value === form.password);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (isValidLength && hasAnumber && hasUpperAndLower && specialChar) {
      try {
        const token = await AuthService(form);

        if (token) {
          localStorage.setItem("token", token);
          navigate("/");
        } else {
          throw new Error("Token not received. Please try again.");
        }
      } catch (error) {
        console.error("Authentication error:", error);
        // Handle error feedback to the user
        navigate("/login");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="spinner">
        <Ellipsis />;
      </div>
    );
  }

  return (
    <form className="Form">
      <h1>Create a password</h1>
      <input
        name="password"
        type="password"
        placeholder="create a password"
        className="Input-R1"
        required
        onChange={handleChange}
      />
      <input
        name="password1"
        type="password"
        placeholder="confirm password"
        className="Input-R1"
      />
      <ul className="password-Check">
        <li className={isValidLength ? "pass-text" : "wrong-text"}>
          Password must be at least 8 characters
        </li>
        <li className={hasUpperAndLower ? "pass-text" : "wrong-text"}>
          Password must contain an uppercase a lowercase letter
        </li>
        <li className={hasAnumber ? "pass-text" : "wrong-text"}>
          Password must contain a number
        </li>
        <li className={specialChar ? "pass-text" : "wrong-text"}>
          Must contain a special case character e.g(@.$.#.%...)
        </li>
      </ul>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
