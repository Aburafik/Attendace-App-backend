import React from "react";

const NewReport = () => {
  return (
    <div className="flex justify-center items-center">
      {/**form */}
      <div className="flex items-center justify-center flex-col bg-slate-100 mt-5 rounded-lg">
        <h1 className="font-medium">WEEKLY REPORT</h1>
        {/**inputs */}
        <div className="p-2 flex flex-col justify-center items-center space-y-4">
          {/**date */}
          <div className="flex flex-row space-x-2 items-center justify-center relative">
            <div classaName="flex flex-col items-center p-1 justify-center">
              <h1 className="font-semibold">from</h1>
              <input
                className="rounded-sm border border-zinc-300"
                type="date"
              />
            </div>
            <div className="flex flex-col items-start p-1 justify-center">
              <h1 className="font-semibold">to</h1>
              <input
                className="rounded-sm border border-zinc-300"
                type="date"
              />
            </div>
          </div>

          <input
            style={{ width: "40vw" }}
            className=" p-2 rounded-lg border border-zinc-300"
            type="text"
            placeholder="Heading"
          />

          <textarea
            style={{ width: "40vw" }}
            className=" p-2 rounded-lg border border-zinc-300"
            type="text"
            placeholder="Overview"
          />
          <textarea
            style={{ width: "40vw", height: "40vh" }}
            className=" p-2 rounded-lg border border-zinc-300"
            type="text"
            placeholder="Report Details"
          />
          <button className="p-2 px-20 text-white rounded-lg bg-zinc-400">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewReport;
