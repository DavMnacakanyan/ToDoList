import { Outlet } from "react-router-dom";
import { NavMenu } from "../Components/NavMenu/NavMenu";

export const Layout = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
    </>
  );
};
