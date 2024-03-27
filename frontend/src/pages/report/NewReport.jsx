import React from "react";
import TextForms from "../../widget/TextForms";

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
          <TextForms />
          <button className="p-2 px-20 text-white rounded-lg bg-zinc-400">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewReport;
