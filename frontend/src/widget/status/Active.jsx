import React from "react";

const Active = ({ isActive, color }) => {
  return (
    <div>
      <p className={`rounded-2xl bg-${color}-200 p-1 border border-${color}-600 px-3 justify-center items-center flex`}>
        {isActive}
      </p>
    </div>
  );
};

export default Active;
