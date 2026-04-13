import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import ButtonSmall from "./ButtonSmall";
import { useDetectClickOutside } from "../hooks/useDetectClickOutside";
import { HiOutlineDocumentCurrencyDollar } from "react-icons/hi2";

function OperationMenu({
  disableDeleteValue,
  operationDeleteFn,
  itemId,
  toggleEditForm,
  disableUpdateValue,
  setOperationId,
  isCreditShow,
  showAddCreditForm,
}) {
  const ref = useDetectClickOutside(() => setOperationId(null), false);
  function handleDeleteBtn(e) {
    e.stopPropagation();
    e.preventDefault();
    const confirmDelete = window.confirm("confirm to delete the item");
    setOperationId(null);
    if (confirmDelete) operationDeleteFn(itemId);
  }

  function handleEditBtn(e) {
    e.stopPropagation();
    e.preventDefault();
    toggleEditForm(true);
    setOperationId(null);
  }

  function handleCreditBtn(e) {
    e.stopPropagation();
    e.preventDefault();
    showAddCreditForm();
    setOperationId(null);
  }
  return (
    <div
      className="cursor-pointer bg-white absolute animate-showForm border border-stone-200 right-3 z-55555 flex-col w-30 text-sm rounded-lg"
      ref={ref}
    >
      <ButtonSmall disabledValue={disableDeleteValue} onClick={handleDeleteBtn}>
        <HiOutlineTrash className="w-5 h-5 text-stone-500" />
        <span>Delete</span>
      </ButtonSmall>
      <ButtonSmall disabledValue={disableUpdateValue} onClick={handleEditBtn}>
        <HiOutlinePencil className="hover:text-yellow-900" />
        <span>Edit</span>
      </ButtonSmall>
      {isCreditShow && (
        <ButtonSmall
          disabledValue={disableUpdateValue}
          onClick={handleCreditBtn}
        >
          <HiOutlineDocumentCurrencyDollar className="hover:text-yellow-900" />
          <span>Add Credit</span>
        </ButtonSmall>
      )}
    </div>
  );
}

export default OperationMenu;
