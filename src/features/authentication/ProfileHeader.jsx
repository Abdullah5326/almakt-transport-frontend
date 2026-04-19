import { useRef, useState } from "react";
import { HiOutlineCamera } from "react-icons/hi";

import { useUpdateItem } from "./../../hooks/useUpdateItem";
import { updateMe } from "../../services/authApi";
import { SERVER_IMG_URL } from "../../../constants";
import SpinnerExtraSmall from "../../ui/SpinnerExtraSmall";
import SmallSpinner from "../../ui/SmallSpinner";

function ProfileHeader({ user }) {
  const [preview, setPreview] = useState("");
  const fileRef = useRef(null);

  const { updateItem: updatePhoto, isPending: isUpdatingPhoto } = useUpdateItem(
    "user",
    updateMe,
    "users/updateMe",
  );

  function handleChange(e) {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    if (!selectedFile) return;

    // optional validation
    if (!selectedFile.type.startsWith("image")) {
      alert("Only image files are allowed");
      return;
    }

    // create preview
    const previewURL = URL.createObjectURL(selectedFile);
    setPreview(previewURL);

    const formData = new FormData();
    formData.append("photo", selectedFile);
    updatePhoto(formData);
    fileRef.current.value = "";
  }

  function handleClick() {
    fileRef.current.click();
  }

  console.log(location);
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold mb-8">My Profile</h1>
      <div className="bg-white w-full flex gap-3 px-8 py-6 rounded-lg shadow items-center">
        <div className="p-px bg-stone-100 border-2 border-orange-300 rounded-full">
          <img
            src={
              preview
                ? preview
                : user.profileImg
                  ? `${SERVER_IMG_URL}/img/users/${user.profileImg}`
                  : "/images/default.jpg"
            }
            alt="Profile"
            className="h-18 rounded-full border border-stone-400"
          />
          <div className="relative">
            <input
              type="file"
              className="hidden "
              ref={fileRef}
              onChange={handleChange}
            />
            <button
              className="absolute cursor-pointer right-0 bottom-0 p-1 rounded-full bg-white"
              onClick={handleClick}
              disabled={isUpdatingPhoto}
            >
              {isUpdatingPhoto ? (
                <SpinnerExtraSmall />
              ) : (
                <HiOutlineCamera className="text-orange-500" />
              )}
            </button>
          </div>
        </div>
        <div className="text-stone-500 text-sm space-y-1">
          <p className="text-xl text-orange-500 ">{user.name}</p>
          <p>{user.role}</p>
          <p>MANARAT AL KHAN GEN TRANSPORT LLC</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
