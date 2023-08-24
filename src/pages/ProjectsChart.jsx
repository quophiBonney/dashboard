import React from "react";
import Chartjs from "chart.js/auto";
import {Pie} from "react-chartjs-2";
function ProjectsChart() {
  const labels = ["Projects In Progress", "Projects Completed"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My first dataset",
        backgroundColor: "teal",
        borderColor: "lavender",
        data: [75, 25],
      },
    ],
  };
  return (
    <>
      <Pie data={data} />
    </>
  );
}

export default ProjectsChart;
