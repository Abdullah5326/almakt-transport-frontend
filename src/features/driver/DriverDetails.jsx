import {
  HiOutlineCheckCircle,
  HiOutlineDocumentCurrencyDollar,
  HiOutlineUser,
} from "react-icons/hi2";
import DetailsStatisticsBox from "../../ui/DetailsStatisticsBox";
import PrimaryHeading from "../../ui/PrimaryHeading";
import { FiDollarSign } from "react-icons/fi";
import { PiPathLight } from "react-icons/pi";
import BackButton from "../../ui/BackButton";
import { useParams } from "react-router-dom";
import { useGetItem } from "../../hooks/useGetItem";
import { getItem } from "../../services/apiServices";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { countItemsByStatus } from "../../utils/utils";
import Trips from "../trip/Trips";

export default function DriverDetails() {
  const { driverId } = useParams();
  const { data: driver, isPending: isLoadingDriver } = useGetItem(
    "drivers",
    getItem,
    driverId,
  );
  if (isLoadingDriver) return <LoadingSpinner />;
  return (
    <div className="p-8 w-full h-full">
      <BackButton path="Drivers" />
      {/* Driver Heading Name  */}
      <div className="mb-8">
        <PrimaryHeading>{driver?.name}</PrimaryHeading>
        <p className="text-sm text-stone-500">{driver.vehicleName}</p>
      </div>

      {/* Driver Statistics Boxes  */}
      <div className="grid grid-cols-4 gap-10 mb-10">
        <DetailsStatisticsBox
          stateName="Total Trips"
          value={driver.trips.length}
        >
          <p className="p-3 text-xl rounded-xl bg-blue-500 text-white">
            <PiPathLight className="h-6 w-6" />
          </p>
        </DetailsStatisticsBox>
        <DetailsStatisticsBox
          stateName="Completed Trips"
          value={countItemsByStatus(driver.trips)}
        >
          <p className="p-3 text-xl rounded-xl bg-green-500 text-white">
            <HiOutlineCheckCircle className="h-6 w-6" />
          </p>
        </DetailsStatisticsBox>
        <DetailsStatisticsBox
          stateName="Basic Salary"
          value={driver.basicSalary || 50000}
        >
          <p className="p-3 text-xl rounded-xl bg-yellow-500 text-white">
            <FiDollarSign className="h-6 w-6" />
          </p>
        </DetailsStatisticsBox>
        <DetailsStatisticsBox
          stateName="Remaining Amount"
          value={driver.basicSalary || 50000}
        >
          <p className="p-3 text-xl rounded-xl bg-red-500 text-white">
            <HiOutlineDocumentCurrencyDollar className="h-6 w-6" />
          </p>
        </DetailsStatisticsBox>
      </div>
      {/* Driver Trips  */}
      <div>
        <Trips trips={driver.trips} height={50} />
      </div>
    </div>
  );
}
