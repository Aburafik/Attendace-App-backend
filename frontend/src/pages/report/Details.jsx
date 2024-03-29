import React from "react";
import Nav from "../../components/navigationbar/Nav";
import TextForms from "../../widget/TextForms";

const Details = () => {
  return (
    <div className="flex flex-row">
      <div className="ml-32 p-2 flex flex-col justify-center items-center space-y-2">
        <TextForms />
      </div>
    </div>
  );
};

export default Details;
