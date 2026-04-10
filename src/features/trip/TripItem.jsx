import { useNavigate } from "react-router-dom";
import { useUpdateItem } from "../../hooks/useUpdateItem";
import { useSelector } from "react-redux";
import OperationMenu from "../../ui/OperationMenu";
import { useDeleteItem } from "../../hooks/useDeleteItem";
import { deleteItem } from "../../services/apiServices";
import toast from "react-hot-toast";
import { useState } from "react";
import { HiCheck, HiOutlineClock } from "react-icons/hi2";
import StatusTag from "../../ui/StatusTag";
import OperationTripForm from "./addTripForm/OperationsTripForm";
import { updateItem as updateTripApi } from "../../services/apiServices";
import Modal from "./../../ui/Modal";

function TripItem({ trip }) {
  const [showUpdateTripForm, setShowUpdateTripForm] = useState(false);
  const [tripCompleted, setTripCompleted] = useState(trip.isCompleted);
  const { tripsDurationFilter } = useSelector((state) => state.trip);
  const tripsQueryKey = `last-${tripsDurationFilter}-trips`;

  const navigate = useNavigate();
  const { updateItem: updateTrip, isPending: isUpdatingTrip } = useUpdateItem(
    tripsQueryKey,
    updateTripApi,
    "trips",
  );
  const { deleteItem: deleteTrip, isDeletingItem: isDeletingTrip } =
    useDeleteItem(deleteItem, tripsQueryKey, "trips");
  return (
    <li
      className="grid lg:grid-cols-[5rem_1.5fr_1.5fr_1fr_1fr_1fr_1fr_1.5fr] grid-cols-[2rem_1.2fr_1fr_1.2fr] hover:bg-stone-200 transition-all h-16 items-center rounded-t-lg pl-2 cursor-pointer"
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

            if (trip.receivedAmount < trip.tripPrice && !trip.isCompleted) {
              toast.error(
                "The total price of trip is not received from client.",
              );
              return;
            }

            if (trip.paidTo !== "owner" && !trip.isCompleted) {
              toast.error("The amount is not paid yet from the drivers.");
              return;
            }
            if (!isUpdatingTrip) {
              updateTrip({ _id: trip._id, isCompleted: !trip.isCompleted });
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
      <p className="capitalize line-clamp-1">{trip.name}</p>
      <p className="hidden lg:block">{trip.driver.name}</p>
      <p className="hidden lg:block">{trip.tripPrice}</p>
      <div className="justify-self-start hidden lg:block ">
        <StatusTag
          value={trip.paidTo === "owner"}
          options={{
            successText: "owner",
            failText: "driver",
            failTextBgColor: "red",
          }}
        />
      </div>
      <p className="hidden lg:block">
        {new Date(trip.startDate).toLocaleDateString() || "02-03-2026"}
      </p>
      <p className="">
        {new Date(trip.deadlineDate).toLocaleDateString() || "02-03-2026"}
      </p>
      <div className="flex justify-between items-center  pl-2 ">
        <p
          className={`  text-white text-sm rounded-full  px-2 sm:px-3  justify-self-start flex`}
        >
          <span
            className={`hidden lg:block ${trip.isCompleted ? "bg-green-500" : `bg-yellow-500`} px-2 rounded-full`}
          >
            {trip.isCompleted ? "Completed" : "Pending"}
          </span>
          <span>
            {trip.isCompleted ? (
              <HiCheck className="h-5 w-5 text-green-500 lg:hidden" />
            ) : (
              <HiOutlineClock className="h-5 w-5 text-red-500 lg:hidden" />
            )}
          </span>
        </p>
        <OperationMenu
          disabledValue={isDeletingTrip}
          itemId={trip._id}
          operationDeleteFn={deleteTrip}
          operationUpdateFn={updateTrip}
          item={trip}
          toggleEditForm={setShowUpdateTripForm}
        />
        {showUpdateTripForm && (
          <Modal closeForm={() => setShowUpdateTripForm(false)}>
            <OperationTripForm
              defaultValues={{
                ...trip,
                startDate:
                  new Date(trip.startDate)?.toISOString().split("T")[0] ||
                  "2027-04-25",
                deadlineDate:
                  new Date(trip.deadlineDate)?.toISOString().split("T")[0] ||
                  "2027-04-25",
                client: trip.client._id,
                driver: trip.driver._id,
              }}
              name="Update The Trip"
              isPending={isUpdatingTrip}
              description="Update the fields that you want to change"
              closeForm={() => setShowUpdateTripForm(false)}
              submitBtnName="Update Trip"
              operationFn={updateTrip}
            />
          </Modal>
        )}
      </div>
    </li>
  );
}

export default TripItem;
