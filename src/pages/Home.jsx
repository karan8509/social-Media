import React from "react";
import Navbar from "../compnent/Navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Navbar />
    </div>
  );
};

export default Home;
