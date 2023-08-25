import React from "react";
import {Typography} from "antd";
import JobsChart from "./JobsChart";
import BidsChart from "./BidsChart";
import ProjectsChart from "./ProjectsChart";
import AccountsChart from "./AccountsChart";
const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 text-center mt-3">
            <div className="card shadow px-2 py-2">
              <ProjectsChart />
              <Typography.Title level={4} className="mt-2">
                Projects
              </Typography.Title>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 text-center mt-3">
            <div className="card shadow px-2 py-2">
              <BidsChart />
              <Typography.Title level={4} className="mt-2">
                Bids
              </Typography.Title>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 text-center mt-3">
            <div className="card shadow px-2 py-2">
              <JobsChart />
              <Typography.Title level={4} className="mt-2">
                Jobs
              </Typography.Title>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 text-center mt-3">
            <div className="card shadow px-2 py-2">
              <AccountsChart />
              <Typography.Title level={4} className="mt-2">
                Accounts
              </Typography.Title>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
