import React from "react";
import {Routes, Route} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Analytics from "../pages/Analytics";
import Contractors from "../pages/Contractors";
import Table from "../pages/Table";
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/contractors" element={<Contractors />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
