import { Outlet } from "react-router-dom";
import HamburguerMenu from "../../components/HamburguerMenu";
import HeaderDashboard from "../../components/HeaderDashboard";

function Dashboard() {
  return (
    <>
      <HeaderDashboard />
      <HamburguerMenu />
      <Outlet />
    </>
  );
}

export default Dashboard;
