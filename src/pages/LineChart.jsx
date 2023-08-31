import React from "react";
import Chart from "chart.js/auto";
import {Line} from "react-chartjs-2";
const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
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
      label: "Total Revenue(Monthly)",
      backgroundColor: ["lightseagreen", "teal"],
      borderColor: "teal",
      data: [20, 40, 65, 45, 75, 75, 80, 85, 50, 90, 70, 45],
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};
const LineChart = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
