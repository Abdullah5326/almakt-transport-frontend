import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import ButtonSmall from "./ButtonSmall";

function OperationMenu({
  disableDeleteValue,
  operationDeleteFn,
  itemId,
  toggleEditForm,
  disableUpdateValue,
}) {
  function handleDeleteBtn(e) {
    e.stopPropagation();
    e.preventDefault();
    operationDeleteFn(itemId);
  }

  function handleEditBtn(e) {
    e.stopPropagation();
    e.preventDefault();
    toggleEditForm(true);
  }
  return (
    <div className="cursor-pointer flex gap-1 md:gap-2 items-center lg:pr-4">
      <ButtonSmall disabledValue={disableDeleteValue} onClick={handleDeleteBtn}>
        <HiOutlineTrash className="w-5 h-5 text-stone-500" />
      </ButtonSmall>
      <ButtonSmall disabledValue={disableUpdateValue} onClick={handleEditBtn}>
        <HiOutlinePencil className="hover:text-yellow-900" />
      </ButtonSmall>
    </div>
  );
}

export default OperationMenu;
