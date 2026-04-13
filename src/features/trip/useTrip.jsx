import { useQuery } from "@tanstack/react-query";
import { getTrip } from "../../services/tripsApi";

export function useTrip() {
  const { data: trip, isPending: isLoadingTrip } = useQuery({
    queryKey: ["trip", tripId],
    queryFn: () => getTrip(tripId),
  });

  return { trip, isLoadingTrip };
}
