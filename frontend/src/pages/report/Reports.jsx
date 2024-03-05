import React from "react";
import Nav from "../../components/Nav";
import { Routes, Route } from "react-router-dom";
import NewReport from "./NewReport";
import { useNavigate } from "react-router-dom";
import Reportcard from "../../components/cards/Reportcard";
import { PlusCircleIcon } from "@primer/octicons-react";

const Reports = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row space-x-10">
      <Nav />
      <div className="flex flex-col">
        <Reportcard />
        <Reportcard />
        <Reportcard />
        <Reportcard />
        <Reportcard />
        <Reportcard />
        <Reportcard />
      </div>
      <div className="mt-2 sticky">
        <button
          className="bg-teal-300 px-7 py-2 rounded-xl items-center"
          onClick={() => navigate("/newReport")}
        >
          <PlusCircleIcon size={24} className="mr-2" />
          New
        </button>
      </div>
    </div>
  );
};

export default Reports;
