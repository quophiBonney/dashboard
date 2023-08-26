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

              <div class="d-flex justify-content-between align-items-center">
                <div class="p-2">
                  <Typography.Title level={4} className="mt-2">
                    Projects
                  </Typography.Title>
                </div>
                <div class="p-2 fs-6">
                  <strong>45.8K</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 text-center mt-3">
            <div className="card shadow px-2 py-2">
              <BidsChart />
              <div class="d-flex justify-content-between align-items-center">
                <div class="p-2">
                  <Typography.Title level={4} className="mt-2">
                    Bids
                  </Typography.Title>
                </div>
                <div class="p-2 fs-6">
                  <strong>30.5K</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 text-center mt-3">
            <div className="card shadow px-2 py-2">
              <JobsChart />
              <div class="d-flex justify-content-between align-items-center">
                <div class="p-2">
                  <Typography.Title level={4} className="mt-2">
                    Jobs
                  </Typography.Title>
                </div>
                <div class="p-2 fs-6">
                  <strong>40.5K</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 text-center mt-3">
            <div className="card shadow px-2 py-2">
              <AccountsChart />

              <div class="d-flex justify-content-between align-items-center">
                <div class="p-2">
                  <Typography.Title level={4} className="mt-2">
                    Accounts
                  </Typography.Title>
                </div>
                <div class="p-2 fs-6">
                  <strong>60.7K</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
