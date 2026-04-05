import { useQuery } from "@tanstack/react-query";
import { getAllTrips as getAllTripsApi } from "../../services/tripsApi";

export function useTrips(durationType) {
  const { data: trips, isPending } = useQuery({
    queryKey: [`last-${durationType}-trips`],
    queryFn: () => getAllTripsApi(durationType),
  });

  return { trips, isPending };
}
