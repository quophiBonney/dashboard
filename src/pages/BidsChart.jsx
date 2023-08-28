import React from "react";
import Chart from "chart.js/auto";
import {Doughnut} from "react-chartjs-2";
import BidsWrapper from "./BidsWrapper";
function BidsChart({}) {
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
  const totalBids = data.datasets[0].data.reduce(
    (sum, value) => sum + value,
    0
  );
  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };
  return (
    <>
      <Doughnut data={data} options={options} />
      <BidsWrapper totalBids={totalBids} />
    </>
  );
}

export default BidsChart;
