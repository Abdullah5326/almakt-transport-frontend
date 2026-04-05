import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTrip as updateTripApi } from "../../services/tripsApi";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function useUpdateTrip() {
  const { tripsDurationFilter } = useSelector((state) => state.trip);
  const queryClient = useQueryClient();
  const { clientId } = useParams();
  const { driverId } = useParams();

  const { mutate: updateTrip, isPending: isUpdatingTrip } = useMutation({
    mutationFn: updateTripApi,
    onSuccess: () => {
      toast.success("The trip is updated successfully.");
      queryClient.invalidateQueries({
        queryKey: [`last-${tripsDurationFilter}-trips`],
      });
      if (clientId) queryClient.invalidateQueries([`clients`, clientId]);
      if (driverId) queryClient.invalidateQueries([`driver`, driverId]);
    },
    onError: () => {
      toast.error("The trip is not updated successfully");
    },
  });

  return { updateTrip, isUpdatingTrip };
}
