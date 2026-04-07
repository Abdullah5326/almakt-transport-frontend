import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import Navbar from "../ui/Navbar";
import { useState } from "react";

function Layout() {
  const [showSmallNav, setShowSmallNav] = useState(false);
  return (
    <div className=" bg-stone-200 h-screen w-screen overflow-x-auto">
      <div className=" h-full">
        <Navbar showSmallNav={showSmallNav} setShowSmallNav={setShowSmallNav} />
        <div className="flex h-full">
          {showSmallNav && <Sidebar showSmallNav={showSmallNav} />}
          <main className="bg-stone-100 h-full overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
