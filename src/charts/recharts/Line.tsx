import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { datasetsLine } from "../data";

const dataDefault = new Array(datasetsLine[0].data.length)
  .fill("")
  .map((item, index) => ({
    name: datasetsLine[0].data[index].label,
    [datasetsLine[0].label]: datasetsLine[0].data[index].value,
    [datasetsLine[1].label]: datasetsLine[1].data[index].value,
  }));

const LineRecharts = () => {
  const [data, setData] = useState(dataDefault);

  useEffect(() => {
    setTimeout(() => {
      const newData = [...dataDefault];
      newData.forEach((item) => {
        item[datasetsLine[0].label] = +item[datasetsLine[0].label] + 100;
      });

      setData(newData);
    }, 2000);
  }, [setData]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" fontSize={12} />
        <YAxis
          tickFormatter={(value) => `$${value}`}
          fontSize={12}
          interval={0}
          tickCount={10}
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={datasetsLine[0].label}
          stroke="rgb(255, 99, 132)"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey={datasetsLine[1].label}
          stroke="rgb(53, 162, 235)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineRecharts;
