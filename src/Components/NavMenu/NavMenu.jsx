import { NavLink } from "react-router-dom";
import "./NavMenu.css";

export const NavMenu = () => {
  return (
    <nav>
      <NavLink to="/">ToDo</NavLink>
      <NavLink to="/completed">Completed</NavLink>
      <NavLink to="/deleted">Deleted</NavLink>
    </nav>
  );
};
