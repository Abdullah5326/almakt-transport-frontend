import { useQuery } from "@tanstack/react-query";

export function useGetItem(queryKey, queryFn, id) {
  const { data, isPending } = useQuery({
    queryKey: [queryKey, id],
    queryFn: () => queryFn(queryKey, id),
  });

  return { data, isPending };
}
