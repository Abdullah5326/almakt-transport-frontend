import { Outlet } from "react-router-dom";
import Dashboard from "../features/dashboard/Dashboard";
import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";

function Layout() {
  return (
    <div className=" bg-stone-200 h-screen overflow-hidden">
      <div className=" flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <main className="bg-stone-100 h-full w-full pt-6 pl-5 ">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
