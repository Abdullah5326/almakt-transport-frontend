import PrimaryHeading from "../../ui/PrimaryHeading";
import { useTrips } from "../trip/useTrips";
import DashboardCard from "./DashboardCard";
import { calcTotalItemsSum } from "../../utils/calcTotalItemsSum";
import TripDurationFilter from "../../ui/TripDurationFilter";
import { useSelector } from "react-redux";
import Trips from "../trip/Trips";

function Dashboard() {
  const { tripsDurationFilter } = useSelector((state) => state.trip);
  const { trips, isPending } = useTrips(tripsDurationFilter);
  console.log(isPending, tripsDurationFilter);

  if (isPending) return <div>Loading...</div>;
  return (
    <div className="px-6">
      <div className="mb-6 flex justify-between pr-30 p-8">
        <div>
          <PrimaryHeading>Dashboard</PrimaryHeading>
          <p className="text-stone-500 text-xs">Welcome back Atif</p>
        </div>
        <TripDurationFilter />
      </div>

      <div className="flex items-center gap-4 mb-12">
        <DashboardCard
          name="Total revenue"
          value={`$${calcTotalItemsSum(trips, "tripPrice")}`}
          percentChange={20}
        />
        <DashboardCard
          name="Total Trips"
          value={trips.length}
          percentChange={10}
        />
        <DashboardCard
          name="Total Paid Amount"
          value={`$${calcTotalItemsSum(trips, "receivedAmount")}`}
          percentChange={5}
        />
      </div>
      <Trips trips={trips} />
    </div>
  );
}

export default Dashboard;
