import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import BottomNavigationBar from "../../components/BottomNavigationBar";

const PageTemplate = () => {
  return (
    <main className="relative m-auto grid min-h-screen bg-[#F9F9F9] w-full max-w-full grid-rows-header-footer sm:max-w-md">
      <Header />
      <div className={"m-4"}>
          <Outlet />
      </div>
      <BottomNavigationBar />
    </main>
  );
};

export default PageTemplate;
