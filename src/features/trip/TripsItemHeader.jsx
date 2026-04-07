function TripsItemHeader() {
  return (
    <div className="border-b-2 bg-orange-400 font-bold text-white border-stone-200 grid grid-cols-[2rem_1.2fr_1fr_1.2fr] lg:grid-cols-[5rem_1.5fr_1.5fr_1fr_1fr_1fr_1fr_1.5fr]  py-4 rounded-t-lg px-2">
      <p>S.No</p>
      <p>Name</p>
      <p className="hidden">Client Name</p>
      <p className="hidden">Price</p>
      <p className="hidden">Paid To</p>
      <p className="hidden">Handover Date</p>
      <p className="">Deadline</p>
      <p>Status</p>
    </div>
  );
}

export default TripsItemHeader;
