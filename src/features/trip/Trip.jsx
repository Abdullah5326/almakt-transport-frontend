import { useSelector } from "react-redux";
import PrimaryHeading from "../../ui/PrimaryHeading";
import TripDurationFilter from "../../ui/TripDurationFilter";
import Trips from "./Trips";
import TripStatusBox from "./TripStatusBox";
import { countItemsByStatus } from "../../utils/utils";
import { useGetItems } from "../../hooks/useGetItems";
import { getAllItems } from "../../services/apiServices";
import LoadingSpinner from "../../ui/LoadingSpinner";

function Trip() {
  const { tripsDurationFilter } = useSelector((state) => state.trip);
  const { data: trips, isPending } = useGetItems(
    `last-${tripsDurationFilter}-trips`,
    () => getAllItems(`trips/last-${tripsDurationFilter}-trips`),
  );
  if (isPending) return <LoadingSpinner />;
  return (
    <div className="lg:p-8 p-4">
      <PrimaryHeading>Trips</PrimaryHeading>
      <div className="flex flex-col lg:flex-row gap-3 items-start text-sm md:text-[16px] lg:items-center mt-6 mb-13 justify-between lg:pr-8">
        <div className="flex gap-2 text-xs md:text-md font-semibold">
          <p className="bg-orange-400 text-white flex items-center px-3 rounded-sm">
            All Orders
          </p>
          <TripStatusBox
            name="Completed"
            quantity={countItemsByStatus(trips)}
          />
          <TripStatusBox
            name="Pending"
            quantity={trips.length - countItemsByStatus(trips)}
          />
        </div>
        <div>
          <TripDurationFilter />
        </div>
      </div>
      <div className="lg:pr-8">
        <Trips trips={trips} />
      </div>
    </div>
  );
}

export default Trip;
