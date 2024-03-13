import React from "react";
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
    <span className="text-xl">{label}</span>
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();

  const handleRouteClick = (route) => {
    navigate(route);
  };

  const sidebarItems = [
    {
      label: "Attendance",
      icon: <NoteIcon className="mr-6" size={24} />,
      route: "attendance",
    },
    {
      label: "Task",
      icon: <NoteIcon className="mr-6 " size={24} />,
      route: "task",
    },
    {
      label: "Reports",
      icon: <ChecklistIcon className="mr-6" size={24} />,
      route: "report",
    },
    {
      label: "Employees",
      icon: <PeopleIcon className="mr-6" size={24} />,
      route: "employee",
    },
    {
      label: "Leave Management",
      icon: <ChecklistIcon className="mr-6" size={24} />,
      route: "leave",
    },
  ];

  return (
    <div className="space-y-1 justify-between h-screen flex flex-col bg-slate-100 shadow-sm">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center space-x-3">
          <div className="p-4 rounded-full bg-teal-400">
            <p>User</p>
          </div>
          <div className="flex flex-col">
            <p className="font-serif">Admin</p>
            <p className="font-serif">General Manager</p>
          </div>
        </div>
        <div>
          <BellIcon size={24} />
        </div>
      </div>
      <div className="space-y-1">
        {sidebarItems.map((item, index) => (
          <motion.div whileHover={{ opacity: 0.3 }}>
            <div className="bg-blue-200 p-4">
              <SidebarItem
                key={index}
                label={item.label}
                icon={item.icon}
                onClick={() => handleRouteClick(item.route)}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
