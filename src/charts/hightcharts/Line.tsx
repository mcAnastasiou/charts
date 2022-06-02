import HighchartsReact from "highcharts-react-official";
import React, { useEffect, useState } from "react";
import Highcharts, { SeriesLineOptions, SeriesOptionsType } from "highcharts";
import { datasetsLine } from "../data";

const optionsDefault: Highcharts.Options = {
  xAxis: {
    categories: datasetsLine[0].data.map((item) => item.label),
  },
  legend: {
    layout: "horizontal",
    align: "center",
    verticalAlign: "bottom",
    itemMarginTop: 10,
    itemMarginBottom: 10,
  },
  tooltip: {
    formatter: function () {
      return (
        "The value for <b>" +
        this.x +
        "</b> is <b>" +
        this.y +
        "</b>, in series " +
        this.series.name
      );
    },
  },
  yAxis: {
    labels: {
      formatter: function () {
        return `$${this.value}`;
      },
    },
  },
  series: [
    {
      type: "line",
      data: datasetsLine[0].data.map((item) => item.value),
      color: "rgb(255, 99, 132)",
    },
    {
      type: "line",
      data: datasetsLine[1].data.map((item) => item.value),
      color: "rgb(53, 162, 235)",
    },
  ],
};

const LineHightcharts = () => {
  const [options, setOptions] = useState(optionsDefault);

  useEffect(() => {
    setTimeout(() => {
      const newOptions = { ...optionsDefault };
      if (
        newOptions.series &&
        (newOptions.series[0] as SeriesLineOptions).data
      ) {
        (newOptions.series[0] as SeriesLineOptions).data =
          datasetsLine[0].data.map((item) => item.value + 100);
      }

      setOptions(newOptions);
    }, 2000);
  }, [setOptions]);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineHightcharts;
