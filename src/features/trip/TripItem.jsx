import { HiOutlineDotsHorizontal } from "react-icons/hi";

function TripItem({ trip, no }) {
  return (
    <li className="grid grid-cols-[5rem_1fr_1fr_1fr_1fr_1fr_1fr_1fr] py-4 rounded-t-lg px-2 cursor-pointer">
      <p>{no + 1}</p>
      <p>{trip.name}</p>
      <p>{trip.client.name || "abdullah"}</p>
      <p>{trip.priceOfTrip}</p>
      <p>{new Date(trip.date).toLocaleDateString() || "02-03-2026"}</p>
      <p>{trip.deadlineDate || "02-03-2026"}</p>
      <p className="flex justify-between items-center">
        <span
          className={`${trip.isCompleted ? "bg-green-200  border-green-400 text-green-900 " : "bg-yellow-200 border-yellow-500 text-yellow-900"} border rounded-full py-1 px-3`}
        >
          {trip.isCompleted ? "Complete" : "Pending"}
        </span>
        <span className="cursor-pointer">
          <HiOutlineDotsHorizontal className="w-6 h-6 text-stone-300" />
        </span>
      </p>
    </li>
  );
}

export default TripItem;
