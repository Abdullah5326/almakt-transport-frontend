import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import Navbar from "../ui/Navbar";
import { useState } from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";

function Layout() {
  const windowWidth = useWindowWidth();
  const [showSmallNav, setShowSmallNav] = useState(false);
  return (
    <div className=" bg-stone-200 h-screen w-screen ">
      <div className="w-full h-full">
        <Navbar showSmallNav={showSmallNav} setShowSmallNav={setShowSmallNav} />
        <div className="flex w-full h-full">
          {(showSmallNav || windowWidth > 1000) && (
            <Sidebar
              showSmallNav={showSmallNav}
              setShowSmallNav={setShowSmallNav}
            />
          )}
          <main className="bg-stone-100 h-full w-full overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
