import { useNavigate } from "react-router-dom";
import OperationMenu from "./../../ui/OperationMenu";
import { useDeleteItem } from "./../../hooks/useDeleteItem";
import { deleteItem, updateItem } from "../../services/apiServices";
import StatusTag from "../../ui/StatusTag";
import { useUpdateItem } from "../../hooks/useUpdateItem";
import { useState } from "react";
import Modal from "../../ui/Modal";
import AddDriverForm from "./AddDriverForm";

function DriverListItem({ driver, no }) {
  const queryKey = "drivers";
  const navigate = useNavigate();
  const [showUpdateDriverForm, setShowUpdateDriverForm] = useState(false);
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
        <span className="text-sm text-stone-600">
          {" "}
          ({driver.vehicle?.name})
        </span>
      </p>
      <p className="hidden md:block">
        {new Date(driver.vehicle?.vehicleRenewalDate).toLocaleDateString()}
      </p>
      <p className="hidden md:block">
        {new Date(driver.idCardExpiryDate).toLocaleDateString()}
      </p>
      {/* <p
        className={`${driver.status.toLowerCase() === "active" ? "bg-green-500" : "bg-red-500"} px-2 text-white rounded-full justify-self-start flex items-center justify-center text-sm`}
      >
        {driver.status || "Active"}
      </p> */}
      <p className="hidden md:block">{driver.mobileNo}</p>
      <div className="flex justify-between items-center">
        <p
          className={`${driver.status === "active" && "bg-green-500"} ${driver.status === "inactive" && "bg-red-500"} 
      ${driver.status === "onLeave" && "bg-yellow-500"} text-white rounded-full px-2 `}
        >
          {driver.status}
        </p>

        <OperationMenu
          disabledValue={isDeletingDriver}
          itemId={driver._id}
          operationDeleteFn={deleteDriver}
          toggleEditForm={setShowUpdateDriverForm}
        />
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
      </div>
    </li>
  );
}

export default DriverListItem;
