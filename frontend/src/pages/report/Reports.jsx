import React from "react";
import Nav from "../../components/navigationbar/Nav";
import { useNavigate } from "react-router-dom";
import { PlusCircleIcon, PencilIcon, TrashIcon } from "@primer/octicons-react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Reports = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row space-x-4 justify-around relative">
      <div className="flex flex-col">
        <Element name="ScrollableSection">
          <div
            style={{ maxWidth: "60vw", maxHeight: "auto" }}
            className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 mt-2"
          >
            <h1 className="font-semibold text-xl bg-blue-200 p-3">Title</h1>
            <p className="px-3 py-2 prose prose-sm text-gray-700">
              Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti quo rerum nesciunt porro magni praesentium sit optio
              nisi, dolorum molestias veritatis voluptatum quos repellat
              incidunt voluptatibus libero distinctio rem sequi.
            </p>
            <div className="flex justify-end p-4 space-x-4">
              <button className="flex flex-row space-x-1 justify-center items-start">
                <TrashIcon size={24} className="text-red-500" />
                <p className="text-red-500">Delete</p>
              </button>
              <button
                onClick={() => navigate("edit-report")}
                className="flex flex-row space-x-1 justify-center items-start"
              >
                <PencilIcon size={24} className="text-gray-500" />
                <p className="text-gray-500">Edit</p>
              </button>
            </div>
          </div>
          <div
            style={{ maxWidth: "60vw", maxHeight: "auto" }}
            className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 mt-2"
          >
            <h1 className="font-semibold text-xl bg-blue-200 p-3">Title</h1>
            <p className="px-3 py-2 prose prose-sm text-gray-700">
              Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti quo rerum nesciunt porro magni praesentium sit optio
              nisi, dolorum molestias veritatis voluptatum quos repellat
              incidunt voluptatibus libero distinctio rem sequi.
            </p>
            <div className="flex justify-end p-4 space-x-4">
              <button className="flex flex-row space-x-1 justify-center items-start">
                <TrashIcon size={24} className="text-red-500" />
                <p className="text-red-500">Delete</p>
              </button>
              <button
                onClick={() => navigate("edit-report")}
                className="flex flex-row space-x-1 justify-center items-start"
              >
                <PencilIcon size={24} className="text-gray-500" />
                <p className="text-gray-500">Edit</p>
              </button>
            </div>
          </div>
          <div
            style={{ maxWidth: "60vw", maxHeight: "auto" }}
            className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 mt-2"
          >
            <h1 className="font-semibold text-xl bg-blue-200 p-3">Title</h1>
            <p className="px-3 py-2 prose prose-sm text-gray-700">
              Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti quo rerum nesciunt porro magni praesentium sit optio
              nisi, dolorum molestias veritatis voluptatum quos repellat
              incidunt voluptatibus libero distinctio rem sequi.
            </p>
            <div className="flex justify-end p-4 space-x-4">
              <button className="flex flex-row space-x-1 justify-center items-start">
                <TrashIcon size={24} className="text-red-500" />
                <p className="text-red-500">Delete</p>
              </button>
              <button
                onClick={() => navigate("edit-report")}
                className="flex flex-row space-x-1 justify-center items-start"
              >
                <PencilIcon size={24} className="text-gray-500" />
                <p className="text-gray-500">Edit</p>
              </button>
            </div>
          </div>
        </Element>
        <div
          style={{ maxWidth: "60vw", maxHeight: "auto" }}
          className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 mt-2"
        >
          <h1 className="font-semibold text-xl bg-blue-200 p-3">Title</h1>
          <p className="px-3 py-2 prose prose-sm text-gray-700">
            Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti quo rerum nesciunt porro magni praesentium sit optio nisi,
            dolorum molestias veritatis voluptatum quos repellat incidunt
            voluptatibus libero distinctio rem sequi.
          </p>
          <div className="flex justify-end p-4 space-x-4">
            <button className="flex flex-row space-x-1 justify-center items-start">
              <TrashIcon size={24} className="text-red-500" />
              <p className="text-red-500">Delete</p>
            </button>
            <button
              onClick={() => navigate("edit-report")}
              className="flex flex-row space-x-1 justify-center items-start"
            >
              <PencilIcon size={24} className="text-gray-500" />
              <p className="text-gray-500">Edit</p>
            </button>
          </div>
        </div>
        <div
          style={{ maxWidth: "60vw", maxHeight: "auto" }}
          className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 mt-2"
        >
          <h1 className="font-semibold text-xl bg-blue-200 p-3">Title</h1>
          <p className="px-3 py-2 prose prose-sm text-gray-700">
            Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti quo rerum nesciunt porro magni praesentium sit optio nisi,
            dolorum molestias veritatis voluptatum quos repellat incidunt
            voluptatibus libero distinctio rem sequi.
          </p>
          <div className="flex justify-end p-4 space-x-4">
            <button className="flex flex-row space-x-1 justify-center items-start">
              <TrashIcon size={24} className="text-red-500" />
              <p className="text-red-500">Delete</p>
            </button>
            <button
              onClick={() => navigate("edit-report")}
              className="flex flex-row space-x-1 justify-center items-start"
            >
              <PencilIcon size={24} className="text-gray-500" />
              <p className="text-gray-500">Edit</p>
            </button>
          </div>
        </div>
        <div
          style={{ maxWidth: "60vw", maxHeight: "auto" }}
          className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 mt-2"
        >
          <h1 className="font-semibold text-xl bg-blue-200 p-3">Title</h1>
          <p className="px-3 py-2 prose prose-sm text-gray-700">
            Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti quo rerum nesciunt porro magni praesentium sit optio nisi,
            dolorum molestias veritatis voluptatum quos repellat incidunt
            voluptatibus libero distinctio rem sequi.
          </p>
          <div className="flex justify-end p-4 space-x-4">
            <button className="flex flex-row space-x-1 justify-center items-start">
              <TrashIcon size={24} className="text-red-500" />
              <p className="text-red-500">Delete</p>
            </button>
            <button
              onClick={() => navigate("edit-report")}
              className="flex flex-row space-x-1 justify-center items-start"
            >
              <PencilIcon size={24} className="text-gray-500" />
              <p className="text-gray-500">Edit</p>
            </button>
          </div>
        </div>
        <div
          style={{ maxWidth: "60vw", maxHeight: "auto" }}
          className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 mt-2"
        >
          <h1 className="font-semibold text-xl bg-blue-200 p-3">Title</h1>
          <p className="px-3 py-2 prose prose-sm text-gray-700">
            Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti quo rerum nesciunt porro magni praesentium sit optio nisi,
            dolorum molestias veritatis voluptatum quos repellat incidunt
            voluptatibus libero distinctio rem sequi.
          </p>
          <div className="flex justify-end p-4 space-x-4">
            <button className="flex flex-row space-x-1 justify-center items-start">
              <TrashIcon size={24} className="text-red-500" />
              <p className="text-red-500">Delete</p>
            </button>
            <button
              onClick={() => navigate("edit-report")}
              className="flex flex-row space-x-1 justify-center items-start"
            >
              <PencilIcon size={24} className="text-gray-500" />
              <p className="text-gray-500">Edit</p>
            </button>
          </div>
        </div>
        <div
          style={{ maxWidth: "60vw", maxHeight: "auto" }}
          className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 mt-2"
        >
          <h1 className="font-semibold text-xl bg-blue-200 p-3">Title</h1>
          <p className="px-3 py-2 prose prose-sm text-gray-700">
            Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti quo rerum nesciunt porro magni praesentium sit optio nisi,
            dolorum molestias veritatis voluptatum quos repellat incidunt
            voluptatibus libero distinctio rem sequi.
          </p>
          <div className="flex justify-end p-4 space-x-4">
            <button className="flex flex-row space-x-1 justify-center items-start">
              <TrashIcon size={24} className="text-red-500" />
              <p className="text-red-500">Delete</p>
            </button>
            <button
              onClick={() => navigate("edit-report")}
              className="flex flex-row space-x-1 justify-center items-start"
            >
              <PencilIcon size={24} className="text-gray-500" />
              <p className="text-gray-500">Edit</p>
            </button>
          </div>
        </div>
        <div
          style={{ maxWidth: "60vw", maxHeight: "auto" }}
          className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 mt-2"
        >
          <h1 className="font-semibold text-xl bg-blue-200 p-3">Title</h1>
          <p className="px-3 py-2 prose prose-sm text-gray-700">
            Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti quo rerum nesciunt porro magni praesentium sit optio nisi,
            dolorum molestias veritatis voluptatum quos repellat incidunt
            voluptatibus libero distinctio rem sequi.
          </p>
          <div className="flex justify-end p-4 space-x-4">
            <button className="flex flex-row space-x-1 justify-center items-start">
              <TrashIcon size={24} className="text-red-500" />
              <p className="text-red-500">Delete</p>
            </button>
            <button
              onClick={() => navigate("edit-report")}
              className="flex flex-row space-x-1 justify-center items-start"
            >
              <PencilIcon size={24} className="text-gray-500" />
              <p className="text-gray-500">Edit</p>
            </button>
          </div>
        </div>
        <div
          style={{ maxWidth: "60vw", maxHeight: "auto" }}
          className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 mt-2"
        >
          <h1 className="font-semibold text-xl bg-blue-200 p-3">Title</h1>
          <p className="px-3 py-2 prose prose-sm text-gray-700">
            Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti quo rerum nesciunt porro magni praesentium sit optio nisi,
            dolorum molestias veritatis voluptatum quos repellat incidunt
            voluptatibus libero distinctio rem sequi.
          </p>
          <div className="flex justify-end p-4 space-x-4">
            <button className="flex flex-row space-x-1 justify-center items-start">
              <TrashIcon size={24} className="text-red-500" />
              <p className="text-red-500">Delete</p>
            </button>
            <button
              onClick={() => navigate("edit-report")}
              className="flex flex-row space-x-1 justify-center items-start"
            >
              <PencilIcon size={24} className="text-gray-500" />
              <p className="text-gray-500">Edit</p>
            </button>
          </div>
        </div>
        <div
          style={{ maxWidth: "60vw", maxHeight: "auto" }}
          className="flex-col space-y-2 bg-slate-50 border relative border-zinc-400 mt-2"
        >
          <h1 className="font-semibold text-xl bg-blue-200 p-3">Title</h1>
          <p className="px-3 py-2 prose prose-sm text-gray-700">
            Body Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti quo rerum nesciunt porro magni praesentium sit optio nisi,
            dolorum molestias veritatis voluptatum quos repellat incidunt
            voluptatibus libero distinctio rem sequi.
          </p>
          <div className="flex justify-end p-4 space-x-4">
            <button className="flex flex-row space-x-1 justify-center items-start">
              <TrashIcon size={24} className="text-red-500" />
              <p className="text-red-500">Delete</p>
            </button>
            <button
              onClick={() => navigate("edit-report")}
              className="flex flex-row space-x-1 justify-center items-start"
            >
              <PencilIcon size={24} className="text-gray-500" />
              <p className="text-gray-500">Edit</p>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-2 sticky">
        <button
          className="bg-blue-800 px-7 py-2 rounded-xl items-center"
          onClick={() => navigate("new-report")}
        >
          <PlusCircleIcon size={24} className="mr-2 text-white" />
          <p className="text-white">New</p>
        </button>
      </div>
    </div>
  );
};

export default Reports;
