import { useQuery } from "@tanstack/react-query";

export function useGetItem(queryKey, queryFn, id, endpoint) {
  const { data, isPending } = useQuery({
    queryKey: [queryKey, id],
    queryFn: () => queryFn(endpoint, id),
  });

  return { data, isPending };
}
