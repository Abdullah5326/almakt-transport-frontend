import RecentTrip from "./RecentTrip";
import SecondaryHeading from "./../../ui/SecondaryHeading";

function RecentTrips({ recentTrips }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-stone-200">
      <div className="mb-8">
        <SecondaryHeading>Recent Orders</SecondaryHeading>
        <p className="text-stone-400 text-sm">
          Latest pending trips in your business
        </p>
      </div>
      <div className="grid grid-cols-5 text-stone-700 text-md font-semibold justify-between bg-stone-100 p-3 rounded-lg">
        <p>Name of trip</p>
        <p>price</p>
        <p>Client Name</p>
        <p>Deadline Date</p>
        <p>status</p>
      </div>

      <ul className="text-sm font-semibold overflow-auto h-50">
        {recentTrips.map((trip) => (
          <RecentTrip trip={trip} key={trip._id} />
        ))}
      </ul>
    </div>
  );
}

export default RecentTrips;
