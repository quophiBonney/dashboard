import React, {useState} from "react";
import Chart from "chart.js/auto";
import {Doughnut} from "react-chartjs-2";
function AccountsChart() {
  const [data, setData] = useState({
    labels: ["Active Clients", "Active Contractors"],
    datasets: [
      {
        label: "Number of Users",
        data: [100, 50, 25],
        backgroundColor: ["teal", "lightseagreen"],
      },
    ],
  });

  const [options, setOptions] = useState({
    labelLayout: "singleLine",
    legend: {
      labelLayout: "singleLine",
    },
  });
  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
}

export default AccountsChart;
