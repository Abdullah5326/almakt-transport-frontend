import { useDispatch, useSelector } from "react-redux";
import { HiOutlineCalendar } from "react-icons/hi2";
import { changeTripsDurationType } from "./../features/trip/tripSlice";

function TripDurationFilter() {
  const { tripsDurationType } = useSelector((state) => state.trip);
  function calcDateByDurationType() {
    if (tripsDurationType === "daily") return "today";
    if (tripsDurationType === "weekly") {
      const todayDate = new Date();
      const startWeekDate = new Date();
      startWeekDate.setDate(startWeekDate.getDate() - 7);
      return `${startWeekDate.toLocaleDateString("en-US", {
        day: "2-digit",
        weekday: "short",
      })} - ${todayDate.toLocaleDateString("en-US", {
        day: "2-digit",
        weekday: "short",
      })}`;
    }
    if (tripsDurationType == "monthly") {
      const todayDate = new Date();
      const startMonthDate = new Date();
      startMonthDate.setMonth(startMonthDate.getMonth() - 1);
      return `${startMonthDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      })} - ${todayDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      })}`;
    }
    if (tripsDurationType === "yearly") {
      const todayDate = new Date();
      const startYearDate = new Date();
      startYearDate.setFullYear(startYearDate.getFullYear() - 1);
      return `${startYearDate.toLocaleDateString("en-US", {
        month: "numeric",
        year: "2-digit",
      })} - ${todayDate.toLocaleDateString("en-US", {
        month: "numeric",
        year: "2-digit",
      })}`;
    }
  }
  const dispatch = useDispatch();
  return (
    <div className="flex bg-white rounded-lg h-8 text-stone-500 text-xs ">
      <p className="flex gap-1 items-center  border-r border-stone-200 px-1">
        <span>
          <HiOutlineCalendar />
        </span>
        <span>{calcDateByDurationType()}</span>
        {/* {tripsDurationType === "month"
          ? `${new Date(
              `${new Date().getMonth()}-${new Date().getDate()}-${new Date().getFullYear()}`,
            ).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}-${new Date().toLocaleDateString("en-Us", {
              day: "numeric",
              month: "short",
            })}`
          : `${new Date(
              `${new Date().getMonth() + 1}-${new Date().getDate()}-${new Date().getFullYear() - 1}`,
            ).toLocaleDateString("en-US", {
              year: "numeric",
              month: "numeric",
            })}-${new Date().toLocaleDateString("en-Us", {
              month: "numeric",
              year: "numeric",
            })}`} */}
      </p>
      <select
        name="trips-duration-options"
        id="trips-duration-option"
        className="  px-4  outline-none rounded-r-lg cursor-pointer"
        value={tripsDurationType}
        onChange={(e) => {
          dispatch(changeTripsDurationType(e.target.value));
        }}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
}

export default TripDurationFilter;
