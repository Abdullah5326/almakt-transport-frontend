import {
  Pie,
  PieChart,
  Sector,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";
// import { RechartsDevtools } from "@recharts/devtools"; // optional

// Sample data
const data = [
  { name: "Paid Amount", value: 400, color: "#f76707" },
  { name: "Remaining Amount", value: 300, color: "red" },
];

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * (midAngle || 0));
  const cos = Math.cos(-RADIAN * (midAngle || 0));

  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;

  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />

      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />

      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >
        {`PV ${value}`}
      </text>

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default function CustomActiveShapePieChart({
  isAnimationActive = true,
  defaultIndex,
}) {
  return (
    <ResponsiveContainer width="100%" height={240}>
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
          {data.map((entry) => (
            <Cell
              fill={entry.color}
              stroke={entry.color}
              key={entry.duration}
            />
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
