import React from "react";
import {Typography} from "antd";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 text-center mt-3">
            <div className="card shadow px-5 py-3">
              <Typography.Title level={4}>Active Users</Typography.Title>
              <p className="figure">25K</p>
              <hr className="bg-light" />
              <p>20/12/2023</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 text-center mt-3">
            <div className="card shadow px-5 py-3">
              <Typography.Title level={4}>Active Users</Typography.Title>
              <p className="figure">25K</p>
              <hr className="bg-light" />
              <p>20/12/2023</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 text-center mt-3">
            <div className="card shadow px-5 py-3">
              <Typography.Title level={4}>Active Users</Typography.Title>
              <p className="figure">25K</p>
              <hr className="bg-light" />
              <p>20/12/2023</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 text-center mt-3">
            <div className="card shadow px-5 py-3">
              <Typography.Title level={4}>Active Users</Typography.Title>
              <p className="figure">25K</p>
              <hr className="bg-light" />
              <p>20/12/2023</p>
            </div>
          </div>
          <div className="col-12 text-center mt-3">
            <div className="card shadow px-5 py-2">
              <LineChart />
            </div>
          </div>
          <div className="col-12 text-center mt-3">
            <div className="card shadow px-5 py-2">
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
