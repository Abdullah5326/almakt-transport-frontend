function TripStatusBox({ name, quantity, onClick, tripsType, boxType }) {
  return (
    <div
      className={`${tripsType === boxType ? "bg-orange-500 text-white hover:bg-orange-400" : "bg-white"} py-1 px-3 rounded-sm flex items-center gap-2 cursor-pointer`}
      onClick={onClick}
    >
      <span>{name}</span>
      <span
        className={`text-xs ${tripsType === boxType ? "bg-orange-700" : "bg-stone-100"}  p-1 rounded-sm `}
      >
        {String(quantity).padStart(2, 0)}
      </span>
    </div>
  );
}

export default TripStatusBox;
