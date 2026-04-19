import { HiOutlinePencil } from "react-icons/hi";
import ProfilePersonalSectionItem from "./ProfilePersonalSectionItem";
import PrimaryButton from "../../ui/PrimaryButton";

function ProfileAddressSection() {
  return (
    <div className="bg-white px-8 py-6 rounded-lg shadow flex flex-col">
      <div className="flex justify-between border-b border-stone-100 pb-2">
        <h2 className="text-xl text-orange-500 ">Personal Information</h2>
        <p className="w-32 h-10 flex">
          <PrimaryButton>
            Edit
            <span>
              <HiOutlinePencil />
            </span>
          </PrimaryButton>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-6 mt-4">
        <ProfilePersonalSectionItem name="Country" value="Dubai" />
        <ProfilePersonalSectionItem name="City" value="Sharjah" />
        <ProfilePersonalSectionItem name="Postal Code" value="1243" />
      </div>
    </div>
  );
}

export default ProfileAddressSection;
