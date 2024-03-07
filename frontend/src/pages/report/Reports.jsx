import React from "react";
import Nav from "../../components/Nav";
import { Routes, Route } from "react-router-dom";
import NewReport from "./NewReport";
import { useNavigate } from "react-router-dom";
import { PlusCircleIcon, PencilIcon, TrashIcon } from "@primer/octicons-react";

const Reports = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row space-x-10">
      <Nav />
      <div className="flex flex-col">
        <div
          style={{ maxWidth: "60vw", maxheight: "auto" }}
          className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 rounded-xl mt-2"
        >
          <h1 className="font-semibold text-xl bg-blue-200 rounded-t-xl">
            Title
          </h1>
          <p>
            Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti quo rerum nesciunt porro magni praesentium sit optio nisi,
            dolorum molestias veritatis voluptatum quos repellat incidunt
            voluptatibus libero distinctio rem sequi.
          </p>
          <div className="flex justify-end p-2 space-x-4">
            <TrashIcon size={24} />
            <PencilIcon size={24} />
          </div>
        </div>
        <div
          style={{ maxWidth: "60vw", maxheight: "auto" }}
          className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 rounded-xl mt-2"
        >
          <h1 className="font-semibold text-xl bg-blue-200 rounded-t-xl">
            Title
          </h1>
          <p>
            Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti quo rerum nesciunt porro magni praesentium sit optio nisi,
            dolorum molestias veritatis voluptatum quos repellat incidunt
            voluptatibus libero distinctio rem sequi.
          </p>
          <div className="flex justify-end p-2 space-x-4">
            <TrashIcon size={24} />
            <div onClick={() => navigate("/edit")} className="bg-slate-400">
              {" "}
              <PencilIcon size={24} />
            </div>
          </div>
        </div>
        <div
          style={{ maxWidth: "60vw", maxheight: "auto" }}
          className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 rounded-xl mt-2"
        >
          <h1 className="font-semibold text-xl bg-blue-200 rounded-t-xl">
            Title
          </h1>
          <p>
            Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti quo rerum nesciunt porro magni praesentium sit optio nisi,
            dolorum molestias veritatis voluptatum quos repellat incidunt
            voluptatibus libero distinctio rem sequi.
          </p>
          <div className="flex justify-end p-2 space-x-4">
            <TrashIcon size={24} />
            <PencilIcon size={24} />
          </div>
        </div>
        <div
          style={{ maxWidth: "60vw", maxheight: "auto" }}
          className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 rounded-xl mt-2"
        >
          <h1 className="font-semibold text-xl bg-blue-200 rounded-t-xl">
            Title
          </h1>
          <p>
            Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti quo rerum nesciunt porro magni praesentium sit optio nisi,
            dolorum molestias veritatis voluptatum quos repellat incidunt
            voluptatibus libero distinctio rem sequi.
          </p>
          <div className="flex justify-end p-2 space-x-4">
            <TrashIcon size={24} />
            <PencilIcon size={24} />
          </div>
        </div>
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
