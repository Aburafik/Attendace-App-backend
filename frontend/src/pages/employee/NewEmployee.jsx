import React from "react";

const NewEmployee = () => {
  return (
    <div className="flex justify-center items-center mt-2">
      <div className="flex flex-col space-y-4 items-center border-l-2 border-blue-400 rounded-xl bg-slate-100 p-10 px-16">
        <h1 className="font-semibold text-lg">create new employee</h1>
        <div className="justify-start">
          <h1>first name</h1>
          <div className="p-2 px-4 rounded-lg border-b-2 bg-white border-blue-500">
            <input
              style={{ width: "260px" }}
              type="text"
              placeholder="Empoyee first name"
            />
          </div>
        </div>
        <div className="Justify-start mt-1">
          <h1>last name</h1>
          <div className="p-2 px-4 rounded-lg border-b-2 bg-white border-blue-500">
            <input
              style={{ width: "260px" }}
              type="text"
              placeholder="Empoyee last name"
            />
          </div>
        </div>
        <div className="justify-start mt-1">
          <h1>Email</h1>
          <div className="p-2 px-4 rounded-lg border-b-2 bg-white border-blue-500">
            <input
              style={{ width: "260px" }}
              type="email"
              placeholder="example@gmail.com"
            />
          </div>
        </div>
        <div className="justify-start mt-1">
          <h1>employee ID</h1>
          <div className="p-2 px-4 rounded-lg border-b-2 bg-white border-blue-500">
            <input
              style={{ width: "260px" }}
              type="text"
              placeholder="Employee ID"
            />
          </div>
        </div>
        <div className="justify-start mt-1">
          <h1>Password</h1>
          <div className="p-2 px-4 rounded-lg border-b-2 bg-white border-blue-500">
            <input
              style={{ width: "260px" }}
              type="password"
              placeholder="Temporal password"
            />
          </div>
        </div>
        <div>
          <button className="bg-blue-500 p-2 px-10 rounded-3xl text-white font-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewEmployee;
