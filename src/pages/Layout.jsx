import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
import Navbar from "../ui/Navbar";
import { useRef, useState } from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";

function Layout() {
  const windowWidth = useWindowWidth();
  const [showSmallNav, setShowSmallNav] = useState(false);
  const mainContainerRef = useRef(null);
  return (
    <div className="bg-stone-50 h-screen overflow-hidden  ">
      <div className="w-full h-full ">
        <Navbar showSmallNav={showSmallNav} setShowSmallNav={setShowSmallNav} />
        <div className="grid grid-cols-[17rem_1fr] w-full h-full">
          {(showSmallNav || windowWidth > 1000) && (
            <Sidebar
              showSmallNav={showSmallNav}
              setShowSmallNav={setShowSmallNav}
            />
          )}
          <main
            ref={mainContainerRef}
            className="bg-stone-50 h-full w-full overflow-y-auto pb-20"
          >
            <Outlet context={{ scrollableContainer: mainContainerRef }} />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
