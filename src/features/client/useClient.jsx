import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getClient } from "../../services/clientsApi";

export function useClient() {
  const { clientId } = useParams();
  const { data: client, isPending: isLoadingClient } = useQuery({
    queryKey: ["client", clientId],
    queryFn: () => getClient(clientId),
  });

  return { client, isLoadingClient };
}
