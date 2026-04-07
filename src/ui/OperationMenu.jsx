import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import ButtonSmall from "./ButtonSmall";
import OperationTripForm from "../features/trip/addTripForm/OperationsTripForm";
import { useState } from "react";
import { useUpdateItem } from "../hooks/useUpdateItem";
import { updateItem } from "../services/apiServices";
import { useSelector } from "react-redux";
import Modal from "./Modal";

function OperationMenu({ disabledValue, operationDeleteFn, itemId, item }) {
  const [showUpdateTripForm, setShowUpdateTripForm] = useState(false);
  const { tripsDurationFilter } = useSelector((state) => state.trip);
  const { updateItem: updateTrip, isPending: isUpdatingTrip } = useUpdateItem(
    `last-${tripsDurationFilter}-trips`,
    updateItem,
  );
  function handleDeleteBtn(e) {
    e.stopPropagation();
    e.preventDefault();
    operationDeleteFn(itemId);
  }

  function handleEditBtn(e) {
    e.stopPropagation();
    e.preventDefault();
    setShowUpdateTripForm(true);
  }
  return (
    <div className="cursor-pointer flex gap-2 items-center lg:pr-4">
      <ButtonSmall disabledValue={disabledValue} onClick={handleDeleteBtn}>
        <HiOutlineTrash className="w-5 h-5 text-stone-500" />
      </ButtonSmall>
      <ButtonSmall disabledValue={disabledValue} onClick={handleEditBtn}>
        <HiOutlinePencil className="hover:text-yellow-900" />
      </ButtonSmall>
      {showUpdateTripForm && (
        <Modal>
          <OperationTripForm
            defaultValues={{
              ...item,
              startDate: new Date(item.startDate).toISOString().split("T")[0],
              deadlineDate: new Date(item.deadlineDate)
                .toISOString()
                .split("T")[0],
              client: item.client._id,
              driver: item.driver._id,
            }}
            name="Update The Trip"
            isPending={isUpdatingTrip}
            description="Update the fields that you want to change"
            closeForm={() => setShowUpdateTripForm(false)}
            submitBtnName="Update Trip"
            operationFn={updateTrip}
          />
        </Modal>
      )}
    </div>
  );
}

export default OperationMenu;
