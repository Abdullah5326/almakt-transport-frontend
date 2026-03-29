import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTrip as addTripApi } from "../../services/tripsApi";
import toast from "react-hot-toast";

export function useAddTrip() {
  const queryClient = useQueryClient();
  const { mutate: addTrip, isPending: isAddingTrip } = useMutation({
    mutationFn: addTripApi,
    onSuccess() {
      toast.success("The trip is added successfully.");
      queryClient.invalidateQueries();
    },
    onError() {
      toast.error("The trip is not added.Please try again");
    },
  });

  return { addTrip, isAddingTrip };
}
