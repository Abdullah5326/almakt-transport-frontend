import { useDetectClickOutside } from "../hooks/useDetectClickOutside";
import ButtonAddMember from "./ButtonAddMember";

function AddMemberButtons({
  showAddTripForm,
  showAddClientForm,
  showAddDriverForm,
  showAddVehicleForm,
  setAddMemberContainer,
  showAddMaintenanceForm,
}) {
  const ref = useDetectClickOutside(() => setAddMemberContainer(false));
  return (
    <div
      className="flex border border-stone-200 shadow-2xl absolute w-35 text-sm  z-100 top-8 right-3 animate-showForm flex-col bg-white  rounded-lg items-start divide-y divide-stone-300"
      ref={ref}
    >
      <ButtonAddMember onClick={showAddTripForm}>Add Trip</ButtonAddMember>
      <ButtonAddMember onClick={showAddClientForm}>Add Client</ButtonAddMember>
      <ButtonAddMember onClick={showAddDriverForm}>Add Driver</ButtonAddMember>
      <ButtonAddMember onClick={showAddVehicleForm}>
        Add Vehicle
      </ButtonAddMember>
      <ButtonAddMember onClick={showAddMaintenanceForm}>
        Add Maintenance
      </ButtonAddMember>
    </div>
  );
}

export default AddMemberButtons;
