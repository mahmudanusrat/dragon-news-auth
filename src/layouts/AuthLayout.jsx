import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="font-poppins bg-[#F3F3F3]">
      <header className="py-3 max-w-6xl mx-auto ">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
