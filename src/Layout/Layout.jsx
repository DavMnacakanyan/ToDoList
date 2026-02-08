import React from "react";
import { Outlet } from "react-router-dom";
import { NavMenu } from "../Components/NavMenu/NavMenu";
import "./Layout.css";

export const Layout = () => {
  return (
    <div className="layout-container">
      <NavMenu />
      <Outlet />
    </div>
  );
};