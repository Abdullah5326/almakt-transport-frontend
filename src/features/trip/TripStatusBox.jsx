function TripStatusBox({ name, quantity }) {
  return (
    <div className="bg-white py-1 px-3 rounded-sm flex items-center gap-2">
      <span>{name}</span>
      <span className="text-xs bg-stone-100 p-1 rounded-sm">{quantity}</span>
    </div>
  );
}

export default TripStatusBox;
