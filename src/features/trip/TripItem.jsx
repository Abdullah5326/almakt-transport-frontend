import { HiOutlineDotsVertical, HiOutlineTrash } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useUpdateTrip } from "./useUpdateTrip";
import { HiOutlinePencil } from "react-icons/hi2";
import { useDeleteTrip } from "./useDeleteTrip";

function TripItem({ trip }) {
  const navigate = useNavigate();
  const { updateTrip, isUpdatingTrip } = useUpdateTrip();
  const { deleteTrip, isDeletingTrip } = useDeleteTrip();
  return (
    <li
      className="grid grid-cols-[5rem_1fr_1fr_1fr_1fr_1fr_1fr] hover:bg-stone-100 transition-all py-4 rounded-t-lg px-2 cursor-pointer"
      onClick={() => navigate(`/trips/${trip._id}`)}
    >
      <div>
        <input
          type="checkbox"
          name="markAsCompletedCheckbox"
          id="markAsCompletedCheckbox"
          defaultChecked={trip.isCompleted}
          onClick={(e) => {
            e.stopPropagation();
            if (!isUpdatingTrip)
              updateTrip({ id: trip._id, isCompleted: !trip.isCompleted });
          }}
          className="h-5 w-5 accent-orange-400 cursor-pointer"
          disabled={isUpdatingTrip}
        />
      </div>
      <p className="capitalize">{trip.name}</p>
      <p>{trip.client.name || "abdullah"}</p>
      <p>{trip.tripPrice}</p>
      <p>{new Date(trip.startDate).toLocaleDateString() || "02-03-2026"}</p>
      <p>{new Date(trip.deadlineDate).toLocaleDateString() || "02-03-2026"}</p>
      <p className="flex justify-between items-center">
        <span
          className={`${trip.isCompleted ? "bg-green-200  border-green-400 text-green-900 " : "bg-yellow-200 border-yellow-500 text-yellow-900"} border rounded-full  px-3`}
        >
          {trip.isCompleted ? "Complete" : "Pending"}
        </span>
        <div
          className="cursor-pointer flex gap-2 items-center pr-4"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            console.log("works");
          }}
        >
          <button disabled={isDeletingTrip} className="cursor-pointer">
            <HiOutlineTrash
              className="w-5 h-5 text-stone-500"
              onClick={() => {
                deleteTrip(trip._id);
              }}
            />
          </button>
          <span>
            <HiOutlinePencil />
          </span>
        </div>
      </p>
    </li>
  );
}

export default TripItem;
