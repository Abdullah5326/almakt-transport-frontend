function DriverDetailsVehicleDetailsItem({ children, name, value }) {
  return (
    <div className="flex gap-2">
      <p className="flex items-center gap-1">
        {children}
        <span className="text-stone-500 text-sm">{name}:</span>
      </p>
      <p>{value || "Suzuki"}</p>
    </div>
  );
}

export default DriverDetailsVehicleDetailsItem;
