import { HiOutlinePencil } from "react-icons/hi";
import ProfilePersonalSectionItem from "./ProfilePersonalSectionItem";
import PrimaryButton from "../../ui/PrimaryButton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ProfileUpdateActionBtns from "./ProfileUpdateActionBtns";
import FormInputBox from "../../ui/FormInputBox";
import Input from "../../ui/Input";
import { useUpdateItem } from "../../hooks/useUpdateItem";
import { updateMe } from "../../services/authApi";

function ProfileAddressSection({ user }) {
  const [inputDisabled, setInputDisabled] = useState(true);
  const { updateItem: updateUser, isPending: isUpdatingUser } = useUpdateItem(
    "user",
    updateMe,
  );
  const { register, handleSubmit } = useForm({
    defaultValues: {
      ...user?.address,
    },
  });

  function onSubmit(data) {
    console.log(data);
    const address = { address: { ...data } };
    updateUser(address, {
      onSuccess: () => {
        setInputDisabled(false);
      },
    });
  }
  return (
    <form
      className="bg-white px-8 py-6 rounded-lg shadow flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between border-b border-stone-100 pb-2">
        <h2 className="text-xl text-orange-500 ">Personal Information</h2>
        <ProfileUpdateActionBtns
          inputDisabled={inputDisabled}
          onInputDisabled={setInputDisabled}
          isUpdating={isUpdatingUser}
        />
      </div>
      <div className="grid grid-cols-3 gap-y-6 mt-4">
        <FormInputBox>
          <p className="text-stone-500 text-sm">Country</p>
          <div className="w-44">
            <Input
              name="country"
              type="text"
              register={register}
              disabledValue={inputDisabled}
              placeholder="Add Country"
            />
          </div>
        </FormInputBox>
        <FormInputBox>
          <p className="text-stone-500 text-sm">City</p>
          <div className="w-44">
            <Input
              name="city"
              type="text"
              register={register}
              disabledValue={inputDisabled}
              placeholder="Add City"
            />
          </div>
        </FormInputBox>
        <FormInputBox>
          <p className="text-stone-500 text-sm">Postal Code</p>
          <div className="w-44">
            <Input
              name="postalCode"
              type="text"
              register={register}
              disabledValue={inputDisabled}
              placeholder="Add postal code"
            />
          </div>
        </FormInputBox>
        {/* <ProfilePersonalSectionItem name="Country" value="Dubai" />
        <ProfilePersonalSectionItem name="City" value="Sharjah" />
        <ProfilePersonalSectionItem name="Postal Code" value="1243" /> */}
      </div>
    </form>
  );
}

export default ProfileAddressSection;
