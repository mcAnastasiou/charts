import React from "react";
import "./App.css";
import LineApexcharts from "./charts/apexcharts/Line";
import LineChartJS from "./charts/chartjs/Line";
import LineHightcharts from "./charts/hightcharts/Line";
import LineNivo from "./charts/nivo/Line";
import LineRecharts from "./charts/recharts/Line";
import LineVictory from "./charts/victory/Line";

function App() {
  return (
    <div className="App">
      <h2>ChartJS</h2>
      <div className="charts-container">
        <div className="chart-container">
          <LineChartJS />
        </div>
      </div>
      <h2>Recharts</h2>
      <div className="charts-container">
        <div className="chart-container">
          <LineRecharts />
        </div>
      </div>
      <h2>Highcharts</h2>
      <div className="charts-container">
        <div className="chart-container">
          <LineHightcharts />
        </div>
      </div>
      <h2>Apexcharts</h2>
      <div className="charts-container">
        <div className="chart-container">
          <LineApexcharts />
        </div>
      </div>
      <h2>Victory</h2>
      <div className="charts-container">
        <div className="chart-container">
          <LineVictory />
        </div>
      </div>
      <h2>Nivo</h2>
      <div className="charts-container">
        <div className="chart-container-fixed">
          <LineNivo />
        </div>
      </div>
    </div>
  );
}

export default App;
