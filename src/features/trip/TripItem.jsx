import { useNavigate } from "react-router-dom";
import { useUpdateItem } from "../../hooks/useUpdateItem";
import { useSelector } from "react-redux";
import { updateTrip as updateTripApi } from "../../services/tripsApi";
import OperationMenu from "../../ui/OperationMenu";
import { useDeleteItem } from "../../hooks/useDeleteItem";
import { deleteItem } from "../../services/apiServices";
import toast from "react-hot-toast";
import { useState } from "react";
import StatusTag from "../../ui/StatusTag";

function TripItem({ trip }) {
  const [tripCompleted, setTripCompleted] = useState(trip.isCompleted);
  const { tripsDurationFilter } = useSelector((state) => state.trip);
  const tripsQueryKey = `last-${tripsDurationFilter}-trips`;

  const navigate = useNavigate();
  const { updateItem: updateTrip, isPending: isUpdatingTrip } = useUpdateItem(
    tripsQueryKey,
    updateTripApi,
  );
  const { deleteItem: deleteTrip, isDeletingItem: isDeletingTrip } =
    useDeleteItem(deleteItem, tripsQueryKey, "trips");
  return (
    <li
      className="grid grid-cols-[5rem_1.5fr_1.5fr_1fr_1fr_1fr_1fr_1.5fr] hover:bg-stone-200 transition-all h-16 items-center rounded-t-lg pl-2 cursor-pointer"
      onClick={() => navigate(`/trips/${trip._id}`)}
    >
      <div>
        <input
          type="checkbox"
          name="markAsCompletedCheckbox"
          id="markAsCompletedCheckbox"
          // defaultChecked={trip.isCompleted}
          checked={tripCompleted}
          onChange={(e) => {
            e.stopPropagation();
            e.preventDefault();
            if (trip.paidTo !== "owner" && !trip.isCompleted) {
              toast.error("The amount is not paid yet from the drivers.");
              return;
            }

            if (!isUpdatingTrip) {
              updateTrip({ id: trip._id, isCompleted: !trip.isCompleted });
              setTripCompleted((completed) => !completed);
            }
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="h-5 w-5 accent-orange-400 cursor-pointer"
          disabled={isUpdatingTrip}
        />
      </div>
      <p className="capitalize">{trip.name}</p>
      <p>{trip.client.name || "abdullah"}</p>
      <p>{trip.tripPrice}</p>
      <div className="justify-self-start">
        <StatusTag
          value={trip.paidTo === "owner"}
          options={{
            successText: "owner",
            failText: "driver",
            failTextBgColor: "red",
          }}
        />
      </div>
      <p>{new Date(trip.startDate).toLocaleDateString() || "02-03-2026"}</p>
      <p>{new Date(trip.deadlineDate).toLocaleDateString() || "02-03-2026"}</p>
      <div className="flex justify-between items-center pl-2 ">
        <StatusTag
          value={trip.isCompleted}
          options={{ successText: "Completed", failText: "Pending" }}
        />
        <OperationMenu
          disabledValue={isDeletingTrip}
          itemId={trip._id}
          operationDeleteFn={deleteTrip}
          item={trip}
        />
      </div>
    </li>
  );
}

export default TripItem;
