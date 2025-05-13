import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "../pages/LandingPage/LandingPage";
import GenerateRequest from "../pages/GenerateRequest";
import TemplatePage from "../pages/Template";
import BundleOverview from "../pages/BundleOverview";
import Signup from "../pages/Signup";
import ChooseSponsor from "../pages/ChooseSponsor";
import Dashboard from "../pages/Dashboard";

// Merchant-related components
import MerchantHome from "../components/merchant/MerchantHome";
import RegistrationGuard from "../components/merchant/RegistrationGuard";
import BusinessDetailsPage from "../components/merchant/BusinessDetails";
import PersonalDetailsPage from "../components/merchant/PersonalDetails";
import BankDetailsPage from "../components/merchant/BankDetails";

const AppRoutes: React.FC = () => {
  return (
    <Routes>

      {/* Default route */}
      <Route path="/" element={<LandingPage />} />

      {/* Public pages */}
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/choose-sponsor" element={<ChooseSponsor />} />
      <Route path="/bundle-overview" element={<BundleOverview />} />
      <Route path="/generate-request" element={<GenerateRequest />} />
      <Route path="/template" element={<TemplatePage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
      
     
      
      

      {/* Merchant routes */}
      <Route path="/merchant-home" element={<MerchantHome />} />
      <Route path="/register" element={<RegistrationGuard />}>
        <Route index element={<BusinessDetailsPage />} />
        <Route path="personal" element={<PersonalDetailsPage />} />
        <Route path="bank" element={<BankDetailsPage />} />
      </Route>

      

      {/* Catch-all: redirect unknown routes to landing */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
