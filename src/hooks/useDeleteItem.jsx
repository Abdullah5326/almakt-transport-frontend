import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export function useDeleteItem(deleteApiFn, queryKey, endpointPath) {
  const queryClient = useQueryClient();
  const { clientId } = useParams();
  const { mutate: deleteItem, isPending: isDeletingItem } = useMutation({
    mutationFn: (id) => deleteApiFn(endpointPath, id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey],
      });
      if (clientId) queryClient.invalidateQueries(["clients", clientId]);
      toast.success("Successfully deleted the item");
    },

    onError: (err) => {
      console.error(err.message);
      toast.error("The item is not deleted.Please try again");
    },
  });

  return { deleteItem, isDeletingItem };
}
