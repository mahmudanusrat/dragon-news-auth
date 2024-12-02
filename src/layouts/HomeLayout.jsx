import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import CategoryNews from "../pages/CategoryNews";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
      </header>
      <section className="max-w-6xl mx-auto">
        <LatestNews></LatestNews>
      </section>
      <nav className="max-w-6xl mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="max-w-6xl mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3"><LeftNavbar></LeftNavbar></aside>
        <section className="main col-span-6"><Outlet></Outlet></section>
        <aside className="right col-span-3"><RightNavbar></RightNavbar></aside>
      </main>
    </div>
  );
};

export default HomeLayout;
