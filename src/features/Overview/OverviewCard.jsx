import { Children } from "react";
import { HiArrowTrendingUp, HiOutlineCheck } from "react-icons/hi2";
import CountUp from "react-countup";

function OverviewCard({ name, value, percentChange, onClick, children }) {
  return (
    <div
      className={`p max-w-90 w-full py-4 px-4 bg-white shadow-lg rounded-lg cursor-pointer   border border-stone-200`}
      onClick={onClick}
    >
      <div className="flex items-start gap-2">
        {children}
        <div className="flex justify-center flex-col">
          <p className="text-stone-400 text-md ">{name}</p>
          <p className="lg:text-4xl text-1xl t font-bold text-stone-900 mb-3">
            <CountUp start={0} end={value} duration={0.5} />
          </p>
        </div>
      </div>
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

export default OverviewCard;
