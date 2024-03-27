import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../components/employee/Dashboard";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const ReportDetails = () => {
  const employees = useSelector((state) => state.employees.employees);
  const navigate = useNavigate();

  return (
    <div className="flex justify-start items-center ml-4">
      <Element name="ScrollableSection">
        <Dashboard />
      </Element>
    </div>
  );
};

export default ReportDetails;
