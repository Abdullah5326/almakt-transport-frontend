import { useQuery } from "@tanstack/react-query";

export function useGetItems(queryKey, queryFn) {
  const { data, isPending } = useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
  });

  return { data, isPending };
}
