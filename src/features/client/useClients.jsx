import { useQuery } from "@tanstack/react-query";
import { getAllClients as getAllClientsApi } from "../../services/clientsApi";

export function useClients() {
  const { data: clients, isPending } = useQuery({
    queryKey: ["clients"],
    queryFn: getAllClientsApi,
  });

  return { clients, isPending };
}
