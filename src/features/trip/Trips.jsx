import { useSelector } from "react-redux";
import TripItem from "./TripItem";
import { useTrips } from "./useTrips";

function Trips({ trips, height }) {
  const { tripsDurationFilter } = useSelector((state) => state.trip);
  const { isPending } = useTrips(tripsDurationFilter);
  if (isPending) return <div>Loading...</div>;
  return (
    <div
      className={`rounded-2xl bg-white ${"h-" + height || "h-screen"} border-2 border-stone-200 overflow-auto relative`}
    >
      <div className="border-b-2 border-stone-200 grid grid-cols-[5rem_1fr_1fr_1fr_1fr_1fr_1fr] py-4 rounded-t-lg px-2">
        <p>S.No</p>
        <p>Name</p>
        <p>Client Name</p>
        <p>Price</p>
        <p>Handover Date</p>
        <p>Deadline Date</p>
        <p>Status</p>
      </div>
      <ul className="divide-y divide-stone-100 overflow-y-auto h-110">
        {trips.map((trip) => (
          <TripItem trip={trip} key={trip._id} />
        ))}
      </ul>
    </div>
  );
}

export default Trips;
