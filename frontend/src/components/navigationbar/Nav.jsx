import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ListUnorderedIcon } from "@primer/octicons-react";
import {
  PeopleIcon,
  GraphIcon,
  LogIcon,
  NoteIcon,
  ChecklistIcon,
  BellIcon,
} from "@primer/octicons-react";
import NotificationTray from "../NotificationTray";
import DeviceSizeChecker from "../../features/screensize/DeviceSizeChecker";
import "../../styles/Navbar.css";

const initialNotifications = [
  "User #20 left you a like!",
  "User #45 sent you a friend request",
  "Your song has been uploaded!",
  "Thanks for signing up!",
];

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Nav = () => {
  const [showNotification, setShowNotification] = useState(false);
  const buttonRef = useRef();
  const [notificationContent, setNotificationContent] =
    useState(initialNotifications);
  const [isOpen, setIsOpen] = useState(true);
  const buttonRefReports = useRef();
  const buttonRefEmployees = useRef();
  const buttonRefAttendance = useRef();
  const buttonRefLeave = useRef();
  const navigate = useNavigate();
  const { isPhone, isTablet } = DeviceSizeChecker();

  const handleDeleteNotification = (content) => {
    setNotificationContent(
      notificationContent.filter((item) => item !== content)
    );
  };

  const handleRouteClick = (router) => {
    console.log("clicked");
    navigate(`/${router}`);
  };

  const navbarContent = isPhone ? (
    <div
      onClick={() => setIsOpen((isOpen) => !isOpen)}
      className="bg-slate-300 p-3"
      style={{ height: "3%" }}
    >
      <ListUnorderedIcon size={44} />
    </div>
  ) : (
    <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
      <div
        style={{ height: "100vh" }}
        className="flex justify-between relative flex-col bg-slate-100"
      >
        {/* Header section */}
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
        </div>

        {/* Navigation section (conditionally rendered) */}
        {(isPhone || isTablet) && (
          <div style={{ marginTop: "10rem", position: "sticky" }}>
            <motion.div whileHover={{ opacity: 0.3 }}>
              <div
                onClick={() => handleRouteClick("attendance")}
                ref={buttonRef}
                className="bg-blue-200 justify-start items-start space-x-12 p-3 flex-row"
              >
                <NoteIcon size={24} />
                <span className="text-xl">Attendance</span>
              </div>
            </motion.div>
            <motion.div whileHover={{ opacity: 0.3 }}>
              <div
                onClick={() => handleRouteClick("task")}
                ref={buttonRef}
                className="bg-blue-200 mt-1 justify-start items-start space-x-12 p-3 flex-row"
              >
                <NoteIcon size={24} />
                <span className="text-xl">Task</span>
              </div>
            </motion.div>
            <motion.div whileHover={{ opacity: 0.3 }}>
              <div
                onClick={() => handleRouteClick("report")}
                ref={buttonRefReports}
                className="bg-blue-200 justify-start items-start mt-1 space-x-12 p-3 flex-row"
              >
                <ChecklistIcon size={24} />
                <span className="text-xl">Reports</span>
              </div>
            </motion.div>
            <motion.div whileHover={{ opacity: 0.3 }}>
              <div
                onClick={() => handleRouteClick("employee")}
                ref={buttonRefReports}
                className="bg-blue-200 justify-start items-start mt-1 space-x-12 p-3 flex-row"
              >
                <PeopleIcon size={24} />
                <span className="text-xl">Empployees</span>
              </div>
            </motion.div>
            <motion.div whileHover={{ opacity: 0.3 }}>
              <div
                onClick={() => handleRouteClick("leave")}
                ref={buttonRefReports}
                className="bg-blue-200 justify-start items-start mt-1 space-x-12 p-3 flex-row"
              >
                <ChecklistIcon size={24} />
                <span className="text-xl">Leave Management</span>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.nav>
  );

  return navbarContent;
};

export default Nav;
