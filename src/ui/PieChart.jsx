"import { PieChart, Pie, Label } from 'recharts';\nimport { RechartsDevtools } from '@recharts/devtools';\n\n// #region Sample data\nconst data = [\n  { name: 'Group A', value: 400, fill: '#0088FE' },\n  { name: 'Group B', value: 300, fill: '#00C49F' },\n  { name: 'Group C', value: 300, fill: '#FFBB28' },\n  { name: 'Group D', value: 200, fill: '#FF8042' },\n];\n\n// #endregion\nconst MyPie = () => (\n  <Pie data={data} dataKey=\"value\" nameKey=\"name\" outerRadius=\"80%\" innerRadius=\"60%\" isAnimationActive={false} />\n);\n\n/**\n * This example shows how to use the `responsive` prop on charts inside a CSS grid container.\n * The `responsive` prop makes the chart automatically resize to fit its parent container.\n * By combining it with grid properties, you can create complex and responsive chart layouts.\n */\nexport default function PieChartInGrid() {\n  return (\n    <div style={{ width: '100%', minHeight: '500px' }}>\n      <p>\n        The <code>responsive</code> prop works well with CSS grid. The charts below are in a grid container. Resize the\n        window to see how they behave. Each chart is a grid item.\n      </p>\n      <div\n        style={{\n          display: 'grid',\n          gridTemplateColumns: 'repeat(3, 1fr)',\n          gridTemplateRows: 'repeat(3, 1fr)',\n          gap: '10px',\n          width: '100%',\n          minHeight: '400px',\n          border: '1px solid #ccc',\n          padding: '10px',\n        }}\n      >\n        <PieChart\n          responsive\n          style={{\n            gridColumn: '1 / 3',\n            gridRow: '1 / 3',\n            border: '1px solid #ddd',\n            maxWidth: '100%',\n            maxHeight: '100%',\n            aspectRatio: 1,\n          }}\n        >\n          <MyPie />\n          <Label position=\"center\" fill=\"#666\">\n            2x2 cell\n          </Label>\n          <RechartsDevtools />\n        </PieChart>\n\n        <PieChart\n          responsive\n          style={{\n            gridColumn: '3 / 4',\n            gridRow: '1 / 2',\n            border: '1px solid #ddd',\n            maxWidth: '100%',\n            maxHeight: '100%',\n            aspectRatio: 1,\n          }}\n        >\n          <MyPie />\n          <Label position=\"center\" fill=\"#666\">\n            1x1 cell\n          </Label>\n          <RechartsDevtools />\n        </PieChart>\n\n        <PieChart\n          responsive\n          style={{\n            gridColumn: '3 / 4',\n            gridRow: '2 / 3',\n            border: '1px solid #ddd',\n            maxWidth: '100%',\n            maxHeight: '100%',\n            aspectRatio: 1,\n          }}\n        >\n          <MyPie />\n          <Label position=\"center\" fill=\"#666\">\n            1x1 cell\n          </Label>\n          <RechartsDevtools />\n        </PieChart>\n\n        <PieChart\n          responsive\n          style={{\n            gridColumn: '1 / 4',\n            gridRow: '3 / 4',\n            border: '1px solid #ddd',\n            height: '100%',\n            // maxHeight: '200px',\n            aspectRatio: 1,\n            margin: '0 auto',\n          }}\n        >\n          <MyPie />\n          <Label position=\"center\" fill=\"#666\">\n            3x1 cell\n          </Label>\n          <RechartsDevtools />\n        </PieChart>\n      </div>\n    </div>\n  );\n}\n";
import { PieChart, Pie, Label } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
const data = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
  { name: "Group C", value: 300, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" },
];

// #endregion
const MyPie = () => (
  <Pie
    data={data}
    dataKey="value"
    nameKey="name"
    outerRadius="80%"
    innerRadius="60%"
    isAnimationActive={false}
  />
);

/**
 * This example shows how to use the `responsive` prop on charts inside a CSS grid container.
 * The `responsive` prop makes the chart automatically resize to fit its parent container.
 * By combining it with grid properties, you can create complex and responsive chart layouts.
 */
export default function PieChartInGrid() {
  return (
    <div style={{ width: "50%", minHeight: "300px" }}>
      <Label position="inside" fill="#000">
        value
      </Label>
      <PieChart
        responsive
        style={{
          gridColumn: "1 / 3",
          gridRow: "1 / 3",
          border: "1px solid #ddd",
          maxWidth: "90%",
          maxHeight: "100%",
          aspectRatio: 1,
        }}
      >
        <MyPie />
        <RechartsDevtools />
      </PieChart>
    </div>
  );
}
