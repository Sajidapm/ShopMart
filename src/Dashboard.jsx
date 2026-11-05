import react from "react";
import { Outlet } from "react-router-dom";

import DashboardNavbar from "./Components/DashboardNavbar";
import DashboardSidebar from "./Components/DashboardSidebar";
const Dashboard = () => {
  return (
    <div className="flex flex-col ">           
<div className="flex"><DashboardNavbar/>
<DashboardSidebar/></div>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
        </div>
  )
}
  export default Dashboard