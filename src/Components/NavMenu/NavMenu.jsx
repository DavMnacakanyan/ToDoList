import React from "react";
import { NavLink } from "react-router-dom";
import "./NavMenu.css";

export const NavMenu = () => {
  return (
    <nav className="nav-menu">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Todo
      </NavLink>
      <NavLink
        to="/completed"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Completed
      </NavLink>
      <NavLink
        to="/deleted"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Deleted
      </NavLink>
    </nav>
  );
};
