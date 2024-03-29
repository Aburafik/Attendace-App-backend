import React from "react";
import DeviceSizeChecker from "../../features/screensize/DeviceSizeChecker";

const Task = () => {
  const { isPhone } = DeviceSizeChecker();
  return (
    <div className="flex flex-row sticky px-10 justify-around mt-10">
      <div className="w-full">
        <div
          style={{ maxWidth: "900px", height: "3rem" }}
          className="bg-blue-800 flex flex-row sticky justify-between p-2 rounded-lg my-4"
        >
          <button className="bg-amber-50 px-3 py-1 rounded-md font-semibold text-zinc-600">
            New
          </button>
        </div>
        <div
          style={{
            minWidth: `${isPhone ? "50vw" : "80vw"}`,
            marginTop: "1rem",
          }}
          className="mx-auto"
        >
          <div
            style={{ marginLeft: "2vw", maxWidth: "800px" }}
            className="bg-white mt-2 rounded-lg shadow-md"
          >
            <div className="flex flex-row items-center justify-between bg-blue-200 p-1 rounded-t-lg">
              <h1 className="font-bold text-xl">Task 1</h1>
              <div className="flex flex-row space-x-3">
                <p className="font-semibold">Status:</p>
                <p className="text-green-400 font-semibold">Completed</p>
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
          <div
            style={{ marginLeft: "2vw", maxWidth: "800px" }}
            className="bg-white mt-2 rounded-lg shadow-md"
          >
            <div className="flex flex-row items-center justify-between bg-blue-200 p-1 rounded-t-lg">
              <h1 className="font-bold text-xl">Task 1</h1>
              <div className="flex flex-row space-x-3">
                <p className="font-semibold">Status:</p>
                <p className="text-green-400 font-semibold">Completed</p>
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
          <div
            style={{ marginLeft: "2vw", maxWidth: "800px" }}
            className="bg-white mt-2 rounded-lg shadow-md"
          >
            <div className="flex flex-row items-center justify-between bg-blue-200 p-1 rounded-t-lg">
              <h1 className="font-bold text-xl">Task 1</h1>
              <div className="flex flex-row space-x-3">
                <p className="font-semibold">Status:</p>
                <p className="text-green-400 font-semibold">Completed</p>
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
          <div
            style={{ marginLeft: "2vw", maxWidth: "800px" }}
            className="bg-white mt-2 rounded-lg shadow-md"
          >
            <div className="flex flex-row items-center justify-between bg-blue-200 p-1 rounded-t-lg">
              <h1 className="font-bold text-xl">Task 1</h1>
              <div className="flex flex-row space-x-3">
                <p className="font-semibold">Status:</p>
                <p className="text-green-400 font-semibold">Completed</p>
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
        style={{ height: "40vh", maxWidth: "800px" }}
        className="flex flex-col sticky mt-16 ml-5 bg-blue-200 justify-around p-2 rounded-lg"
      >
        <div className="flex flex-col space-y-1 items-center justify-start">
          <p className="font-serif text-lg font-bold">Task completed</p>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="flex flex-col space-y-1 items-center justify-start">
          <p className="font-serif text-lg font-bold">To Do</p>
          <p className="text-2xl font-bold">4</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
