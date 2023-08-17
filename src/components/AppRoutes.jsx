import React from "react";
import {Routes, Route} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import BChart from "../pages/BarChart";
import PChart from "../pages/PieChart";
import Table from "../pages/Table";
import LineChart from "../pages/LineChart";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/bar-chart" element={<BChart />} />
        <Route path="/pie-chart" element={<PChart />} />
        <Route path="/line-chart" element={<LineChart />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
