import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export function useUpdateItem(queryKey, mutationFn, endpoint) {
  const queryClient = useQueryClient();
  const { clientId } = useParams();
  const { driverId } = useParams();

  const { mutate: updateItem, isPending } = useMutation({
    mutationFn: (data) => mutationFn(data, endpoint),
    onSuccess: () => {
      toast.success("The item is updated successfully.");
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
      if (clientId) queryClient.invalidateQueries([`clients`, clientId]);
      if (driverId) queryClient.invalidateQueries([`clients`, driverId]);
    },
    onError: (err) => {
      console.log("err", err);
      toast.error("The item is not updated successfully");
    },
  });

  return { updateItem, isPending };
}
