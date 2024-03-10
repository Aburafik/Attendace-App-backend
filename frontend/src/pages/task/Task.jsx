import React from "react";
import Nav from "../../components/navigationbar/Nav";
import Topbar from "../../widget/status/bar/Topbar";

const Task = () => {
  return (
    <div className="flex flex-row sticky">
      <div className="sticky">
        <Nav />
      </div>
      <div>
        <div
          style={{ minWidth: "186vh", height: "3rem" }}
          className="bg-zinc-200 flex flex-row absolute justify-between p-2"
        >
          <Topbar />
          <button className="bg-slate-600 px-3 p1 text-white">New</button>
        </div>
        <div style={{ maxWidth: "60vw", marginTop: "4rem" }}>
          <div style={{ marginLeft: "2vw" }} className="bg-slate-100 mt-2">
            <div className="flex flex-row items-center justify-between bg-blue-200 p-1">
              <h1>Task 1</h1>
              <div className="flex flex-row space-x-3">
                <p>status</p>
                <p className="text-green-400">completed</p>
              </div>
            </div>
            <div className="p-1">
              <p>
                Task Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt nobis illo saepe distinctio. Ad blanditiis doloremque,
                architecto maiores quae repudiandae voluptatum exercitationem
                reprehenderit veniam quos amet officiis cum sint in?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ height: "40vh" }}
        className=" flex flex-col sticky mt-16 ml-5 bg-blue-200 justify-around p-2"
      >
        <div className="flex flex-col space-y-1 items-center justify-start">
          <p className="font-serif">Task completed</p>
          <p>5</p>
        </div>
        <div className="flex flex-col space-y-1 items-center justify-start">
          <p className="font-serif">To Do</p>
          <p>4</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
