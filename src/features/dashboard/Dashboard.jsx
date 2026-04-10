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
import { formatCurrency } from "../../utils/utils";
import { useRef, useState } from "react";

function Dashboard() {
  const tripListRef = useRef(null);
  const { tripsDurationFilter, tripsDurationType } = useSelector(
    (state) => state.trip,
  );
  // const { data: allTrips, isPending } = useGetItems(
  //   `last-${tripsDurationFilter}-trips`,
  //   () => getAllItems(`trips/last-${tripsDurationFilter}-trips`),
  // );
  const { data: allTrips, isPending } = useGetItems(
    `trips-by-duration?duration=${tripsDurationType}`,
    () => getAllItems(`trips/trips-by-duration?duration=${tripsDurationType}`),
  );
  const [showAllTrips, setShowAllTrips] = useState(true);
  const { data: durationalTrips, isPending: isLoadingTrips } = useGetItems(
    "durational-trips",
    () => getAllItems(`trips/durational-trips`),
  );

  if (isPending || isLoadingTrips) return <LoadingSpinner />;
  const amountWithDriversTrips = allTrips.filter(
    (trip) => trip.paidTo === "driver",
  );
  return (
    <div className="lg:px-6 px-2  relative">
      <div className="mb-6 flex text-xs justify-between pt-4 lg:pr-30 lg:p-8 sm:gap-4 lg:gap-8">
        <div>
          <PrimaryHeading>Dashboard</PrimaryHeading>
          <p className="text-stone-500 text-xs">Welcome back Atif</p>
        </div>
        <TripDurationFilter />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-2 mb-12">
        <DashboardCard
          name="Total revenue"
          value={`${formatCurrency(calcTotalItemsSum(allTrips, "tripPrice"))}`}
          percentChange={20}
          onClick={() => {
            setShowAllTrips(true);
            tripListRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <DashboardCard
          name="Total Trips"
          value={allTrips.length}
          percentChange={10}
        />
        <DashboardCard
          name="Total Paid Amount"
          value={`${formatCurrency(calcTotalItemsSum(allTrips, "receivedAmount"))}`}
          percentChange={5}
          l
        />
        <DashboardCard
          name="Amount with Drivers"
          value={`${formatCurrency(calcTotalItemsSum(amountWithDriversTrips, "receivedAmount"))}`}
          percentChange={5}
          onClick={() => {
            setShowAllTrips(false);
            tripListRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-30 items-center mb-15">
        {/* <Chart /> */}
        <BarChartUI data={durationalTrips} />
      </div>
      <div ref={tripListRef}>
        <PrimaryHeading>Recent Trips</PrimaryHeading>
        <Trips trips={showAllTrips ? allTrips : amountWithDriversTrips} />
      </div>
    </div>
  );
}

export default Dashboard;
