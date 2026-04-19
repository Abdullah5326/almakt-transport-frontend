import { HiOutlinePencil } from "react-icons/hi";
import PrimaryButton from "../../ui/PrimaryButton";
import { parseDate } from "../../utils/utils";
import ProfilePersonalSectionItem from "./ProfilePersonalSectionItem";

function ProfilePersonalSection({ user }) {
  return (
    <div className="bg-white px-8 py-6 rounded-lg shadow flex flex-col mb-6">
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
        <ProfilePersonalSectionItem name="Name" value={user.name} />
        <ProfilePersonalSectionItem name="Mobile No" value="+971 52 213 1204" />
        <ProfilePersonalSectionItem
          name="Account Create Date"
          value={parseDate(user.createdAt).replaceAll("/", "-")}
        />
        <ProfilePersonalSectionItem name="Email" value={user.email} />
        <ProfilePersonalSectionItem name="Role" value={user.role} />
      </div>
    </div>
  );
}

export default ProfilePersonalSection;
