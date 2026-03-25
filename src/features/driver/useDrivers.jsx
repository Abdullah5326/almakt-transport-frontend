import { useQuery } from "@tanstack/react-query";
import { getAllDriver } from "../../services/driverApi";

export function useDrivers() {
  const { data: drivers, isPending } = useQuery({
    queryKey: ["drivers"],
    queryFn: getAllDriver,
  });

  return { drivers, isPending };
}
