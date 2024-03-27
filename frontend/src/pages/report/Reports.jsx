import React from "react";
import Nav from "../../components/navigationbar/Nav";
import { useNavigate } from "react-router-dom";
import { PlusCircleIcon, PencilIcon, TrashIcon } from "@primer/octicons-react";

const Reports = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row space-x-4 justify-between relative">
      <div className="flex flex-col">
        <div
          style={{ maxWidth: "60vw", maxheight: "auto" }}
          className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 mt-2"
        >
          <h1 className="font-semibold text-xl bg-blue-200">
            Title
          </h1>
          <p>
            Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti quo rerum nesciunt porro magni praesentium sit optio nisi,
            dolorum molestias veritatis voluptatum quos repellat incidunt
            voluptatibus libero distinctio rem sequi.
          </p>
          <div className="flex justify-end p-2 space-x-4">
            <button className="flex flex-row space-x-1 justify-center items-start">
              <TrashIcon size={24} />
              <p>Delete</p>
            </button>
            <button
              onClick={() => navigate("edit-report")}
              className="flex flex-row space-x-1 justify-center items-start"
            >
              <PencilIcon size={24} />
              <p>Edit</p>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-2 sticky">
        <button
          className="bg-teal-300 px-7 py-2 rounded-xl items-center"
          onClick={() => navigate("new-report")}
        >
          <PlusCircleIcon size={24} className="mr-2" />
          New
        </button>
      </div>
    </div>
  );
};

export default Reports;
