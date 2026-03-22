import { Link } from "react-router-dom";

function SidebarItem({ children, to }) {
  return (
    <Link
      to={to}
      className="mx-2 text-lg hover:bg-stone-100  flex gap-1 items-center rounded-lg py-1 px-2 cursor-pointer transition-all duration-300"
    >
      {children}
    </Link>
  );
}

export default SidebarItem;
