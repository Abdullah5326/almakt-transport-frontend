import { useDispatch, useSelector } from "react-redux";
import FilterButton from "./FilterButton";
import FilterButtons from "./FilterButtons";
import { changeTripsDurationType } from "../features/trip/tripSlice";

function TripFilterType() {
  const dispatch = useDispatch();
  const { tripsDurationType } = useSelector((state) => state.trip);
  return (
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
  );
}

export default TripFilterType;
