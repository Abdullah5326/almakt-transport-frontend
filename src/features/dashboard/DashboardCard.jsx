import { HiArrowTrendingUp } from "react-icons/hi2";

function DashboardCard({ name, value, percentChange, onClick }) {
  return (
    <div
      className="p max-w-90 w-full py-4 px-4 bg-white shadow-lg rounded-lg cursor-pointer   border border-stone-200"
      onClick={onClick}
    >
      <p className="text-stone-400 text-xs lg-text-md mb-3">{name}</p>
      <p className="lg:text-4xl text-1xl t font-bold text-stone-900 mb-3">
        {value}
      </p>
      {percentChange && (
        <p className="flex items-center gap-1 text-green-500 ">
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
