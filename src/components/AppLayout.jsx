import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="bg-[#0f172a] text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
