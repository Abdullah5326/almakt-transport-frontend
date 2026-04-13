import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTrip as deleteTripApi } from "./../../services/tripsApi";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export function useDeleteTrip() {
  const queryClient = useQueryClient();
  const { clientId } = useParams();
  const { tripsDurationType } = useSelector((state) => state.trip);
  const { mutate: deleteTrip, isPending: isDeletingTrip } = useMutation({
    mutationFn: deleteTripApi,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`trips-by-duration?duration=${tripsDurationType}`],
      });
      if (clientId) queryClient.invalidateQueries(["clients", clientId]);
      toast.success("Successfully deleted the trip");
    },

    onError: (err) => {
      console.error(err.message);
      toast.error("The trip is not deleted.Please try again");
    },
  });

  return { deleteTrip, isDeletingTrip };
}
