import React, { useEffect } from "react";
import "../styles/Dashboard.css";
import "semantic-ui-less/semantic.less";
import { Button, Icon } from "semantic-ui-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Nav from "../components/navigationbar/Nav";

const Dashboard = () => {
  const buttonRef = useRef();
  const User = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!User) {
  //     navigate("/login");
  //   }
  // });
  return (
    <div className="dash">
      {/**navigation bar */}
      <Nav />
    </div>
  );
};

export default Dashboard;
