import { useDispatch } from "react-redux";
import FilterButton from "./FilterButton";
import { changeTripsDurationType } from "../features/trip/tripSlice";

function FilterButtons({ children }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4 self-start px-6 border border-stone-100 rounded-md py-2 items-start bg-white">
      {children}
    </div>
  );
}

export default FilterButtons;
