import { HiOutlineDotsHorizontal } from "react-icons/hi";

function RecentTrip({ trip }) {
  return (
    <li className="grid grid-cols-5 p-3">
      <p>{trip.name}</p>
      <p>{trip.priceOfTrip}</p>
      <p>Abdullah</p>
      <p>02/03/208</p>
      <p className="flex justify-between items-center">
        <span
          className={`${trip.isCompleted ? "bg-green-200  border-green-500 text-green-900 " : "bg-yellow-200 border-yellow-500 text-yellow-900"} border rounded-full py-1 px-3`}
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

export default RecentTrip;
