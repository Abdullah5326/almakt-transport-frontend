import { useNavigate } from "react-router-dom";
import OperationMenu from "./../../ui/OperationMenu";
import { useDeleteItem } from "./../../hooks/useDeleteItem";
import { deleteItem, updateItem } from "../../services/apiServices";
import StatusTag from "../../ui/StatusTag";
import { useUpdateItem } from "../../hooks/useUpdateItem";
import { useState } from "react";
import Modal from "../../ui/Modal";
import AddDriverForm from "./AddDriverForm";
import { HiDotsVertical } from "react-icons/hi";
import AddCreditForm from "./AddCreditForm";

function DriverListItem({
  driver,
  no,
  setShowOperationDriverId,
  showOperationDriverId,
}) {
  const queryKey = "drivers";
  const navigate = useNavigate();
  const [showUpdateDriverForm, setShowUpdateDriverForm] = useState(false);
  const [showAddCreditForm, setShowAddCreditForm] = useState(false);
  const { deleteItem: deleteDriver, isDeletingItem: isDeletingDriver } =
    useDeleteItem(deleteItem, queryKey, "drivers");
  const { updateItem: updateDriver, isPending: isUpdatingDriver } =
    useUpdateItem(queryKey, updateItem, "drivers");

  return (
    <li
      className=" capitalize grid md:grid-cols-[5rem_1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr] hover:bg-stone-100 transition-all py-4 rounded-t-lg px-2 cursor-pointer text-sm lg:text-[16px]"
      onClick={() => navigate(`/drivers/${driver._id}`)}
    >
      <p className="hidden md:block">{no + 1}</p>
      <p>{driver.name}</p>
      <p>
        <span>{driver.vehicle?.flatNo}</span>
        <span className="text-sm text-stone-600">({driver.vehicle?.name})</span>
      </p>
      <p className="hidden md:block">
        {new Date(driver.vehicle?.vehicleRenewalDate).toLocaleDateString()}
      </p>
      <p className="hidden md:block">
        {new Date(driver.idCardExpiryDate).toLocaleDateString()}
      </p>

      <p className="hidden md:block">{driver?.creditAmount || "-"}</p>
      <div className="flex justify-between items-center">
        <p
          className={`${driver.status === "active" && "bg-green-500"} ${driver.status === "inactive" && "bg-red-500"} 
      ${driver.status === "onLeave" && "bg-yellow-500"} text-white rounded-full px-2 `}
        >
          {driver.status}
        </p>
        <div className="relative">
          <span
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (showOperationDriverId) return setShowOperationDriverId(null);
              setShowOperationDriverId(driver._id);
            }}
            className="hover:bg-white "
          >
            <HiDotsVertical />
          </span>
          {showOperationDriverId === driver._id && (
            <OperationMenu
              disabledValue={isDeletingDriver}
              itemId={driver._id}
              operationDeleteFn={deleteDriver}
              toggleEditForm={setShowUpdateDriverForm}
              setOperationId={setShowOperationDriverId}
              isCreditShow={true}
              showAddCreditForm={() => setShowAddCreditForm(true)}
            />
          )}
        </div>

        {showUpdateDriverForm && (
          <Modal closeForm={() => setShowUpdateDriverForm(false)}>
            <AddDriverForm
              defaultValues={{
                ...driver,
                idCardExpiryDate: new Date(driver.idCardExpiryDate)
                  ?.toISOString()
                  .split("T")[0],
                vehicle: driver.vehicle?._id,
              }}
              name="Update Driver"
              isPending={isUpdatingDriver}
              description="Update the fields that you want to change"
              closeForm={() => setShowUpdateDriverForm(false)}
              btnText="Update Driver"
              operationFn={updateDriver}
            />
          </Modal>
        )}
        {showAddCreditForm && (
          <Modal closeForm={() => setShowAddCreditForm(false)}>
            <AddCreditForm
              closeForm={() => setShowAddCreditForm(false)}
              name="Add Credit"
              description="Add the amount for credits"
              btnText="Add Credit"
              defaultValues={{
                _id: driver._id,
                creditAmount: driver?.creditAmount,
              }}
            />
          </Modal>
        )}
      </div>
    </li>
  );
}

export default DriverListItem;
