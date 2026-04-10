import { useSelector } from "react-redux";
import PrimaryHeading from "../../ui/PrimaryHeading";
import TripDurationFilter from "../../ui/TripDurationFilter";
import Trips from "./Trips";
import TripStatusBox from "./TripStatusBox";
import { useGetItems } from "../../hooks/useGetItems";
import { getAllItems } from "../../services/apiServices";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useState } from "react";

function Trip() {
  const { tripsDurationType } = useSelector((state) => state.trip);
  const { data: trips, isPending } = useGetItems(
    `trips-by-duration?duration=${tripsDurationType}`,
    () => getAllItems(`trips/trips-by-duration?duration=${tripsDurationType}`),
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
        <div>
          <TripDurationFilter />
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
