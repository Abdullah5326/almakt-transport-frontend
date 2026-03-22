import PrimaryHeading from "../../ui/PrimaryHeading";
import SecondaryHeading from "../../ui/SecondaryHeading";
import DashboardCard from "./DashboardCard";
import RecentTrips from "./RecentTrips";

function Dashboard() {
  return (
    <div className="px-6">
      <div className="mb-6">
        <PrimaryHeading>Dashboard</PrimaryHeading>
        <p className="text-stone-500 text-xs">Welcome back Atif</p>
      </div>

      <div className="flex items-center gap-4 mb-12">
        <DashboardCard
          name="Total revenue"
          value={`$${4023}`}
          percentChange={20}
        />
        <DashboardCard name="Total Trips" value={23} percentChange={10} />
        <DashboardCard
          name="Total Paid Amount"
          value={`$${4023}`}
          percentChange={5}
        />
      </div>
      <RecentTrips />
    </div>
  );
}

export default Dashboard;
