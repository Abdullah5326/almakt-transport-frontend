import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

function BarChartUI({ isAnimationActive = true, data: durationalTrips }) {
  const data = durationalTrips?.map((trip) => {
    return { name: trip.month, trips: trip.totalTrips };
  });
  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="trips"
        fill="#f76707"
        isAnimationActive={isAnimationActive}
      />
      <RechartsDevtools />
    </BarChart>
  );
}

export default BarChartUI;
