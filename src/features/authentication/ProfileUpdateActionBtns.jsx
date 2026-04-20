import { HiOutlinePencil } from "react-icons/hi";
import PrimaryButton from "../../ui/PrimaryButton";
import SecondaryButton from "../../ui/SecondaryButton";

function ProfileUpdateActionBtns({
  inputDisabled,
  onInputDisabled,
  isUpdating,
}) {
  return (
    <div className="items-center h-10 flex">
      {inputDisabled ? (
        <div className="flex w-30 h-10">
          <PrimaryButton
            disabledValue={isUpdating}
            onClick={() => onInputDisabled((show) => !show)}
          >
            Edit
            <span>
              <HiOutlinePencil />
            </span>
          </PrimaryButton>
        </div>
      ) : (
        <div className="flex gap-4">
          <SecondaryButton
            disabledValue={isUpdating}
            onClick={() => onInputDisabled(true)}
          >
            Cancel
          </SecondaryButton>
          <div className="flex w-44">
            <PrimaryButton disabledValue={isUpdating} onClick={() => {}}>
              Save Changes
            </PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileUpdateActionBtns;
