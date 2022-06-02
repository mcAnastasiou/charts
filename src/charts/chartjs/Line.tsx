import {
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  CoreScaleOptions,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Scale,
  Tick,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { datasetsLine } from "../data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options: ChartOptions<"line"> = {
  animations: {
    tension: {
      duration: 1000,
      easing: "linear",
      from: 1,
      to: 0,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  scales: {
    y: {
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value, index, ticks) {
          return "$" + value;
        },
      },
    },
  },
};

const labels = datasetsLine[0].data.map((item) => item.label);

const dataDefault = {
  labels,
  datasets: [
    {
      label: datasetsLine[0].label,
      data: datasetsLine[0].data.map((item) => item.value),
      borderColor: "rgb(255, 99, 132)",
    },
    {
      label: datasetsLine[1].label,
      data: datasetsLine[1].data.map((item) => item.value),
      borderColor: "rgb(53, 162, 235)",
    },
  ],
};

const LineChartJS = () => {
  const [data, setData] = useState(dataDefault);

  useEffect(() => {
    setTimeout(() => {
      const newData = { ...dataDefault };
      newData.datasets = [...dataDefault.datasets];
      newData.datasets[0].data = datasetsLine[0].data.map(
        (item) => item.value + 100
      );

      setData(newData);
    }, 2000);
  }, [setData]);
  return <Line options={options} data={data} />;
};

export default LineChartJS;
