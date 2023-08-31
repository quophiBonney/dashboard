import React from "react";
import {Bar} from "react-chartjs-2";
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Engagement Chart",
      backgroundColor: ["lightseagreen", "teal"],
      borderColor: ["lightseagreen", "teal"],
      data: [30, 20, 60, 50, 60, 90, 85, 65, 30, 100, 80, 75],
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: true,
};
const BarChart = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-12 col-lg-12 mt-2">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
