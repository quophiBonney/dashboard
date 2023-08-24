import React from "react";
import {Pie} from "react-chartjs-2";
function BidsChart() {
  const labels = ["Accepted Bids", "Rejected Bids"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My first dataset",
        backgroundColor: "teal",
        borderColor: "lavender",
        data: [60, 40],
      },
    ],
  };
  return (
    <>
      <Pie data={data} />
    </>
  );
}

export default BidsChart;
