import { useNavigate } from "react-router-dom";
import OperationMenu from "./../../ui/OperationMenu";
import { useDeleteItem } from "./../../hooks/useDeleteItem";
import { deleteItem } from "../../services/apiServices";
import StatusTag from "../../ui/StatusTag";

function DriverListItem({ driver, no }) {
  const navigate = useNavigate();
  const { deleteItem: deleteDriver, isDeletingItem: isDeletingDriver } =
    useDeleteItem(deleteItem, "drivers", "drivers");

  return (
    <li
      className=" capitalize grid md:grid-cols-[5rem_1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr] hover:bg-stone-100 transition-all py-4 rounded-t-lg px-2 cursor-pointer text-sm lg:text-[16px]"
      onClick={() => navigate(`/drivers/${driver._id}`)}
    >
      <p className="hidden md:block">{no + 1}</p>
      <p>{driver.name}</p>
      <p>
        <span>{driver.vehicleFlatNo || "LHR 400"}</span>
        <span className="text-sm text-stone-600"> ({driver.vehicleName})</span>
      </p>
      <p className="hidden md:block">
        {new Date(driver.vehicleRenewalDate).toLocaleDateString()}
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
        <StatusTag
          value={driver.status === "active"}
          options={{ successText: "Active", errorText: "unactive" }}
        />

        <OperationMenu
          disabledValue={isDeletingDriver}
          itemId={driver._id}
          operationDeleteFn={deleteDriver}
        />
      </div>
    </li>
  );
}

export default DriverListItem;
