import React from "react";
import {Typography} from "antd";
import JobsChart from "./JobsChart";
import BidsChart from "./BidsChart";
import ProjectsChart from "./ProjectsChart";
import AccountsChart from "./AccountsChart";
import BarChart from "./BarChart";
import DashboardWrapper from "./AccountsWrapper";
import LineChart from "./LineChart";
const Dashboard = ({dataSum, totalBids}) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 text-center mt-3">
            <div className="card shadow px-2 py-2">
              <ProjectsChart />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 text-center mt-3">
            <div className="card shadow px-2 py-2">
              <BidsChart />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 text-center mt-3">
            <div className="card shadow px-2 py-2">
              <JobsChart />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 text-center mt-3">
            <div className="card shadow px-2 py-2">
              <AccountsChart />
            </div>
          </div>
          <div className="col-sm-12 col-md-9 col-lg-9 text-center mt-3">
            <div className="card px-2 py-2">
              <BarChart />
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 text-center mt-3">
            <div className="card px-2 py-2 mb-3">
              <BarChart />
            </div>
            <div className="card px-2 py-2">
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
