import ProfileAddressSection from "../features/authentication/ProfileAddressSection";
import ProfileHeader from "../features/authentication/ProfileHeader";
import ProfilePersonalSection from "../features/authentication/ProfilePersonalSection";
import { useUser } from "../features/authentication/useUser";
import LoadingSpinner from "../ui/LoadingSpinner";

function User() {
  const { data: user, isPending } = useUser();

  if (isPending) return <LoadingSpinner />;
  return (
    <div className="lg:p-8">
      <ProfileHeader user={user} />

      <ProfilePersonalSection user={user} />
      <ProfileAddressSection user={user} />
    </div>
  );
}

export default User;
