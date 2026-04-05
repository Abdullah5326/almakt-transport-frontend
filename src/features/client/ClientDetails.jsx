import { FiDollarSign } from "react-icons/fi";
import Trips from "./../trip/Trips";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  HiArrowLeft,
  HiOutlineCheckCircle,
  HiOutlinePhone,
} from "react-icons/hi2";
import { useClient } from "./useClient";
import { calcTotalItemsSum } from "../../utils/calcTotalItemsSum";
import { countItemsByStatus } from "../../utils/utils";
import DetailsStatisticsBox from "../../ui/DetailsStatisticsBox";
import { PiPath } from "react-icons/pi";
import BackButton from "../../ui/BackButton";

function ClientDetails() {
  const { client, isLoadingClient } = useClient();

  if (isLoadingClient) return <div>Loading...</div>;
  return (
    <div className="p-8 ">
      {/* Back button */}
      <BackButton path="Clients" />

      {/* Customer Details */}
      <div className="bg-white p-8 border border-stone-200 rounded-xl mb-8">
        <h2 className="text-xl font-bold mb-4 capitalize">{client?.name}</h2>
        <div className="text-stone-500 text-sm flex gap-10">
          <p className="flex items-center gap-2">
            <span>
              <HiOutlinePhone className="h-4 w-4" />
            </span>
            <span>{client.mobileNo || "Add a mobile no"}</span>
          </p>
          <p className="flex items-center gap-2">
            <span>
              <HiOutlineLocationMarker className="h-4 w-4" />
            </span>
            <span>{client.address || "Add Address"}</span>
          </p>
        </div>
      </div>

      {/* Client Statistics  */}
      <div className="grid grid-cols-3 gap-2  w-full mb-8">
        <DetailsStatisticsBox
          stateName="Total Trips"
          value={client?.trips.length || "No Trips"}
        >
          <p className="p-3 text-xl rounded-xl bg-blue-500 text-white">
            <PiPath />
          </p>
        </DetailsStatisticsBox>
        <DetailsStatisticsBox
          stateName="Completed Trips"
          value={countItemsByStatus(client.trips)}
        >
          <p className="p-3 text-xl rounded-xl bg-green-500 text-white">
            <HiOutlineCheckCircle />
          </p>
        </DetailsStatisticsBox>
        <DetailsStatisticsBox
          stateName="Total Spent Money"
          value={calcTotalItemsSum(client.trips, "receivedAmount")}
        >
          <p className="p-3 text-xl rounded-xl bg-yellow-500 text-white">
            <FiDollarSign />
          </p>
        </DetailsStatisticsBox>
      </div>

      {/* Trip  */}
      <Trips trips={client.trips} height={80} />
    </div>
  );
}

export default ClientDetails;
