import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  MultiSelectIcon,
  BellIcon,
  CommentDiscussionIcon,
  PersonIcon,
} from "@primer/octicons-react";
import sidebarItems from "../sideBarItem";

const SidebarItem = ({ label, icon, onClick }) => (
  <div onClick={onClick} className="flex flex-row">
    {icon}
    <span className="text-lg text-zinc-600">{label}</span>
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

  return (
    <div className="space-y-1 z-10 justify-between h-screen flex flex-col bg-slate-50 shadow-sm px-2 py-1">
      <div className="space-y-1">
        {sidebarItems.map((item, index) => (
          <motion.div whileHover={{ opacity: 0.3 }}>
            <div
              onClick={() => handleRouteClick(item.route)}
              className="bg-white p-2 py-2 min-w-64"
            >
              <SidebarItem key={index} label={item.label} icon={item.icon} />
            </div>
          </motion.div>
        ))}
        <div>
          <p>Account</p>
          <div className="mt-2 space-y-3 p-2">
            <div className="flex flex-row space-x-2">
              <PersonIcon size={24} />
              <p>Profile</p>
            </div>
            <div className="flex flex-row space-x-2">
              <CommentDiscussionIcon size={24} />
              <p>chat</p>
            </div>
            <div className="flex flex-row space-x-2">
              <BellIcon size={24} />
              <p>notification</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
