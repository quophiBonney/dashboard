import React from "react";
import Chart from "chart.js/auto";
import {Doughnut} from "react-chartjs-2";
function AccountsChart() {
  const labels = ["Active Clients", "Active Contractors"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My first dataset",
        backgroundColor: ["teal", "lightseagreen"],
        borderColor: "lavender",
        data: [85, 15],
      },
    ],
  };
  return (
    <>
      <Doughnut data={data} />
    </>
  );
}

export default AccountsChart;
