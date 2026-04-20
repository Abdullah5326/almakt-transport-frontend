import { HiOutlinePencil } from "react-icons/hi";
import PrimaryButton from "../../ui/PrimaryButton";
import { parseDate } from "../../utils/utils";
import ProfilePersonalSectionItem from "./ProfilePersonalSectionItem";
import FormInputBox from "../../ui/FormInputBox";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SecondaryButton from "../../ui/SecondaryButton";
import { useUpdateItem } from "../../hooks/useUpdateItem";
import { updateMe } from "../../services/authApi";
import ProfileUpdateActionBtns from "./ProfileUpdateActionBtns";

function ProfilePersonalSection({ user }) {
  const [inputDisabled, setInputDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...user,
      mobileNo: "+971 52 213 1204",
      createdAt: parseDate(user.createdAt).replaceAll("/", "-"),
    },
  });
  const { updateItem: updateUser, isPending: isUpdating } = useUpdateItem(
    "user",
    updateMe,
  );

  function onSubmit(data) {
    console.log(data);
    updateUser(data, {
      onSuccess: () => {
        setInputDisabled(true);
      },
    });
  }
  return (
    <form
      className="bg-white px-8 py-6 rounded-lg shadow flex flex-col mb-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between border-b border-stone-100 pb-2">
        <h2 className="text-xl text-orange-500 ">Personal Information</h2>
        <ProfileUpdateActionBtns
          inputDisabled={inputDisabled}
          onInputDisabled={setInputDisabled}
          isUpdating={isUpdating}
        />
      </div>
      <div className="grid grid-cols-3 gap-y-6 mt-4">
        {/* <ProfilePersonalSectionItem name="Name" value={user.name} /> */}
        <FormInputBox>
          <p className="text-stone-500 text-sm">Name</p>
          <div className="w-44">
            <Input
              name="name"
              type="text"
              register={register}
              disabledValue={inputDisabled}
            />
          </div>
        </FormInputBox>
        <FormInputBox>
          <p className="text-stone-500 text-sm">Mobile No</p>
          <div className="w-44">
            <Input
              name="mobileNo"
              type="tel"
              register={register}
              disabledValue={inputDisabled}
            />
          </div>
        </FormInputBox>
        <FormInputBox>
          <p className="text-stone-500 text-sm">Created At</p>
          <div className="w-44">
            <Input
              name="createdAt"
              type="data"
              register={register}
              disabledValue={inputDisabled}
            />
          </div>
        </FormInputBox>
        <FormInputBox>
          <p className="text-stone-500 text-sm">Email</p>
          <div className="w-44">
            <Input
              name="email"
              type="email"
              register={register}
              disabledValue={inputDisabled}
            />
          </div>
        </FormInputBox>
        <FormInputBox>
          <p className="text-stone-500 text-sm">Role</p>
          <div className="w-44">
            <Input
              name="role"
              type="text"
              register={register}
              disabledValue={inputDisabled}
            />
          </div>
        </FormInputBox>
      </div>
    </form>
  );
}

export default ProfilePersonalSection;
