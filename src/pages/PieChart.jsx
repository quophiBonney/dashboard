import React from "react";
import {Pie} from "react-chartjs-2";
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
      backgroundColor: ["teal", "lightseagreen", "pink"],
      borderColor: "teal",
      data: [30, 20, 60, 50, 60, 90, 85, 65, 30, 100, 80, 75],
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: true,
};
const PieChart = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-5 col-lg-6 mt-2">
          <Pie data={data} options={options} />
        </div>
        <div className="col-sm-12 col-md-5 col-lg-6 mt-2">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
