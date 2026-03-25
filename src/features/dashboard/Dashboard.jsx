import { HiOutlineCalendar } from "react-icons/hi2";
import PrimaryHeading from "../../ui/PrimaryHeading";
import SecondaryHeading from "../../ui/SecondaryHeading";
import { useTrips } from "../trip/useTrips";
import DashboardCard from "./DashboardCard";
import RecentTrips from "./RecentTrips";
import { useState } from "react";
import { calcTotalItemsSum } from "../../utils/calcTotalItemsSum";

function Dashboard() {
  const [durationType, setDurationType] = useState("month");
  const { trips, isPending } = useTrips(durationType);

  if (isPending) return <div>Loading...</div>;
  return (
    <div className="px-6">
      <div className="mb-6 flex justify-between pr-30">
        <div>
          <PrimaryHeading>Dashboard</PrimaryHeading>
          <p className="text-stone-500 text-xs">Welcome back Atif</p>
        </div>
        <div className="flex bg-white rounded-lg h-8 text-sm text-stone-500 ">
          <p className="flex gap-1 items-center  border-r border-stone-200 px-2">
            <span>
              <HiOutlineCalendar />
            </span>
            {durationType === "month"
              ? `${new Date(
                  `${new Date().getMonth()}-${new Date().getDate()}-${new Date().getFullYear()}`,
                ).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}-${new Date().toLocaleDateString("en-Us", {
                  day: "numeric",
                  month: "short",
                })}`
              : new Date().toLocaleDateString("en-Us", {
                  month: "short",
                  day: "numeric",
                })}
          </p>
          <select
            name="trips-duration-options"
            id="trips-duration-option"
            className="  px-4  outline-none rounded-r-lg cursor-pointer"
            value={durationType}
            onChange={(e) => setDurationType(e.target.value)}
          >
            <option value="month">Monthly</option>
            <option value="year">Yearly</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-12">
        <DashboardCard
          name="Total revenue"
          value={`$${calcTotalItemsSum(trips, "priceOfTrip")}`}
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
      <RecentTrips recentTrips={trips} />
    </div>
  );
}

export default Dashboard;
