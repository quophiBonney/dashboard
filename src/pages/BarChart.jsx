import React from "react";
import {Bar} from "react-chartjs-2";
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My first dataset",
      backgroundColor: "teal",
      borderColor: "teal",
      data: [30, 20, 60, 50, 60, 90, 85, 65, 30, 100, 80, 75],
    },
  ],
};
const BarChart = () => {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
