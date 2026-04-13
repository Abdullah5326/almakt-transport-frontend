import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineTruck,
} from "react-icons/hi";
import DriverDetailsVehicleDetailsItem from "./DriverDetailsVehicleDetailsItem";

function DriverVehicleDetails({ driver }) {
  return (
    <div className="pt-4 grid grid-cols-3 ">
      <DriverDetailsVehicleDetailsItem
        name="vehicle"
        value={driver.vehicle?.name}
      >
        <span>
          <HiOutlineTruck className="text-orange-500" />
        </span>
      </DriverDetailsVehicleDetailsItem>
      <DriverDetailsVehicleDetailsItem
        name="Plate"
        value={driver.vehicle?.flatNo}
      >
        <span>
          <HiOutlineLocationMarker className="text-orange-500" />
        </span>
      </DriverDetailsVehicleDetailsItem>
      <DriverDetailsVehicleDetailsItem
        name="Renewal"
        value={driver.vehicle?.renewalDate}
      >
        <span>
          <HiOutlineCalendar className="text-orange-500" />
        </span>
      </DriverDetailsVehicleDetailsItem>
    </div>
  );
}

export default DriverVehicleDetails;
