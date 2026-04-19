import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const { mutate: logout, isPending: isLogout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      navigate("/login");
      toast.success("You are successfully logout from your account");
    },
    onError: (err) => {
      console.error("CUSTOM", err);
      toast.error("There is an error to logout your account");
    },
  });

  return { logout, isLogout };
}
