import { useGetItems } from "../../hooks/useGetItems";
import { getAllItems } from "../../services/apiServices";
import PrimaryHeading from "../../ui/PrimaryHeading";
import DriverListItem from "./DriverListItem";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { useState } from "react";

function Driver() {
  const { data: drivers, isPending } = useGetItems("drivers", () =>
    getAllItems("drivers"),
  );
  const [showOperationDriverId, setShowOperationDriverId] = useState(null);

  if (isPending) return <LoadingSpinner />;
  return (
    <div>
      <div className="lg:p-8 p-2">
        <div className="mb-10">
          <PrimaryHeading>Drivers</PrimaryHeading>
          <p>Here is your business drivers</p>
        </div>
        <div className="rounded-2xl bg-white h-100 lg:h-screen border-2 border-stone-200">
          <div className="border-b-2 border-stone-200 grid  md:grid-cols-[5rem_1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr] py-4 rounded-t-lg px-2 bg-orange-400">
            <p className="hidden md:block">S.No</p>
            <p>Name</p>
            <p> Flat No</p>
            <p className="hidden md:block">Vehicle Renewal Date</p>
            <p className="hidden md:block">Id Card Expiry Date</p>
            <p className="hidden md:block">Credit</p>
            <p>Status</p>
          </div>
          <ul className="divide-y divide-stone-100 overflow-y-auto h-s lg:h-[90vh]">
            {drivers.map((driver, i) => (
              <DriverListItem
                driver={driver}
                no={i}
                key={driver.id}
                showOperationDriverId={showOperationDriverId}
                setShowOperationDriverId={setShowOperationDriverId}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Driver;
