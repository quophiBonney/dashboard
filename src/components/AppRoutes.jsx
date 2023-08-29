import React from "react";
import {Routes, Route, useLocation} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import Contractors from "../pages/Contractors";
import LineChart from "../pages/LineChart";
import BarChart from "../pages/BarChart";
import PieChart from "../pages/PieChart";
import Table from "../pages/Table";
import Home from "../pages/Home";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/contractors" element={<Contractors />} />
        <Route path="/pie-chart" element={<PieChart />} />
        <Route path="/line-chart" element={<LineChart />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/bar-chart" element={<BarChart />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
