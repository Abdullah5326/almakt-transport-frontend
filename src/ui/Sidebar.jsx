import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import {
  HiOutlineHome,
  HiOutlineMap,
  HiOutlineTruck,
  HiOutlineUsers,
} from "react-icons/hi";

function Sidebar() {
  return (
    <aside className="w-70 border border-stone-200 bg-white pt-2 space-y-15 h-screen">
      <div>
        <Link
          to="/"
          className="uppercase text-orange-500 text-1xl font-bold flex items-center gap-2 border-b border-stone-300 pb-5 pl-4"
        >
          <span className="text-2xl flex items-center">🚛</span>
          <span className=" pt-2">Al-makt</span>
        </Link>
      </div>

      <div className="pt-5">
        <p className="text-xs text-stone-400 uppercase mb-2 pl-4">General</p>
        <div className="space-y-2">
          <SidebarItem to="/">
            <span>
              <HiOutlineHome className="h-5 w-5" />
            </span>
            Home
          </SidebarItem>
          <SidebarItem to="/trips">
            <HiOutlineMap className="h-5 w-5" />
            Trips
          </SidebarItem>
          <SidebarItem to="/clients">
            <span>
              <HiOutlineUsers className="h-5 w-5" />
            </span>
            Clients
          </SidebarItem>
          <SidebarItem to="drivers">
            <span>
              <HiOutlineTruck className="h-5 w-5" />
            </span>
            Drivers
          </SidebarItem>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
