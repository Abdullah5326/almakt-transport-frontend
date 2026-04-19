import { SERVER_IMG_URL } from "../../constants";

function ProfileImage({ name }) {
  return (
    <div className="p-[1px] border border-orange-600 bg-white rounded-full">
      <img
        src={`${SERVER_IMG_URL}/img/users/${name}`}
        alt="Profile Picture"
        className="h-11 w-11 rounded-full"
      />
    </div>
  );
}

export default ProfileImage;
