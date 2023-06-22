import { Outlet } from "react-router-dom";
import HamburguerMenu from "../../components/HamburguerMenuu";
import HeaderDashboard from "../../components/HeaderDashboardd";

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
