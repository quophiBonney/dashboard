import React from "react";
import Chart from "chart.js/auto";
import {Bar} from "react-chartjs-2";
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My first dataset",
      backgroundColor: "teal",
      borderColor: "teal",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const BarChart = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-9 col-lg-8 mt-5">
            <Bar data={data} style={{width: "400px", height: "400px"}} />
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 mt-5">
            <Bar data={data} style={{width: "400px", height: "400px"}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
