import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

function RootRoute() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootRoute;
