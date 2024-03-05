import React from "react";

const Reportcard = () => {
  return (
    <div
      style={{ width: "60vw", height: "17vh" }}
      className="flex-col space-y-2 bg-slate-50 border border-zinc-400 rounded-xl mt-2"
    >
      <h1 className="font-semibold text-xl bg-orange-200 rounded-t-xl">
        Title
      </h1>
      <p>
        Body Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        quo rerum nesciunt porro magni praesentium sit optio nisi, dolorum
        molestias veritatis voluptatum quos repellat incidunt voluptatibus
        libero distinctio rem sequi.
      </p>
    </div>
  );
};

export default Reportcard;
