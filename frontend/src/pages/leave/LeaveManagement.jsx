import React from "react";
import Nav from "../../components/navigationbar/Nav";
import { useNavigate } from "react-router-dom";
import { PersonIcon } from "@primer/octicons-react";

const LeaveManagement = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row space-x-10 mt-14">
      <div className="flex flex-col">
        <div
          onClick={() => navigate("leave-info")}
          className="flex flex-row bg-slate-100 p-2 justify-center items-center ml-8 mt-2 rounded-xl"
          style={{ width: "55vw", height: "auto" }}
        >
          <div className="flex flex-col">
            <div className="flex flex-row items-center space-x-3 justify-between">
              <div className="flex flex-row items-center space-x-3">
                <div
                  style={{
                    padding: 10,
                    backgroundColor: "beige",
                    borderRadius: 20,
                  }}
                >
                  <PersonIcon size={22} />
                </div>
                <div>
                  <p>Maxwell</p>
                  <p className="text-sm">software developer</p>
                </div>
              </div>
              <div className="flex flex-row space-x-2">
                <button
                  style={{ height: "5vh" }}
                  className="bg-green-200 border border-green-600 rounded-xl p-1 px-4"
                >
                  Accept
                </button>
                <button
                  style={{ height: "5vh" }}
                  className="bg-red-200 border sticky border-red-600 rounded-xl p-1 px-4"
                >
                  Decline
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-xl font-medium">Reason</h1>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              unde voluptatem nesciunt commodi laborum ut cupiditate tenetur
              fuga tempora, voluptas harum delectus architecto aliquid ipsum
              quas ex impedit modi in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveManagement;
