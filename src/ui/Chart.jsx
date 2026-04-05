import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "Mon", trips: 4 },
  { name: "Tue", trips: 7 },
  { name: "Wed", trips: 3 },
  { name: "Thu", trips: 6 },
  { name: "Fri", trips: 2 },
  { name: "Sat", trips: 6 },
  { name: "Sun", trips: 1 },
];

export default function MyChart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="trips" stroke="#ff6600" />
    </LineChart>
  );
}
