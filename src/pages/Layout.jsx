import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import Navbar from "../ui/Navbar";

function Layout() {
  return (
    <div className=" bg-stone-200 h-screen ">
      <div className=" flex h-full">
        <Sidebar />
        <div className="flex flex-col w-full h-full">
          <Navbar />
          <main className="bg-stone-100 h-full overflow-auto  w-full">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
