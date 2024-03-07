import React from "react";

const TextForms = () => {
  return (
    <>
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
    </>
  );
};

export default TextForms;
