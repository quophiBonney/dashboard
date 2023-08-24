import React from "react";
import Chart from "chart.js/auto";
import {Doughnut} from "react-chartjs-2";
function BidsChart() {
  const labels = ["Accepted Bids", "Rejected Bids"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My first dataset",
        backgroundColor: ["teal", "lightseagreen"],
        borderColor: "lavender",
        data: [60, 40],
      },
    ],
  };
  return (
    <>
      <Doughnut data={data} />
    </>
  );
}

export default BidsChart;
