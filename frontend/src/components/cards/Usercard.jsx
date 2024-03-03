import React from "react";

const Usercard = () => {
  return (
    <div>
      <div className="flex flex-row items-center space-x-3 bg-orange-200 p-1.5 rounded-xl">
        <img
          src="https://i.ibb.co/z4z4z4z/attendance.png"
          alt="attendance"
          style={{ width: "12vh", borderRadius: "7vh" }}
        />
        <div>
          <p className="font-bold text-lg">Maria Smith</p>
          <p>Software developer</p>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
