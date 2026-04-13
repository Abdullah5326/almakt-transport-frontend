import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { data, isPending } = useUser();

  useEffect(
    function () {
      if (!data && !isPending) navigate("/login");
    },
    [isPending, data, navigate],
  );

  if (isPending)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  if (data) return children;
}

export default ProtectedRoute;
