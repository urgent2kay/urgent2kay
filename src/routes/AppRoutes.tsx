import React from "react";
import BundleOverview from "../pages/BundleOverview";
import Signup from "../pages/Signup";
import ChooseSponsor from "../pages/ChooseSponsor";
import { Routes, Route, Navigate } from "react-router-dom";
import GenerateRequest from "../pages/GenerateRequest";
import TemplatePage from "../pages/Template";
import MerchantHome from "../components/merchant/MerchantHome";
import RegistrationGuard from "../components/merchant/RegistrationGuard";
import BusinessDetailsPage from "../components/merchant/BusinessDetails";
import PersonalDetailsPage from "../components/merchant/PersonalDetails";
import BankDetailsPage from "../components/merchant/BankDetails";
import Dashboard from '../../src/pages/Dashboard/Dashboard';
import LandingPage from "../pages/LandingPage/LandingPage";
import Electricity from "../pages/Electricity/Electricity";
import Jumia from "../pages/jumia/Jumia";
import JumiaShopping from "../pages/jumia/JumiaShopping";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/generate-request" element={<GenerateRequest />} />
      <Route path="/template" element={<TemplatePage />} />
      <Route path="/bundle-overview" element={<BundleOverview />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/choose-sponsor" element={<ChooseSponsor />} />
      <Route path="/jumia-shopping" element={<JumiaShopping />} />
      <Route path="/jumia" element={<Jumia />} />
      
      <Route path="/electricity" element={<Electricity />} />
      
      
      <Route path="/merchant-home" element={<MerchantHome />} />
      
      
      <Route path="/register" element={<RegistrationGuard />}>
        <Route index element={<BusinessDetailsPage />} />
        <Route path="personal" element={<PersonalDetailsPage />} />
        <Route path="bank" element={<BankDetailsPage />} />
      </Route>

      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
