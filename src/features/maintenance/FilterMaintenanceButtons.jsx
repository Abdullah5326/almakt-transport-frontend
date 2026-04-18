import FilterButton from "../../ui/FilterButton";
import FilterButtons from "../../ui/FilterButtons";

function FilterMaintenanceButtons({ filterType, onFilterType }) {
  return (
    <FilterButtons>
      <FilterButton
        filterType={filterType}
        onClick={() => onFilterType("all")}
        focusValue="all"
      >
        All
      </FilterButton>
      <FilterButton
        filterType={filterType}
        onClick={() => onFilterType("diesel")}
        focusValue="diesel"
      >
        Diesel
      </FilterButton>
      <FilterButton
        filterType={filterType}
        onClick={() => onFilterType("spare-parts")}
        focusValue="spare-parts"
      >
        Spare Parts
      </FilterButton>
      <FilterButton
        filterType={filterType}
        onClick={() => onFilterType("labour-charge")}
        focusValue="labour-charge"
      >
        Labour Charge
      </FilterButton>
      <FilterButton
        filterType={filterType}
        onClick={() => onFilterType("oil-change")}
        focusValue="oil-change"
      >
        Oil Change
      </FilterButton>
    </FilterButtons>
  );
}

export default FilterMaintenanceButtons;
