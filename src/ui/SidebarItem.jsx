import { Link, NavLink } from "react-router-dom";

function SidebarItem({ children, to, itemName, showSmallNav, onClick }) {
  return (
    <NavLink
      to={to}
      className="mx-2 text-lg hover:bg-stone-100  flex gap-1 items-center rounded-lg py-1 px-2 cursor-pointer transition-all duration-300"
      onClick={onClick}
    >
      {children}
      <span className={`hidden lg:block`}>{itemName}</span>
    </NavLink>
  );
}

export default SidebarItem;
