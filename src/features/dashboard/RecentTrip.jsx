import { HiOutlineDotsHorizontal } from "react-icons/hi";

function RecentTrip() {
  return (
    <li className="grid grid-cols-5 p-3">
      <p>Trip to Lahore</p>
      <p>50000</p>
      <p>Abdullah</p>
      <p>02/03/208</p>
      <p className="flex justify-between items-center">
        <span className="bg-green-200 rounded-full border border-green-500 text-green-900 py-1 px-3">
          Pending
        </span>
        <span className="cursor-pointer">
          <HiOutlineDotsHorizontal className="w-6 h-6 text-stone-300" />
        </span>
      </p>
    </li>
  );
}

export default RecentTrip;
