import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  PeopleIcon,
  GraphIcon,
  LogIcon,
  NoteIcon,
  ChecklistIcon,
  BellIcon,
} from "@primer/octicons-react";
import NotificationTray from "./NotificationTray";
import "../styles/Navbar.css";

const initialNotifications = [
  "User #20 left you a like!",
  "User #45 sent you a friend request",
  "Your song has been uploaded!",
  "Thanks for signing up!",
];

const Nav = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationContent, setNotificationContent] =
    useState(initialNotifications);
  const buttonRef = useRef();
  const navigate = useNavigate();

  const handleDeleteNotification = (content) => {
    setNotificationContent(
      notificationContent.filter((item) => item !== content)
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div
        style={{ height: "599px" }}
        className="flex justify-between relative flex-col bg-slate-100"
      >
        <div className="p-2 flex flex-row justify-between items-center">
          <div className="flex flex-row items-center space-x-3">
            <div className="p-4 rounded-full bg-teal-400">
              <p>User</p>
            </div>
            <div className="flex flex-col">
              <p className="font-serif">Admin</p>
              <p className="font-serif">General Manager</p>
            </div>
          </div>
          <div onClick={() => setShowNotification(!showNotification)}>
            <BellIcon size={24} />
          </div>
          <div className="absolute left-40 mt-20 bg-slate-400">
            {showNotification ? (
              <NotificationTray
                notificationCotent={notificationContent}
                handleDeleteNotification={handleDeleteNotification}
              />
            ) : null}
          </div>
        </div>
        <div style={{ marginTop: "10rem", possition: "sticky" }}>
          <motion.div whileHover={{ opacity: 0.3 }}>
            <div
              onClick={() => navigate("/task")}
              ref={buttonRef}
              className="bg-blue-200 justify-start items-start space-x-12 p-3 flex-row"
            >
              {" "}
              <NoteIcon size={24} />
              <span className="text-xl">Task</span>
            </div>
          </motion.div>

          <motion.div whileHover={{ opacity: 0.3 }}>
            <div
              onClick={() => navigate("/report")}
              ref={buttonRef}
              className="bg-blue-200 justify-start items-start mt-1 space-x-12 p-3 flex-row"
            >
              {" "}
              <ChecklistIcon size={24} />
              <span className="text-xl">Reports</span>
            </div>
          </motion.div>

          <motion.div whileHover={{ opacity: 0.3 }}>
            <div
              onClick={() => navigate("/employees")}
              ref={buttonRef}
              className="bg-blue-200 justify-start items-start mt-1 space-x-12 p-3 flex-row"
            >
              {" "}
              <PeopleIcon size={24} />
              <span className="text-xl">Employees</span>
            </div>
          </motion.div>

          <motion.div whileHover={{ opacity: 0.3 }}>
            <div
              onClick={() => navigate("/attendance")}
              ref={buttonRef}
              className="bg-blue-200 justify-start items-start mt-1 space-x-12 p-3 flex-row"
            >
              <LogIcon size={24} />
              <span className="text-xl">Attendance</span>
            </div>
          </motion.div>

          <motion.div whileHover={{ opacity: 0.3 }}>
            <div
              onClick={() => navigate("/leave")}
              ref={buttonRef}
              className="bg-blue-200 justify-start items-start mt-1 space-x-12 p-3 flex-row"
            >
              <GraphIcon size={24} />
              <span className="text-xl">Leave management</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
