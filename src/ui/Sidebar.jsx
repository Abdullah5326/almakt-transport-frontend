import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import {
  HiOutlineHome,
  HiOutlineMap,
  HiOutlineTruck,
  HiOutlineUsers,
} from "react-icons/hi";
import {
  HiOutlineDocumentCurrencyDollar,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

function Sidebar({ showSmallNav = true }) {
  return (
    <aside
      className={`${showSmallNav ? "w-13" : "w-80"} absolute border border-stone-200 bg-white h-screen z-33`}
    >
      <div className=" w-full">
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
