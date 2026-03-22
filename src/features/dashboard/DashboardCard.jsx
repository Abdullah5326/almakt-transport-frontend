import { HiArrowTrendingUp } from "react-icons/hi2";

function DashboardCard({ name, value, percentChange }) {
  return (
    <div className="p-6 bg-white shadow-lg pr-30 rounded-lg border border-stone-200">
      <p className="text-stone-400 text-xs mb-3">{name}</p>
      <p className="text-4xl font-semibold text-stone-900 mb-3">{value}</p>
      {percentChange && (
        <p className="flex items-center gap-1 text-green-500">
          <span className="flex items-center">
            <HiArrowTrendingUp />
          </span>
          <span>{percentChange}% from last month</span>
        </p>
      )}
    </div>
  );
}

export default DashboardCard;
