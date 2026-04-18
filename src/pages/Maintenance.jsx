import { useState } from "react";
import MaintenanceListItem from "../features/maintenance/MaintenanceListItem";
import { useGetItems } from "../hooks/useGetItems";
import { addItem, getAllItems } from "../services/apiServices";
import LoadingSpinner from "../ui/LoadingSpinner";
import TabLayout from "../ui/TabLayout";
import FilterMaintenanceButtons from "../features/maintenance/FilterMaintenanceButtons";
import EmptyListText from "../ui/EmptyListText";
import { useAddItem } from "../hooks/useAddItem";
import AddMaintenanceAmountForm from "../features/maintenance/AddMaintenanceAmountForm";
import Modal from "../ui/Modal";

function Maintenance() {
  const queryKey = "maintenances";
  const [showAddMaintenanceForm, setShowAddMaintenanceForm] = useState(false);
  const [filterType, setFilterType] = useState("all");
  const { data: maintenances, isPending: isLoadingMaintenances } = useGetItems(
    queryKey,
    () => getAllItems("maintenances"),
  );
  const { addItem: addMaintenance, isPending: isAddingMaintenance } =
    useAddItem(addItem, queryKey);
  const [showOperationMenu, setShowOperationMenu] = useState(null);
  if (isLoadingMaintenances) return <LoadingSpinner />;
  const filterMaintenances = maintenances.filter(
    (item) => item?.category === filterType || filterType === "all",
  );
  return (
    <TabLayout
      name="Maintenance"
      description="Here is the maintenance details that you spend on vehicle"
      filter={
        <FilterMaintenanceButtons
          filterType={filterType}
          onFilterType={setFilterType}
        />
      }
      onClick={() => setShowAddMaintenanceForm(true)}
    >
      {showAddMaintenanceForm && (
        <Modal closeForm={() => setShowAddMaintenanceForm(false)}>
          <AddMaintenanceAmountForm
            btnText="Add Maintenance"
            name="Add Maintenance Amount"
            description="Fill the following details about the money spent on vehicle"
            operationFn={addMaintenance}
            isLoading={isAddingMaintenance}
            closeForm={() => setShowAddMaintenanceForm(false)}
          />
        </Modal>
      )}
      <div className="rounded-2xl bg-white h-100 lg:h-screen border-2 border-stone-200">
        <div className="border-b-2 border-stone-200 grid  md:grid-cols-[5rem_1fr_1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr] py-4 rounded-t-lg px-2 bg-orange-400 text-white font-bold">
          <p className="hidden md:block">S.No</p>
          <p>Vehicle</p>
          <p>Amount</p>
          <p className="hidden md:block">Description</p>
          <p className="">Date</p>
        </div>
        <ul className="divide-y divide-stone-100 overflow-y-auto h-80 relative lg:h-[90vh]">
          {filterMaintenances.length === 0 ? (
            <EmptyListText />
          ) : (
            filterMaintenances?.map((maintenance, i) => (
              <MaintenanceListItem
                maintenance={maintenance}
                no={i}
                key={maintenance._id}
                showOperationMenu={showOperationMenu}
                setShowOperationMenu={setShowOperationMenu}
              />
            ))
          )}
        </ul>
      </div>
    </TabLayout>
  );
}

export default Maintenance;
