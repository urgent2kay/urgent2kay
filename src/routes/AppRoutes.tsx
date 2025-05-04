import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GenerateRequest from "../pages/GenerateRequest";
import TemplatePage from "../pages/Template";
import MerchantHome from "../components/merchant/MerchantHome";
import RegistrationGuard from "../components/merchant/RegistrationGuard";
import BusinessDetailsPage from "../components/merchant/BusinessDetails";
import PersonalDetailsPage from "../components/merchant/PersonalDetails";
import BankDetailsPage from "../components/merchant/BankDetails";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GenerateRequest />} />
      <Route path="/generate-request" element={<GenerateRequest />} />
      <Route path="/template" element={<TemplatePage />} />
      {/* Note that whenever the other pages are ready, we can navigate from this
      point down. For now, the path will not work. i used the / path for
      testing ⚠️⚠️⚠️*/}
      <Route path="/" element={<MerchantHome />} />
      {/* Registration flow - all steps nested under RegistrationGuard */}
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
