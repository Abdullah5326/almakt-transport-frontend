import { HiArrowRightStartOnRectangle } from "react-icons/hi2";
import { useUser } from "../features/authentication/useUser";
import { useLogout } from "../features/authentication/useLogout";
import { useNavigate } from "react-router-dom";
import { SERVER_IMG_URL } from "../../constants";
import ProfileImage from "./ProfileImage";

function SidebarProfileItem() {
  const navigate = useNavigate();
  const { logout, isLogout } = useLogout();
  const { data: user, isPending } = useUser();
  if (isPending) return;
  return (
    <div className="flex justify-between items-center border-t border-orange-300 pt-4 px-4">
      <div
        className="flex gap-3 cursor-pointer"
        onClick={() => navigate("/profile")}
      >
        <ProfileImage name={user.profileImg} />
        <p className="flex flex-col text-sm">
          <span className="text-[15px] font-semibold capitalize">
            {user.name}
          </span>
          <span>{user.role}</span>
        </p>
      </div>
      <button
        onClick={logout}
        disabled={isLogout}
        className={`${isLogout ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        <HiArrowRightStartOnRectangle className="h-7 w-7" />
      </button>
    </div>
  );
}

export default SidebarProfileItem;
