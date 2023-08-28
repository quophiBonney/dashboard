import React from "react";
import Chart from "chart.js/auto";
import {Doughnut} from "react-chartjs-2";
import JobsWrapper from "./JobsWrapper";
function JobsChart() {
  const labels = ["Jobs", "Completed"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Job Records",
        backgroundColor: ["teal", "lightseagreen"],
        borderColor: "lavender",
        data: [40, 60],
      },
    ],
  };
  const totalJobs = data.datasets[0].data.reduce(
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
      <JobsWrapper totalJobs={totalJobs} />
    </>
  );
}

export default JobsChart;
