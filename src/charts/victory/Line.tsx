import React, { useEffect, useState } from "react";
import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryLine,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";
import { datasetsLine } from "../data";

const LineVictory = () => {
  const [data, setData] = useState(datasetsLine);

  useEffect(() => {
    setTimeout(() => {
      const newData = [...datasetsLine];
      newData[0].data = newData[0].data.map((item) => ({
        ...item,
        value: item.value + 100,
      }));

      setData(newData);
    }, 2000);
  }, [setData]);

  return (
    <VictoryChart
      containerComponent={
        <VictoryVoronoiContainer
          labels={({ datum }) => {
            return datum.y;
          }}
        />
      }
      animate={{ duration: 200 }}
    >
      <VictoryLegend
        x={125}
        y={280}
        orientation="horizontal"
        gutter={20}
        style={{ title: { fontSize: 20 } }}
        data={[
          { name: "Dataset1", symbol: { fill: "rgb(255, 99, 132)" } },
          { name: "Dataset2", symbol: { fill: "rgb(53, 162, 235)" } },
        ]}
      />
      <VictoryAxis dependentAxis tickFormat={(t) => `$${t}`} />
      <VictoryAxis crossAxis />
      <VictoryGroup>
        <VictoryLine
          labelComponent={<VictoryTooltip />}
          data={data[0].data.map((item) => ({
            x: item.label,
            y: item.value,
          }))}
          style={{
            data: {
              stroke: "rgb(255, 99, 132)",
            },
          }}
        />
        <VictoryLine
          data={data[1].data.map((item) => ({
            x: item.label,
            y: item.value,
          }))}
          style={{
            data: {
              stroke: "rgb(53, 162, 235)",
            },
          }}
          labelComponent={<VictoryTooltip />}
        />
      </VictoryGroup>
    </VictoryChart>
  );
};

export default LineVictory;
