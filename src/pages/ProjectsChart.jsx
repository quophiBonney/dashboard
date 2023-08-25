import React from "react";
import Chart from "chart.js/auto";
import {Doughnut} from "react-chartjs-2";
function ProjectsChart() {
  const labels = ["Progress", "Completed"];
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
    plugins: {
      legend: {
        labels: {
          font: {
            size: 5.5,
          },
        },
      },
    },
  };
  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
}

export default ProjectsChart;
