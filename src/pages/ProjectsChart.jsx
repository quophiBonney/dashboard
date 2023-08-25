import React from "react";
import Chart from "chart.js/auto";
import {Doughnut} from "react-chartjs-2";
function ProjectsChart() {
  const labels = ["Projects In Progress", "Projects Completed"];
  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: ["teal", "lightseagreen"],
        borderColor: "lavender",
        data: [75, 25],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      labelLayout: "singleLine",
    },
  };
  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
}

export default ProjectsChart;
