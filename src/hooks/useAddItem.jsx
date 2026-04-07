import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useAddItem(addItemFn, queryKey) {
  const queryClient = useQueryClient();
  const { mutate: addItem, isPending } = useMutation({
    mutationFn: (data) => addItemFn(queryKey, data),
    onSuccess() {
      toast.success("The item is added successfully.");
      queryClient.invalidateQueries([queryKey]);
    },
    onError(err) {
      console.log(err);
      toast.error("The item is not added.Please try again");
    },
  });

  return { addItem, isPending };
}
