function DetailsStatisticsBox({ children, stateName, value }) {
  return (
    <div className="bg-white flex items-center px-8 gap-4 py-6 rounded-xl">
      {children}
      <div>
        <p className="text-sm text-stone-500">{stateName}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

export default DetailsStatisticsBox;
