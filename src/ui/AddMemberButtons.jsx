import ButtonAddMember from "./ButtonAddMember";

function AddMemberButtons({ showAddTripForm }) {
  return (
    <div className="flex border border-stone-200 shadow-2xl absolute w-30 text-sm  z-100 top-8 left-3 flex-col bg-white  rounded-lg items-start divide-y divide-stone-300">
      <ButtonAddMember onClick={showAddTripForm}>Add Trip</ButtonAddMember>
      <ButtonAddMember>Add Client</ButtonAddMember>
      <ButtonAddMember>Add Driver</ButtonAddMember>
    </div>
  );
}

export default AddMemberButtons;
