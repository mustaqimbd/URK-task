import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { value: 20, value1: 20, value2: 20, value3: 20 },
  { value: "" },
  { value1: 25, value2: 25, value3: 25 },
  { value: "" },
  { value: 25, value1: 28, value2: 28, value3: 28 },
  { value: "" },
  { value1: 33, value2: 33, value3: 33 },
  { value: "" },
  { value: 30, value1: 38, value2: 38, value3: 38 },
  { value: "" },
  { value1: 42, value2: 42, value3: 42 },
  { value: "" },
  { value: 35, value1: 47, value2: 47, value3: 47 },
  { value: "" },
  { value1: 53, value2: 53, value3: 53 },
  { value: "" },
  { value: 40, value1: 60, value2: 60, value3: 60 },
  { value: "" },
  { value1: 70, value2: 70, value3: 70 },
  { value: "" },
  { value: 60, value1: 80, value2: 80, value3: 80 },
  { value: "" },
  { value1: 90, value2: 90, value3: 90 },
  { value: "" },
  { value: 65, value1: 100, value2: 100, value3: 100 },
];

const StackBarChart = () => {
  const formatYAxisTick = (tickValue) => `$${tickValue}`;
  const yAxisTicks = [0, 100, 200, 300];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart
        data={data}
        margin={{ top: 20 }}
      >
        <XAxis
          dataKey="value"
          axisLine={{ stroke: "none" }}
          tickLine={{ stroke: "none" }}
        />
        <YAxis
          axisLine={{ stroke: "none" }}
          tickLine={{ stroke: "none" }}
          tickFormatter={formatYAxisTick}
          domain={[0, 300]} 
          ticks={yAxisTicks}
        />
        <Bar dataKey="value1" stackId="stack" fill="#0E0F9F" />
        <Bar dataKey="value2" stackId="stack" fill="#4B3EFA" />
        <Bar dataKey="value3" stackId="stack" fill="#88B0FC" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackBarChart;
