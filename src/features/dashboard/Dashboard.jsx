import PrimaryHeading from "../../ui/PrimaryHeading";
import DashboardCard from "./DashboardCard";
import { calcTotalItemsSum } from "../../utils/calcTotalItemsSum";
import TripDurationFilter from "../../ui/TripDurationFilter";
import Chart from "../../ui/Chart";
import { useSelector } from "react-redux";
import Trips from "../trip/Trips";
import { useGetItems } from "../../hooks/useGetItems";
import { getAllItems, getItem } from "../../services/apiServices";
import PieChartUI from "../../ui/PieChartUI";
import BarChartUI from "../../ui/BarChartUI";
import LoadingSpinner from "../../ui/LoadingSpinner";

function Dashboard() {
  const { tripsDurationFilter } = useSelector((state) => state.trip);
  const { data: trips, isPending } = useGetItems(
    `last-${tripsDurationFilter}-trips`,
    () => getAllItems(`trips/last-${tripsDurationFilter}-trips`),
  );
  const { data: durationalTrips, isPending: isLoadingTrips } = useGetItems(
    "durational-trips",
    () => getAllItems(`trips/durational-trips`),
  );

  if (isPending || isLoadingTrips) return <LoadingSpinner />;
  return (
    <div className="px-6 overflow-auto relative">
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
      <div className="flex gap-30 items-center">
        {/* <Chart /> */}
        <BarChartUI data={durationalTrips} />
        <PieChartUI
          totalPaidAmount={calcTotalItemsSum(trips, "receivedAmount")}
        />
      </div>
      <Trips trips={trips} />
    </div>
  );
}

export default Dashboard;
