import ButtonAddMember from "./ButtonAddMember";

function AddMemberButtons({
  showAddTripForm,
  showAddClientForm,
  showAddDriverForm,
  showAddVehicleForm,
}) {
  return (
    <div className="flex border border-stone-200 shadow-2xl absolute w-30 text-sm  z-100 top-8 right-3 animate-showForm flex-col bg-white  rounded-lg items-start divide-y divide-stone-300">
      <ButtonAddMember onClick={showAddTripForm}>Add Trip</ButtonAddMember>
      <ButtonAddMember onClick={showAddClientForm}>Add Client</ButtonAddMember>
      <ButtonAddMember onClick={showAddDriverForm}>Add Driver</ButtonAddMember>
      <ButtonAddMember onClick={showAddVehicleForm}>
        Add Vehicle
      </ButtonAddMember>
    </div>
  );
}

export default AddMemberButtons;
