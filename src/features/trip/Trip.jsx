import { useSelector } from "react-redux";
import PrimaryHeading from "../../ui/PrimaryHeading";
import TripDurationFilter from "../../ui/TripDurationFilter";
import Trips from "./Trips";
import TripStatusBox from "./TripStatusBox";
import { useGetItems } from "../../hooks/useGetItems";
import { addItem, getAllItems } from "../../services/apiServices";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useState } from "react";
import ButtonAddMember from "../../ui/ButtonAddMember";
import Modal from "../../ui/Modal";
import OperationTripForm from "./addTripForm/OperationsTripForm";
import { useAddItem } from "../../hooks/useAddItem";
import PrimaryButton from "../../ui/PrimaryButton";

function Trip() {
  const [showAddTripForm, setShowAddTripForm] = useState(false);
  const { tripsDurationType } = useSelector((state) => state.trip);
  const queryKey = `trips`;
  const { data: trips, isPending } = useGetItems(queryKey, () =>
    getAllItems(`trips/trips-by-duration?duration=${tripsDurationType}`),
  );
  const { addItem: addTrip, isPending: isAddingTrip } = useAddItem(
    addItem,
    queryKey,
  );
  const [tripsType, setTripsType] = useState("allTrips");
  if (isPending) return <LoadingSpinner />;
  const pendingTrips = trips.filter((trip) => !trip.isCompleted);
  const completedTrips = trips.filter((trip) => trip.isCompleted);
  return (
    <div className="lg:p-8 p-4">
      <PrimaryHeading>Trips</PrimaryHeading>
      <div className="flex flex-col lg:flex-row gap-3 items-start text-sm md:text-[16px] lg:items-center mt-6 mb-13 justify-between lg:pr-8">
        <div className="flex gap-2 text-xs md:text-md font-semibold">
          <TripStatusBox
            name="All Trips"
            quantity={trips.length}
            onClick={() => setTripsType("allTrips")}
            tripsType={tripsType}
            boxType="allTrips"
          />
          <TripStatusBox
            name="Completed"
            quantity={completedTrips.length}
            onClick={() => setTripsType("completedTrips")}
            tripsType={tripsType}
            boxType="completedTrips"
          />
          <TripStatusBox
            name="Pending"
            quantity={pendingTrips.length}
            onClick={() => setTripsType("pendingTrips")}
            tripsType={tripsType}
            boxType="pendingTrips"
          />
        </div>
        <div className="flex flex-col gap-4">
          <TripDurationFilter />
          <PrimaryButton onClick={() => setShowAddTripForm(true)}>
            Add Trip
          </PrimaryButton>
          {showAddTripForm && (
            <Modal>
              <OperationTripForm
                operationFn={addTrip}
                isPending={isAddingTrip}
                closeForm={() => setShowAddTripForm(false)}
                description="Fill the following details to add new trip"
                submitBtnName="Add Trip"
                name="Add Trip"
              />
            </Modal>
          )}
        </div>
      </div>
      <div className="lg:pr-8">
        <Trips
          trips={
            tripsType === "allTrips"
              ? trips
              : tripsType === "pendingTrips"
                ? pendingTrips
                : completedTrips
          }
        />
      </div>
    </div>
  );
}

export default Trip;
