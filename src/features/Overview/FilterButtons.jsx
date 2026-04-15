import { useDispatch } from "react-redux";
import FilterButton from "./FilterButton";
import { changeTripsDurationType } from "../trip/tripSlice";

function FilterButtons() {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-4 self-start px-6 border border-stone-100 rounded-md py-2 items-start bg-white">
      <FilterButton onClick={() => dispatch(changeTripsDurationType("daily"))}>
        Daily Overview
      </FilterButton>
      <FilterButton onClick={() => dispatch(changeTripsDurationType("weekly"))}>
        Weekly Stats
      </FilterButton>
      <FilterButton
        onClick={() => dispatch(changeTripsDurationType("monthly"))}
      >
        Monthly Report
      </FilterButton>
      <FilterButton onClick={() => dispatch(changeTripsDurationType("yearly"))}>
        Yearly Summary
      </FilterButton>
    </div>
  );
}

export default FilterButtons;
