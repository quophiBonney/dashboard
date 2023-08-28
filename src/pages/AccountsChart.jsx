import React, {useState} from "react";
import Chart from "chart.js/auto";
import {Doughnut} from "react-chartjs-2";
import AccountsWrapper from "./AccountsWrapper";
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
  const totalAccounts = data.datasets[0].data.reduce(
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
      <AccountsWrapper totalAccounts={totalAccounts} />
    </>
  );
}

export default AccountsChart;
