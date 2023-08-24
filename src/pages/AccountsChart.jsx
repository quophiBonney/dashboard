import React from "react";
import {Pie} from "react-chartjs-2";
function AccountsChart() {
  const labels = ["Active Clients", "Active Contractors"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My first dataset",
        backgroundColor: "teal",
        borderColor: "lavender",
        data: [85, 15],
      },
    ],
  };
  return (
    <>
      <Pie data={data} />
    </>
  );
}

export default AccountsChart;
