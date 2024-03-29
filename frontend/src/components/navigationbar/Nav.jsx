import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  NoteIcon,
  ChecklistIcon,
  PeopleIcon,
  BellIcon,
} from "@primer/octicons-react";

const SidebarItem = ({ label, icon, onClick }) => (
  <div onClick={onClick} className="sidebar-item">
    {icon}
    <span className="text-2xl  text-zinc-600">{label}</span>
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [navigationbar, setNavigationBar] = useState(false);
  const [navbtn, setNavBtn] = useState(true);

  const handleRouteClick = (route) => {
    navigate(route);
    setNavigationBar(false);
    setNavBtn(true);
  };
  const handleNavBtn = () => {
    setNavigationBar(!navigationbar);
    setNavBtn(!navbtn);
  };

  const sidebarItems = [
    {
      label: "Attendance",
      icon: <NoteIcon className="mr-6 text-zinc-600" size={30} />,
      route: "attendance",
    },
    {
      label: "Task",
      icon: <NoteIcon className="mr-6 text-zinc-600" size={30} />,
      route: "task",
    },
    {
      label: "Reports",
      icon: <ChecklistIcon className="mr-6 text-zinc-600" size={30} />,
      route: "report",
    },
    {
      label: "Employees",
      icon: <PeopleIcon className="mr-6 text-zinc-600" size={30} />,
      route: "employee",
    },
    {
      label: "Leave Management",
      icon: <ChecklistIcon className="mr-6 text-zinc-600" size={30} />,
      route: "leave",
    },
  ];

  return (
    <div>
      {navbtn && (
        <button
          className="bg-teal-300 px-5 py-1 rounded-2xl"
          onClick={handleNavBtn}
        >
          click
        </button>
      )}
      {navigationbar && (
        <div className="space-y-1 absolute z-10 justify-between h-screen flex flex-col bg-slate-100 shadow-sm">
          <div className="flex flex-row items-center bg-blue-900">
            <div className="flex flex-col items-center justify-start space-x-3 py-3 px-1">
              <div className="p-8 rounded-full bg-white">
                <p>User</p>
              </div>
              <div className="flex flex-col">
                <p className=" text-white font-bold text-2xl">Admin</p>
                <p className="font-serif text-white font-bold text-2xl">
                  General Manager
                </p>
              </div>
            </div>
            <div className="sticky">
              <BellIcon className="text-white font-bold" size={24} />
            </div>
          </div>
          <div className="space-y-1">
            {sidebarItems.map((item, index) => (
              <motion.div whileHover={{ opacity: 0.3 }}>
                <div
                  onClick={() => handleRouteClick(item.route)}
                  className="bg-amber-400 p-4 py-5 min-w-64"
                >
                  <SidebarItem
                    key={index}
                    label={item.label}
                    icon={item.icon}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
