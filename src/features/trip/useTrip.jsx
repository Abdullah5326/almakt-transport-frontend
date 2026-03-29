import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getTrip } from "../../services/tripsApi";

export function useTrip() {
  const { tripId } = useParams();
  const { data: trip, isPending: isLoadingTrip } = useQuery({
    queryKey: ["trip", tripId],
    queryFn: () => getTrip(tripId),
  });

  return { trip, isLoadingTrip };
}
