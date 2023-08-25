import React, {useState} from "react";
import Chart from "chart.js/auto";
import {Doughnut} from "react-chartjs-2";
function AccountsChart() {
  const [data, setData] = useState({
    labels: ["Clients", "Contractors"],
    datasets: [
      {
        label: "Figure",
        data: [70, 30],
        backgroundColor: ["teal", "lightseagreen"],
      },
    ],
  });

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

export default AccountsChart;
