import React from "react";
import {Doughnut} from "react-chartjs-2";
import ProjectsWrapper from "./ProjectsWrapper";

function ProjectsChart() {
  const labels = ["Progress", "Completed"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Projects",
        backgroundColor: ["teal", "lightseagreen"],
        borderColor: "lavender",
        data: [75, 25],
      },
    ],
  };
  const totalProjects = data.datasets[0].data.reduce(
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
      <ProjectsWrapper totalProjects={totalProjects} />
    </>
  );
}

export default ProjectsChart;
