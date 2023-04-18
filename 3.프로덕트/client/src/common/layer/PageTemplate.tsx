import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import BottomNavigationBar from "../../components/BottomNavigationBar";

const PageTemplate = () => {
  return (
    <main className="relative m-auto grid min-h-screen bg-[#c0c0c0] w-full max-w-full grid-rows-header-footer text-grey-300 sm:max-w-md">
      <Header />
      <Outlet />
      <BottomNavigationBar />
    </main>
  );
};

export default PageTemplate;
