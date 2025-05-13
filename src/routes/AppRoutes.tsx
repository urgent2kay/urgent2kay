import React from "react";
import { Routes, Route } from "react-router-dom";
import GenerateRequest from "../pages/GenerateRequest";
import TemplatePage from "../pages/Template";
import BundleOverview from "../pages/BundleOverview";
import Signup from "../pages/Signup";
import SignIn from "../pages/SignIn";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GenerateRequest />} />
      <Route path="/generate-request" element={<GenerateRequest />} />
      <Route path="/template" element={<TemplatePage />} />
      <Route path="/bundle-overview" element={<BundleOverview />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};

export default AppRoutes;
