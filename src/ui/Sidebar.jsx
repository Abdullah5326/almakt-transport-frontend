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
import { TbSteeringWheelFilled } from "react-icons/tb";

function Sidebar({ showSmallNav, setShowSmallNav }) {
  return (
    <aside
      className={`w-13 lg:w-70 absolute lg:relative border border-stone-200 bg-white h-screen z-3`}
      onClick={() => setShowSmallNav(false)}
    >
      <div className=" w-full">
        <div className="pt-5">
          <p
            className={`text-xs text-stone-400 uppercase mb-2 pl-4 hidden lg:block`}
          >
            General
          </p>
          <div className="space-y-2">
            <SidebarItem
              to="/"
              itemName="Home"
              showSmallNav={showSmallNav}
              onClick={() => setShowSmallNav(false)}
            >
              <span>
                <HiOutlineHome className="h-5 w-5" />
              </span>
            </SidebarItem>
            <SidebarItem
              to="/trips"
              itemName="Trips"
              showSmallNav={showSmallNav}
              onClick={() => setShowSmallNav(false)}
            >
              <span>
                <HiOutlineMap className="h-5 w-5" />
              </span>
            </SidebarItem>
            <SidebarItem
              to="/clients"
              itemName="Clients"
              showSmallNav={showSmallNav}
              onClick={() => setShowSmallNav(false)}
            >
              <span>
                <HiOutlineUsers className="h-5 w-5" />
              </span>
            </SidebarItem>
            <SidebarItem
              to="/drivers"
              itemName="Drivers"
              showSmallNav={showSmallNav}
              onClick={() => setShowSmallNav(false)}
            >
              <span>
                <TbSteeringWheelFilled className="h-5 w-5" />
              </span>
            </SidebarItem>
            <SidebarItem
              to="/vehicles"
              itemName="Vehicles"
              showSmallNav={showSmallNav}
              onClick={() => setShowSmallNav(false)}
            >
              <span>
                <HiOutlineTruck className="h-5 w-5" />
              </span>
            </SidebarItem>
            {/* <SidebarItem
              to="/"
              itemName="Maintenance"
              showSmallNav={showSmallNav}
              onClick={() => setShowSmallNav(false)}
            >
              <span>
                <HiOutlineWrenchScrewdriver className="h-5 w-5" />
              </span>
            </SidebarItem>
            <SidebarItem
              to="/"
              itemName="Finance"
              showSmallNav={showSmallNav}
              onClick={() => setShowSmallNav(false)}
            >
              <span>
                <HiOutlineDocumentCurrencyDollar className="h-5 w-5" />
              </span>
            </SidebarItem> */}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
