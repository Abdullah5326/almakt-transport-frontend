import { HiOutlineCheckCircle, HiOutlineUser } from "react-icons/hi2";
import DetailsStatisticsBox from "../../ui/DetailsStatisticsBox";
import PrimaryHeading from "../../ui/PrimaryHeading";
import { FiDollarSign } from "react-icons/fi";
import { PiPathLight } from "react-icons/pi";
import BackButton from "../../ui/BackButton";

export default function DriverDetails() {
  return (
    <div className="p-8">
      <BackButton path="Drivers" />
      {/* Driver Heading Name  */}
      <div className="mb-8">
        <PrimaryHeading>Ahmad Khan</PrimaryHeading>
        <p className="text-sm text-stone-500">Toyota Corolla 2022 - LHR-4521</p>
      </div>

      {/* Driver Statistics Boxes  */}
      <div className="grid grid-cols-3 gap-10">
        <DetailsStatisticsBox stateName="Total Trips" value={8}>
          <p className="p-3 text-xl rounded-xl bg-blue-500 text-white">
            <PiPathLight className="h-6 w-6" />
          </p>
        </DetailsStatisticsBox>
        <DetailsStatisticsBox stateName="Completed Trips" value={8}>
          <p className="p-3 text-xl rounded-xl bg-green-500 text-white">
            <HiOutlineCheckCircle className="h-6 w-6" />
          </p>
        </DetailsStatisticsBox>
        <DetailsStatisticsBox stateName="Earned Money" value={50000}>
          <p className="p-3 text-xl rounded-xl bg-yellow-500 text-white">
            <FiDollarSign className="h-6 w-6" />
          </p>
        </DetailsStatisticsBox>
      </div>
    </div>
  );
}
