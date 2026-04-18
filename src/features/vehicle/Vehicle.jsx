import { useState } from "react";
import { useGetItems } from "../../hooks/useGetItems";
import { addItem, getAllItems } from "../../services/apiServices";
import LoadingSpinner from "../../ui/LoadingSpinner";
import PrimaryHeading from "../../ui/PrimaryHeading";
import DriverListItem from "../driver/DriverListItem";
import VehicleListItem from "./VehicleListItem";
import PrimaryButton from "../../ui/PrimaryButton";
import Modal from "../../ui/Modal";
import AddVehicleForm from "./AddVehicleForm";
import { useAddItem } from "../../hooks/useAddItem";
import EmptyListText from "../../ui/EmptyListText";

function Vehicle() {
  const queryKey = "vehicles";
  const [showVehicleOperationMenu, setShowVehicleOperationMenu] =
    useState(null);
  const [showAddVehicleForm, setShowAddVehicleForm] = useState(false);
  const { data: vehicles, isPending: isLoadingVehicles } = useGetItems(
    queryKey,
    () => getAllItems("vehicles"),
  );
  const { addItem: addVehicle, isPending: isAddingVehicle } = useAddItem(
    addItem,
    queryKey,
  );

  if (isLoadingVehicles) return <LoadingSpinner />;
  return (
    <div className="lg:p-8 p-4">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <PrimaryHeading>Vehicle</PrimaryHeading>
          <p>Here is your business vehicles</p>
        </div>
        <div className="h-12 w-44 flex">
          <PrimaryButton onClick={() => setShowAddVehicleForm(true)}>
            Add Vehicle
          </PrimaryButton>
          {showAddVehicleForm && (
            <Modal closeForm={() => setShowAddVehicleForm(false)}>
              <AddVehicleForm
                btnText="Add Vehicle"
                name="Add Vehicle"
                description="Fill the following details to add new vehicle"
                operationFn={addVehicle}
                isLoading={isAddingVehicle}
                closeForm={() => setShowAddVehicleForm(false)}
              />
            </Modal>
          )}
        </div>
      </div>
      <div className="rounded-2xl bg-white h-100 lg:h-screen border-2 border-stone-200">
        <div className="border-b-2 border-stone-200 text-white font-semibold grid  md:grid-cols-[5rem_1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr] py-4 rounded-t-lg px-2 bg-orange-400">
          <p className="hidden md:block">S.No</p>
          <p>Name</p>
          <p>Vehicle Flat No</p>
          <p className="">Renewal</p>
        </div>
        <ul className="divide-y divide-stone-100 overflow-y-auto h-80 lg:h-[90vh] relative">
          {vehicles.length === 0 ? (
            <EmptyListText />
          ) : (
            vehicles?.map((vehicle, i) => (
              <VehicleListItem
                vehicle={vehicle}
                no={i}
                key={vehicle._id}
                setShowVehicleOperationMenu={setShowVehicleOperationMenu}
                showVehicleOperationMenu={showVehicleOperationMenu}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Vehicle;
