import { useSelector } from "react-redux";
import PrimaryHeading from "../../ui/PrimaryHeading";
import TripDurationFilter from "../../ui/TripDurationFilter";
import Trips from "./Trips";
import TripStatusBox from "./TripStatusBox";
import { useTrips } from "./useTrips";
import { countItemsByStatus } from "../../utils/utils";

function Trip() {
  const { tripsDurationFilter } = useSelector((state) => state.trip);
  const { trips, isPending } = useTrips(tripsDurationFilter);

  if (isPending) return <div>Loading</div>;
  return (
    <div className="p-8">
      <PrimaryHeading>Trips</PrimaryHeading>
      <div className="flex text-sm items-center mt-6 mb-13 justify-between pr-8">
        <div className="flex gap-2">
          <div className="bg-orange-400 text-white py-1 px-3 rounded-sm">
            All Orders
          </div>
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
      <div className="pr-8">
        <Trips trips={trips} />
      </div>
    </div>
  );
}

export default Trip;
