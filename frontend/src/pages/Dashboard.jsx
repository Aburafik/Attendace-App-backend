import React, { useEffect } from "react";
import "../styles/Dashboard.css";
import "semantic-ui-less/semantic.less";
import { Button, Icon } from "semantic-ui-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
      <nav className="navbar">
        <p style={{ backgroundColor: "black" }}>Nav</p>
        <div>
          <Button ref={buttonRef} />
        </div>
        <div>
          
        </div>
        <div>
          <p>Nav</p>
        </div>
        <div>
          <p>Nav</p>
        </div>
        <div>
          <p>Nav</p>
        </div>
        <div>
          <p>Nav</p>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
