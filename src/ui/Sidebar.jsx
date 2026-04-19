import SidebarItem from "./SidebarItem";
import {
  HiOutlineChartBar,
  HiOutlineHome,
  HiOutlineMap,
  HiOutlineTruck,
  HiOutlineUsers,
} from "react-icons/hi";
import { TbSteeringWheelFilled } from "react-icons/tb";
import SidebarProfileItem from "./SidebarProfileItem";

function Sidebar({ showSmallNav, setShowSmallNav }) {
  return (
    <aside
      className={`w-13 lg:w-[17.66rem] absolute lg:relative bg-orange-400 text-white h-screen z-3`}
      onClick={() => setShowSmallNav(false)}
    >
      <div className=" w-full flex flex-col justify-between  h-[90vh]">
        <div className="pt-4.5 ">
          <p
            className={`text-xs text-orange-800 uppercase mb-2 pl-4 hidden lg:block`}
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
                <HiOutlineHome className="h-4.5 w-4.5" />
              </span>
            </SidebarItem>
            <SidebarItem
              to="/trips"
              itemName="Trips"
              showSmallNav={showSmallNav}
              onClick={() => setShowSmallNav(false)}
            >
              <span>
                <HiOutlineMap className="h-4.5 w-4.5" />
              </span>
            </SidebarItem>
            <SidebarItem
              to="/clients"
              itemName="Clients"
              showSmallNav={showSmallNav}
              onClick={() => setShowSmallNav(false)}
            >
              <span>
                <HiOutlineUsers className="h-4.5 w-4.5" />
              </span>
            </SidebarItem>
            <SidebarItem
              to="/drivers"
              itemName="Drivers"
              showSmallNav={showSmallNav}
              onClick={() => setShowSmallNav(false)}
            >
              <span>
                <TbSteeringWheelFilled className="h-4.5 w-4.5" />
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
            <SidebarItem
              to="/maintenance"
              itemName="Maintenance"
              showSmallNav={showSmallNav}
              onClick={() => setShowSmallNav(false)}
            >
              <span>
                <HiOutlineTruck className="h-5 w-5" />
              </span>
            </SidebarItem>

            <SidebarItem
              to="/see-analytics"
              itemName="Analytics"
              showSmallNav={showSmallNav}
              onClick={() => setShowSmallNav(false)}
            >
              <span>
                <HiOutlineChartBar className="h-4.5 w-4.5" />
              </span>
            </SidebarItem>
          </div>
        </div>
        <SidebarProfileItem />
      </div>
    </aside>
  );
}

export default Sidebar;
