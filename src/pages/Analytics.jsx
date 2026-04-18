import { useDispatch, useSelector } from "react-redux";
import FilterButtons from "../ui/FilterButtons";
import OverviewCard from "../features/Analytics/OverviewCard";
import { useGetItems } from "../hooks/useGetItems";
import { getAllItems } from "../services/apiServices";
import LoadingSpinner from "../ui/LoadingSpinner";
import {
  HiArrowUp,
  HiArrowUturnRight,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineWallet,
} from "react-icons/hi2";
import FilterButton from "../ui/FilterButton";
import { changeTripsDurationType } from "../features/trip/tripSlice";

function Analytics() {
  const dispatch = useDispatch();
  const { tripsDurationType } = useSelector((state) => state.trip);
  const { data: trips, isPending: isLoadingTrips } = useGetItems(
    `trips-by-duration?duration=${tripsDurationType}`,
    () => getAllItems(`trips/trips-by-duration?duration=${tripsDurationType}`),
  );
  const { data: maintenances, isPending: isLoadingMaintenances } = useGetItems(
    "maintenances",
    () => getAllItems("maintenances"),
  );
  if (isLoadingTrips || isLoadingMaintenances) return <LoadingSpinner />;
  const completedTrips = trips.filter((trip) => trip.isCompleted);
  const totalRevenue = trips
    .filter((trip) => trip.paidTo !== "driver")
    .reduce((prev, cur) => prev + cur.receivedAmount, 0);
  function maintenanceAmount() {
    if (tripsDurationType === "daily") {
      const dailyMaintenanceAmount = maintenances
        .filter(
          (item) =>
            new Date(item.maintenanceDate) >=
            new Date(new Date().setHours(0, 0, 0, 0)),
        )
        .reduce((prev, item) => prev + item.amount, 0);
      return dailyMaintenanceAmount;
    }
    if (tripsDurationType === "weekly") {
      const weeklyMaintenanceAmount = maintenances
        .filter(
          (item) =>
            new Date(item.maintenanceDate) >=
            new Date(new Date().setDate(new Date().getDate() - 7)),
        )
        .reduce((prev, cur) => prev + cur.amount, 0);
      return weeklyMaintenanceAmount;
    }
    if (tripsDurationType === "monthly") {
      const monthlyMaintenanceAmount = maintenances
        .filter(
          (item) =>
            new Date(item.maintenanceDate) >=
            new Date(new Date().setMonth(new Date().getMonth() - 1)),
        )
        .reduce((prev, cur) => prev + cur.amount, 0);

      return monthlyMaintenanceAmount;
    }
    if (tripsDurationType === "yearly") {
      const yearlyMaintenanceAmount = maintenances
        .filter((item) => {
          return (
            new Date(item.maintenanceDate) >=
            new Date(new Date().setFullYear(new Date().getFullYear() - 1))
          );
        })
        .reduce((prev, cur) => prev + cur.amount, 0);
      return yearlyMaintenanceAmount;
    }
  }
  return (
    <div className="lg:p-8 text-stone-900">
      <div className="mb-8 flex flex-col">
        <h1 className="font-bold mb-8 text-4xl">
          Performance
          <span className="text-orange-500"> Metrics</span>
        </h1>
        <div className="flex justify-between items-center ">
          <p className="text-lg text-stone-500">
            Track your fleet's real-time performance, revenue, and key
            operational statistics.
          </p>
          <FilterButtons>
            <FilterButton
              onClick={() => dispatch(changeTripsDurationType("daily"))}
              focusValue="daily"
              filterType={tripsDurationType}
            >
              Daily Overview
            </FilterButton>
            <FilterButton
              onClick={() => dispatch(changeTripsDurationType("weekly"))}
              focusValue="weekly"
              filterType={tripsDurationType}
            >
              Weekly Stats
            </FilterButton>
            <FilterButton
              onClick={() => dispatch(changeTripsDurationType("monthly"))}
              focusValue="monthly"
              filterType={tripsDurationType}
            >
              Monthly Report
            </FilterButton>
            <FilterButton
              onClick={() => dispatch(changeTripsDurationType("yearly"))}
              focusValue="yearly"
              filterType={tripsDurationType}
            >
              Yearly Summary
            </FilterButton>
          </FilterButtons>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-y-8">
        <OverviewCard
          value={trips.length}
          name="Total Trips"
          percentChange={25}
        >
          <div className="p-4 bg-blue-50 rounded-lg">
            <span>
              <HiArrowUturnRight className="h-6 w-6 text-blue-500" />
            </span>
          </div>
        </OverviewCard>
        <OverviewCard
          value={completedTrips.length}
          name="Completed Trips"
          percentChange={43}
        >
          <div className="p-4 bg-green-100 rounded-lg">
            <span>
              <HiOutlineCheckCircle className="h-6 w-6 text-green-500" />
            </span>
          </div>
        </OverviewCard>
        <OverviewCard
          value={trips.length - completedTrips.length}
          name="Pending Trips"
          percentChange={91}
        >
          <div className="p-4 bg-yellow-100 rounded-lg">
            <span>
              <HiOutlineClock className="h-6 w-6 text-yellow-500" />
            </span>
          </div>
        </OverviewCard>
        <OverviewCard
          value={totalRevenue}
          name="Total Revenue"
          percentChange={20}
        >
          <div className="p-4 bg-green-100 rounded-lg">
            <span>
              <HiOutlineCurrencyDollar className="h-6 w-6 text-green-500" />
            </span>
          </div>
        </OverviewCard>
        <OverviewCard
          value={maintenanceAmount()}
          name="Total Expenses"
          percentChange={23}
        >
          <div className="p-4 bg-red-100 rounded-lg">
            <span>
              <HiOutlineWallet className="h-6 w-6 text-red-500" />
            </span>
          </div>
        </OverviewCard>
        <OverviewCard
          value={totalRevenue - maintenanceAmount()}
          name="Net Profit"
          percentChange={20}
        >
          <div className="p-4 bg-orange-100 rounded-lg">
            <span>
              <HiOutlineChartBar className="h-6 w-6 text-orange-500" />
            </span>
          </div>
        </OverviewCard>
      </div>
    </div>
  );
}

export default Analytics;
