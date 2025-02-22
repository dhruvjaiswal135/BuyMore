import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Sidebar from "./Sidebar";
const MainLayout = () => {
  // to make site responsive
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="w-full min-h-screen bg-[#ffffff]">
      <Header 
      showSidebar = { showSidebar}
      setShowSidebar = { setShowSidebar}
      />
      <Sidebar 
      showSidebar = { showSidebar}
      setShowSidebar = { setShowSidebar} />
      <div className="ml-0 lg:ml-[280px] pt-[95px] transition-all">
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
