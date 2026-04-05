import TripItem from "./TripItem";
import TripsItemHeader from "./TripsItemHeader";

function Trips({ trips, height }) {
  return (
    <div
      className={`rounded-2xl bg-white ${"h-" + height || "h-screen"} border-2 border-stone-200 overflow-auto relative`}
    >
      <TripsItemHeader />
      <ul className="divide-y divide-stone-100 overflow-y-auto h-110">
        {trips.map((trip) => (
          <TripItem trip={trip} key={trip._id} />
        ))}
      </ul>
    </div>
  );
}

export default Trips;
