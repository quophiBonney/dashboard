import React from "react";
import {Routes, Route, useLocation} from "react-router-dom";
//Page content imports
import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import LineChart from "../pages/LineChart";
import BarChart from "../pages/BarChart";
import PieChart from "../pages/PieChart";
//Auth imports
import Login from "../auth/Login";
import Signup from "../auth/Signup";
//Tables imports
import Contractors from "../tables/Contractors";
import Clients from "../tables/Clients";
import Jobs from "../tables/Jobs";
import Bids from "../tables/Bids";
import Contract from "../tables/Contract";
import Payment from "../tables/Payment";
import ForgotPassword from "../auth/ForgotPassword";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/pie-chart" element={<PieChart />} />
        <Route path="/line-chart" element={<LineChart />} />
        <Route path="/contractors" element={<Contractors />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/bids" element={<Bids />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/password-recovery" element={<ForgotPassword />} />
        <Route path="/bar-chart" element={<BarChart />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
