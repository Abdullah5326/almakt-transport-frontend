function TripsItemHeader() {
  return (
    <div className="border-b-2 bg-orange-400 font-bold text-white border-stone-200 grid grid-cols-[5rem_1.5fr_1.5fr_1fr_1fr_1fr_1fr_1.5fr] py-4 rounded-t-lg px-2">
      <p>S.No</p>
      <p>Name</p>
      <p>Client Name</p>
      <p>Price</p>
      <p>Paid To</p>
      <p>Handover Date</p>
      <p>Deadline Date</p>
      <p>Status</p>
    </div>
  );
}

export default TripsItemHeader;
