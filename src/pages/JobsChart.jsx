import React from "react";
import {Pie} from "react-chartjs-2";
function JobsChart() {
  const labels = ["Active Jobs", "Closed Jobs"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My first dataset",
        backgroundColor: "teal",
        borderColor: "lavender",
        data: [70, 30],
      },
    ],
  };
  return (
    <>
      <Pie data={data} />
    </>
  );
}

export default JobsChart;
