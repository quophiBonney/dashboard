import React from "react";
import Chart from "chart.js/auto";
import {Doughnut} from "react-chartjs-2";
function BidsChart() {
  const labels = ["Accepted", "Rejected"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Figure",
        backgroundColor: ["teal", "lightseagreen"],
        borderColor: "lavender",
        data: [60, 40],
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
            size: 6,
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

export default BidsChart;
