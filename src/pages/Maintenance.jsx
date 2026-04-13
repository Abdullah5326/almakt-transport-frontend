import { useState } from "react";
import MaintenanceListItem from "../features/maintenance/MaintenanceListItem";
import { useGetItems } from "../hooks/useGetItems";
import { getAllItems } from "../services/apiServices";
import LoadingSpinner from "../ui/LoadingSpinner";
import TabLayout from "../ui/TabLayout";

function Maintenance() {
  const { data: maintenances, isPending: isLoadingMaintenances } = useGetItems(
    "maintenances",
    () => getAllItems("maintenances"),
  );
  const [showOperationMenu, setShowOperationMenu] = useState(null);
  if (isLoadingMaintenances) return <LoadingSpinner />;
  return (
    <TabLayout
      name="Maintenance"
      description="Here is the maintenance details that you spend on vehicle"
    >
      <div className="rounded-2xl bg-white h-100 lg:h-screen border-2 border-stone-200">
        <div className="border-b-2 border-stone-200 grid  md:grid-cols-[5rem_1fr_1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr] py-4 rounded-t-lg px-2 bg-orange-400 text-white font-bold">
          <p className="hidden md:block">S.No</p>
          <p>Vehicle</p>
          <p>Amount</p>
          <p className="hidden md:block">Description</p>
          <p className="">Date</p>
        </div>
        <ul className="divide-y divide-stone-100 overflow-y-auto h-80 lg:h-[90vh]">
          {maintenances?.map((maintenance, i) => (
            <MaintenanceListItem
              maintenance={maintenance}
              no={i}
              key={maintenance._id}
              showOperationMenu={showOperationMenu}
              setShowOperationMenu={setShowOperationMenu}
            />
          ))}
        </ul>
      </div>
    </TabLayout>
  );
}

export default Maintenance;
