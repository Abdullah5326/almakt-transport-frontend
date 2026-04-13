import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/authApi";

export function useUser() {
  const { data, isPending } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["user"],
  });

  return { data, isPending };
}
