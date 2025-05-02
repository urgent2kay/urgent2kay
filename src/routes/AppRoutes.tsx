import React from "react";
import { Routes, Route } from "react-router-dom";
import GenerateRequest from "../pages/GenerateRequest";
import TemplatePage from "../pages/Template";
import BundleOverview from "../pages/BundleOverview";
import Signup from "../pages/Signup";
import Dashboard from '../../src/pages/Dashboard/Dashboard';
import LandingPage from "../pages/LandingPage/LandingPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> 
      <Route path="/generate-request" element={<GenerateRequest />} />
      <Route path="/template" element={<TemplatePage />} />
      <Route path="/bundle-overview" element={<BundleOverview />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
