import React from "react";
import Nav from "../../components/Nav";

const LeaveDetails = () => {
  return (
    <div className="flex flex-row">
      <Nav />
      <div className="flex flex-row">
        <div className="flex flex-col space-y-2 justify-between items-center">
          <h1>Reason</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            unde voluptatem nesciunt commodi laborum ut cupiditate tenetur fuga
            tempora, voluptas harum delectus architecto aliquid ipsum quas ex
            impedit modi in.
          </p>
        </div>
        <div className="flex flex-row space-x-2">
          <button className="bg-green-200 border border-green-600 rounded-xl p-1 px-4">
            Accept
          </button>
          <button className="bg-red-200 border border-red-600 rounded-xl p-1 px-4">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveDetails;
