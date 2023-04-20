import React from 'react'
import { Footer } from "../index";
import { Navbar } from "../../components/index";

import "../../App.css";
import "../../index.css";
import { Outlet } from 'react-router-dom';
function UserLayout() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
    </div>
        <Outlet />
        <Footer />
  </div>
  )
}

export default UserLayout