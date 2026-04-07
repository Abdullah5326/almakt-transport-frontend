import {
  Pie,
  PieChart,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

// Sample data
const data = [
  { name: "Paid Amount", value: 400, color: "#f76707" },
  { name: "Remaining Amount", value: 300, color: "red" },
];

export default function CustomActiveShapePieChart({
  isAnimationActive = true,
  defaultIndex,
}) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          nameKey="duration"
          dataKey="value"
          innerRadius={85}
          outerRadius={110}
          cx="40%"
          cy="50%"
          paddingAngle={3}
        >
          {data.map((entry, i) => (
            <Cell fill={entry.color} stroke={entry.color} key={i} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="middle"
          align="right"
          width="30%"
          layout="vertical"
          iconSize={15}
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
