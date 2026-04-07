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
    <div className="lg:px-6 px-2 overflow-auto relative">
      <div className="mb-6 flex text-xs justify-between pt-4 lg:pr-30 lg:p-8 sm:gap-4 lg:gap-8">
        <div>
          <PrimaryHeading>Dashboard</PrimaryHeading>
          <p className="text-stone-500 text-xs">Welcome back Atif</p>
        </div>
        <TripDurationFilter />
      </div>

      <div className="flex flex-col items-center gap-2 mb-12">
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
      <div className="flex flex-col lg:flex-row gap-30 items-center mb-15">
        {/* <Chart /> */}
        <BarChartUI data={durationalTrips} />
        {/* <PieChartUI
          totalPaidAmount={calcTotalItemsSum(trips, "receivedAmount")}
        /> */}
      </div>
      <div>
        <PrimaryHeading>Recent Trips</PrimaryHeading>
        <Trips trips={trips} />
      </div>
    </div>
  );
}

export default Dashboard;
