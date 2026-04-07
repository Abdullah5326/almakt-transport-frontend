import TripItem from "./TripItem";
import TripsItemHeader from "./TripsItemHeader";

function Trips({ trips, height }) {
  return (
    <div
      className={`rounded-2xl bg-white ${"h-" + height || ""} h-140 w-full text-xs md:text-[15px] border-2 border-stone-200  relative`}
    >
      <TripsItemHeader />
      <ul className="divide-y divide-stone-100 overflow-auto  h-120">
        {trips.map((trip) => (
          <TripItem trip={trip} key={trip._id} />
        ))}
      </ul>
    </div>
  );
}

export default Trips;
