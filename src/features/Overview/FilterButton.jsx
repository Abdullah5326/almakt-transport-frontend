import { useSelector } from "react-redux";

function FilterButton({ children, onClick }) {
  const { tripsDurationType } = useSelector((state) => state.trip);
  console.log(tripsDurationType);
  return (
    <button
      className={` ${children.split(" ")[0].toLowerCase() === tripsDurationType ? " text-orange-400  border-b-2 border-orange-400" : "bg-white  rounded-lg hover:bg-stone-50 hover:text-stone-900 border-none text-stone-500   "} cursor-pointer transition-all duration-75  px-4 py-2 font-bold text-sm `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default FilterButton;
