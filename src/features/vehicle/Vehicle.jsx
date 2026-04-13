import { useState } from "react";
import { useGetItems } from "../../hooks/useGetItems";
import { getAllItems } from "../../services/apiServices";
import LoadingSpinner from "../../ui/LoadingSpinner";
import PrimaryHeading from "../../ui/PrimaryHeading";
import DriverListItem from "../driver/DriverListItem";
import VehicleListItem from "./VehicleListItem";

function Vehicle() {
  const [showVehicleOperationMenu, setShowVehicleOperationMenu] =
    useState(null);
  const { data: vehicles, isPending: isLoadingVehicles } = useGetItems(
    "vehicles",
    () => getAllItems("vehicles"),
  );

  if (isLoadingVehicles) return <LoadingSpinner />;
  return (
    <div className="lg:p-8 p-4">
      <div className="mb-10">
        <PrimaryHeading>Vehicle</PrimaryHeading>
        <p>Here is your business vehicles</p>
      </div>
      <div className="rounded-2xl bg-white h-100 lg:h-screen border-2 border-stone-200">
        <div className="border-b-2 border-stone-200 grid  md:grid-cols-[5rem_1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr] py-4 rounded-t-lg px-2 bg-orange-400">
          <p className="hidden md:block">S.No</p>
          <p>Name</p>
          <p> Flat No</p>
          <p className="">Renewal</p>
        </div>
        <ul className="divide-y divide-stone-100 overflow-y-auto h-80 lg:h-[90vh]">
          {vehicles?.map((vehicle, i) => (
            <VehicleListItem
              vehicle={vehicle}
              no={i}
              key={vehicle._id}
              setShowVehicleOperationMenu={setShowVehicleOperationMenu}
              showVehicleOperationMenu={showVehicleOperationMenu}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Vehicle;
