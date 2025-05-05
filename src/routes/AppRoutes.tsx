import React from "react";
import { Routes, Route } from "react-router-dom";
import GenerateRequest from "../pages/GenerateRequest";
import TemplatePage from "../pages/Template";
import BundleOverview from "../pages/BundleOverview";
import Signup from "../pages/Signup";
import ChooseSponsor from "../pages/ChooseSponsor";
import RequestSucessful from "../pages/RequestSucessful";
import SponsorBundleOverview from "../pages/SponsorBundleOverview";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GenerateRequest />} />
      <Route path="/generate-request" element={<GenerateRequest />} />
      <Route path="/template" element={<TemplatePage />} />
      <Route path="/bundle-overview" element={<BundleOverview />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/choose-sponsor" element={<ChooseSponsor />} />
      <Route path="/request-sucessful" element={<RequestSucessful />} />
      <Route
        path="/sponsor-bundle-overview"
        element={<SponsorBundleOverview />}
      />
    </Routes>
  );
};

export default AppRoutes;
