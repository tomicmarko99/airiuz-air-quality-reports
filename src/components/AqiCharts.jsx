import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";

const AQIChart = ({ forecastData }) => {
  Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
  );

  const forecastDays = forecastData?.o3?.map((o3) => o3.day);
  const pm25Data = forecastData?.pm25?.map((pm25) => pm25.avg);
  const pm10Data = forecastData?.pm10?.map((pm10) => pm10.avg);
  const o3Data = forecastData?.o3?.map((o3) => o3.avg);

  const chartData = {
    labels: forecastDays || [],
    datasets: [
      {
        label: "PM2.5 AQI",
        data: pm25Data,
        fill: false,
        borderColor: "rgb(54, 162, 235)",
        tension: 0.1,
      },
      {
        label: "PM10 AQI",
        data: pm10Data,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "O3 AQI",
        data: o3Data,
        fill: false,
        borderColor: "rgb(153, 102, 255)",
        tension: 0.1,
      },
    ],
  };

  // Convert the date strings to day names
  const dayLabels = chartData.labels.map((dateStr) => {
    const date = new Date(dateStr);
    const options = { weekday: "long" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  });

  // Update the labels array with the day names
  chartData.labels = dayLabels;

  return <Line data={chartData} className="w-full" />;
};

export default AQIChart;
