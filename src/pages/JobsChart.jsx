import React from "react";
import Chart from "chart.js/auto";
import {Doughnut} from "react-chartjs-2";
function JobsChart() {
  const labels = ["Active Jobs", "Closed Jobs"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My first dataset",
        backgroundColor: ["teal", "lightseagreen"],
        borderColor: "lavender",
        data: [70, 30],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };
  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
}

export default JobsChart;
