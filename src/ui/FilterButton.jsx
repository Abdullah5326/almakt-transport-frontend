function FilterButton({ filterType, focusValue, children, onClick }) {
  return (
    <button
      className={` ${filterType === focusValue ? " text-orange-400  border-b-2 border-orange-400" : "bg-white  rounded-lg hover:bg-orange-100 hover:text-stone-900 border-none text-stone-500   "} cursor-pointer transition-all duration-75  px-4 py-2 font-bold text-sm `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default FilterButton;
