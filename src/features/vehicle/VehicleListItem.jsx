import OperationMenu from "../../ui/OperationMenu";
import Modal from "../../ui/Modal";
import { useDeleteItem } from "../../hooks/useDeleteItem";
import { deleteItem, updateItem } from "../../services/apiServices";
import { useState } from "react";
import AddVehicleForm from "./AddVehicleForm";
import { useUpdateItem } from "../../hooks/useUpdateItem";

function VehicleListItem({ vehicle, no }) {
  const { updateItem: updateVehicle, isPending: isUpdatingVehicle } =
    useUpdateItem("vehicles", updateItem, "vehicles");
  const [showUpdateVehicleForm, setShowUpdateVehicle] = useState(false);
  const { deleteItem: deleteVehicle, isDeletingItem: isDeletingVehicle } =
    useDeleteItem(deleteItem, "vehicles", "vehicles");
  return (
    <li className=" capitalize grid md:grid-cols-[5rem_1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr] hover:bg-stone-100 transition-all py-4 rounded-t-lg px-2 cursor-pointer text-sm lg:text-[16px]">
      <p className="hidden md:block">{no + 1}</p>
      <p>{vehicle.name}</p>
      <p>
        <span>{vehicle.flatNo || "LHR 400"}</span>
      </p>
      <div className="hidden md:flex justify-around">
        <p>{new Date(vehicle.vehicleRenewalDate).toLocaleDateString()}</p>
        <OperationMenu
          operationDeleteFn={deleteVehicle}
          itemId={vehicle._id}
          disabledValue={isDeletingVehicle}
          toggleEditForm={setShowUpdateVehicle}
        />
        {showUpdateVehicleForm && (
          <Modal closeForm={() => setShowUpdateVehicle(false)}>
            <AddVehicleForm
              description="Fill the following inputs to update vehicle"
              name="Update Vehicle"
              closeForm={() => setShowUpdateVehicle(false)}
              btnText="Update Client"
              defaultValues={{
                ...vehicle,
                vehicleRenewalDate: new Date(vehicle.vehicleRenewalDate)
                  ?.toISOString()
                  .split("T")[0],
              }}
              operationFn={updateVehicle}
              isLoading={isUpdatingVehicle}
            />
          </Modal>
        )}
      </div>
    </li>
  );
}

export default VehicleListItem;
