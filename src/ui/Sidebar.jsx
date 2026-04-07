import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import {
  HiChevronLeft,
  HiChevronRight,
  HiOutlineDocument,
  HiOutlineHome,
  HiOutlineMap,
  HiOutlineTruck,
  HiOutlineUsers,
} from "react-icons/hi";
import {
  HiOutlineDocumentCurrencyDollar,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { useState } from "react";

function Sidebar() {
  const [showSmallNav, setShowSmallNav] = useState(true);
  return (
    <aside
      className={`${showSmallNav ? "w-15" : "w-80"}  border border-stone-200 bg-white h-screen relative`}
    >
      <div className=" w-full">
        <div className="flex h-[4.25rem] items-center justify-between  border-b border-stone-300 px-4 ">
          <Link
            to="/"
            className={`uppercase   text-orange-500 text-1xl font-bold flex items-center gap-2 ${showSmallNav ? "hidden" : "block"}`}
          >
            <span className="text-2xl flex items-center ">🚛</span>
            <span className={`${showSmallNav ? "hidden" : "block"}`}>
              Al-makt
            </span>
          </Link>
          <span className="cursor-pointer">
            {!showSmallNav && (
              <HiChevronLeft
                className="h-6 w-6"
                onClick={() => setShowSmallNav(true)}
              />
            )}
            {showSmallNav && (
              <HiChevronRight
                className="h-6 w-6"
                onClick={() => setShowSmallNav(false)}
              />
            )}
          </span>
        </div>

        <div className="pt-5">
          <p
            className={`text-xs text-stone-400 uppercase mb-2 pl-4 ${showSmallNav ? "hidden" : "block"}`}
          >
            General
          </p>
          <div className="space-y-2">
            <SidebarItem to="/" itemName="Home" showSmallNav={showSmallNav}>
              <span>
                <HiOutlineHome className="h-5 w-5" />
              </span>
            </SidebarItem>
            <SidebarItem
              to="/trips"
              itemName="Trips"
              showSmallNav={showSmallNav}
            >
              <span>
                <HiOutlineMap className="h-5 w-5" />
              </span>
            </SidebarItem>
            <SidebarItem
              to="/clients"
              itemName="Clients"
              showSmallNav={showSmallNav}
            >
              <span>
                <HiOutlineUsers className="h-5 w-5" />
              </span>
            </SidebarItem>
            <SidebarItem
              to="/drivers"
              itemName="Drivers"
              showSmallNav={showSmallNav}
            >
              <span>
                <HiOutlineTruck className="h-5 w-5" />
              </span>
            </SidebarItem>
            <SidebarItem
              to="/maintenance"
              itemName="Maintenance"
              showSmallNav={showSmallNav}
            >
              <span>
                <HiOutlineWrenchScrewdriver className="h-5 w-5" />
              </span>
            </SidebarItem>
            <SidebarItem
              to="/finance"
              itemName="Finance"
              showSmallNav={showSmallNav}
            >
              <span>
                <HiOutlineDocumentCurrencyDollar className="h-5 w-5" />
              </span>
            </SidebarItem>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
