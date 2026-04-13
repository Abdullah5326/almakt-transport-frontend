import { HiDotsVertical } from "react-icons/hi";
import { parseDate } from "../../utils/utils";
import OperationMenu from "../../ui/OperationMenu";
import { useDeleteItem } from "../../hooks/useDeleteItem";
import { deleteItem, updateItem } from "../../services/apiServices";
import AddMaintenanceAmountForm from "./AddMaintenanceAmountForm";
import { useState } from "react";
import Modal from "../../ui/Modal";
import { useUpdateItem } from "../../hooks/useUpdateItem";

function MaintenanceListItem({
  maintenance,
  no,
  setShowOperationMenu,
  showOperationMenu,
}) {
  const [showEditMaintenanceAmountForm, setShowEditMaintenanceAmountForm] =
    useState(false);
  const { deleteItem: deleteMaintenance, isPending: isDeleting } =
    useDeleteItem(deleteItem, "maintenances", "maintenances");
  const { updateItem: updateMaintenance, isPending: isUpdatingMaintenances } =
    useUpdateItem("maintenances", updateItem, "maintenances");
  return (
    <li className="grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[5rem_1fr_1fr_1fr_1fr] py-4 hover:bg-stone-100 rounded-t-lg px-1 cursor-pointer">
      <p className="hidden md:block">{no + 1})</p>
      <p className="line-clamp-1">{maintenance.vehicle?.name || "Suzuki"}</p>

      <p className=""> {maintenance.amount}</p>
      <p className="hidden md:block">{maintenance.description}</p>
      <div className="flex justify-between items-center ">
        <p>{parseDate(maintenance.maintenanceDate)}</p>
        <div className="relative">
          <span
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              if (showOperationMenu) return setShowOperationMenu(null);
              setShowOperationMenu(maintenance._id);
            }}
          >
            <HiDotsVertical />
          </span>
          {showOperationMenu === maintenance._id && (
            <OperationMenu
              disableDeleteValue={isDeleting}
              operationDeleteFn={deleteMaintenance}
              setOperationId={setShowOperationMenu}
              itemId={maintenance._id}
              toggleEditForm={setShowEditMaintenanceAmountForm}
            />
          )}
          {showEditMaintenanceAmountForm && (
            <Modal closeForm={() => setShowEditMaintenanceAmountForm(false)}>
              <AddMaintenanceAmountForm
                name="Add Maintenance Amount"
                btnText="Update Amount"
                defaultValues={{
                  ...maintenance,
                  vehicle: maintenance.vehicle._id,
                }}
                closeForm={() => setShowEditMaintenanceAmountForm(false)}
                operationFn={updateMaintenance}
                isLoading={isUpdatingMaintenances}
              />
            </Modal>
          )}
        </div>
      </div>
    </li>
  );
}

export default MaintenanceListItem;
