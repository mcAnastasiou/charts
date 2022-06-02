import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { datasetsLine } from "../data";

const dataDefault = [
  {
    id: datasetsLine[0].label,
    data: datasetsLine[0].data.map((item) => ({
      x: item.label,
      y: item.value,
    })),
  },
  {
    id: datasetsLine[1].label,
    data: datasetsLine[1].data.map((item) => ({
      x: item.label,
      y: item.value,
    })),
  },
];

const LineNivo = () => {
  const [data, setData] = useState(dataDefault);

  useEffect(() => {
    setTimeout(() => {
      const newData = [...dataDefault];
      newData[0].data = newData[0].data.map((item) => ({
        ...item,
        y: item.y + 100,
      }));

      setData(newData);
    }, 2000);
  }, [setData]);

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 20, bottom: 70, left: 60 }}
      yFormat=" $.2f"
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          translateY: 55,
          itemWidth: 100,
          itemHeight: 20,
          itemsSpacing: 4,
        },
      ]}
    />
  );
};
export default LineNivo;
