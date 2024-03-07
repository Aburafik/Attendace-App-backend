import React from "react";
import Nav from "../../components/Nav";

const Task = () => {
  return (
    <div className="flex flex-row relative space-x-20">
      <Nav />
      <div style={{ maxWidth: "60vw", marginTop: "1rem" }}>
        <div className="bg-slate-100 mt-2">
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
        <div className="bg-slate-100 mt-2">
          <div className="flex flex-row items-center justify-between bg-blue-200">
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
        <div className="bg-slate-100 mt-2">
          <div className="flex flex-row items-center justify-between bg-blue-200">
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
        <div className="bg-slate-100 mt-2">
          <div className="flex flex-row items-center justify-between bg-blue-200">
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
  );
};

export default Task;
