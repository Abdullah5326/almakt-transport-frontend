import { useDispatch, useSelector } from "react-redux";
import { HiOutlineCalendar } from "react-icons/hi2";
import { changeTripsDurationFilter } from "./../features/trip/tripSlice";

function TripDurationFilter() {
  const { tripsDurationFilter } = useSelector((state) => state.trip);
  const dispatch = useDispatch();
  return (
    <div className="flex bg-white rounded-lg h-8 text-stone-500 text-xs ">
      <p className="flex gap-1 items-center  border-r border-stone-200 px-1">
        <span>
          <HiOutlineCalendar />
        </span>
        {tripsDurationFilter === "month"
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
            })}`}
      </p>
      <select
        name="trips-duration-options"
        id="trips-duration-option"
        className="  px-4  outline-none rounded-r-lg cursor-pointer"
        value={tripsDurationFilter}
        onChange={(e) => dispatch(changeTripsDurationFilter(e.target.value))}
      >
        <option value="month">Monthly</option>
        <option value="year">Yearly</option>
      </select>
    </div>
  );
}

export default TripDurationFilter;
