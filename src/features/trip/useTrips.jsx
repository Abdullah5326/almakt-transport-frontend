import { useQuery } from "@tanstack/react-query";
import { getAllTrips as getAllTripsApi } from "../../services/tripsApi";

export function useTrips(durationType) {
  console.log(durationType);
  const { data: trips, isPending } = useQuery({
    queryKey: [`last-${durationType}-trips`],
    queryFn: () => {
      return getAllTripsApi(durationType);
    },
  });

  console.log(trips);
  return { trips, isPending };
}
