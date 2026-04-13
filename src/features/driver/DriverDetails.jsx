import {
  HiOutlineCheckCircle,
  HiOutlineDocumentCurrencyDollar,
} from "react-icons/hi2";
import DetailsStatisticsBox from "../../ui/DetailsStatisticsBox";
import { FiDollarSign } from "react-icons/fi";
import { PiPathLight } from "react-icons/pi";
import BackButton from "../../ui/BackButton";
import { useParams } from "react-router-dom";
import { useGetItem } from "../../hooks/useGetItem";
import { getItem } from "../../services/apiServices";
import LoadingSpinner from "../../ui/LoadingSpinner";
import Trips from "../trip/Trips";
import DriverDetailsName from "./DriverDetailsName";
import DriverVehicleDetails from "./DriverVehicleDetails";
import { HiDotsVertical, HiOutlineCurrencyDollar } from "react-icons/hi";
import { formatCurrency } from "../../utils/utils";
import OperationMenu from "../../ui/OperationMenu";
import { useState } from "react";

export default function DriverDetails() {
  const { driverId } = useParams();
  const [showOperationMenu, setShowOperationMenu] = useState(false);
  const { data: driver, isPending: isLoadingDriver } = useGetItem(
    "driver",
    getItem,
    driverId,
    "drivers",
  );
  if (isLoadingDriver) return <LoadingSpinner />;
  const remainingAmountWithDriver = driver.trips
    .filter((trip) => trip.paidTo === "driver")
    .reduce((prev, cur) => prev + cur.receivedAmount, 0);
  return (
    <div className="lg:p-8 p-2 w-full h-full">
      <div className="flex justify-between">
        <BackButton path="Drivers" />
        {/* <div className="relative">
          <p onClick={() => setShowOperationMenu((show) => !show)}>
            <HiDotsVertical className="h-5 w-5" />
          </p>
          {showOperationMenu && <OperationMenu />}
        </div> */}
      </div>
      {/* Driver Heading Name  */}
      <div className="mb-8 bg-white p-8 rounded-lg border border-orange-200">
        <DriverDetailsName driver={driver} />
        <DriverVehicleDetails driver={driver} />
      </div>

      {/* Driver Statistics Boxes  */}
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-3 lg:gap-10 mb-10">
        <DetailsStatisticsBox
          stateName="Total Trips"
          value={driver.trips?.length || "-"}
        >
          <p className="p-3 text-xl rounded-xl bg-blue-500 text-white">
            <PiPathLight className="h-6 w-6" />
          </p>
        </DetailsStatisticsBox>

        <DetailsStatisticsBox
          stateName="Basic Salary"
          value={formatCurrency(driver.basicSalary)}
        >
          <p className="p-3 text-xl rounded-xl bg-green-500 text-white">
            <FiDollarSign className="h-6 w-6" />
          </p>
        </DetailsStatisticsBox>
        <DetailsStatisticsBox
          stateName="Remaining Trips Amount"
          value={formatCurrency(remainingAmountWithDriver)}
        >
          <p className="p-3 text-xl rounded-xl bg-red-500 text-white">
            <HiOutlineDocumentCurrencyDollar className="h-6 w-6" />
          </p>
        </DetailsStatisticsBox>
        <DetailsStatisticsBox
          stateName="Credit Taken"
          value={formatCurrency(driver?.creditAmount)}
        >
          <p className="p-3 text-xl rounded-xl bg-yellow-500 text-white">
            <HiOutlineCurrencyDollar className="h-6 w-6" />
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
