import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "../pages/LandingPage/LandingPage";
import GenerateRequest from "../pages/GenerateRequest";
// import TemplatePage from "../pages/Template";
import BundleOverview from "../pages/BundleOverview";
import Signup from "../pages/Signup";

import SelectPayment from "../pages/SelectPayment";
import ChooseSponsor from "../pages/ChooseSponsor";

import RequestSuccessful from "../pages/RequestSucessful";
import Dashboard from "../pages/Dashboard";

// Merchant-related components
import MerchantHome from "../components/merchant/MerchantHome";
import RegistrationGuard from "../components/merchant/RegistrationGuard";
import BusinessDetailsPage from "../components/merchant/BusinessDetails";
import PersonalDetailsPage from "../components/merchant/PersonalDetails";
import BankDetailsPage from "../components/merchant/BankDetails";

import Dashboard from "../../src/pages/Dashboard/Dashboard";
import LandingPage from "../pages/LandingPage/LandingPage";

import ViewDetails from "../pages/ViewDetails";
import PaymentDetails from "../pages/PaymentDetails";
import RemoveMainSponsor from "../pages/RemoveMainSponsor";
import MainSponsor from "../pages/MainSponsor";
import FirstRelationship from "../pages/FirstRelationship";
import RelationshipCreated from "../pages/RelationshipCreated";
import SupportInvite from "../pages/SupportInvite";
import NotifySupport from "../pages/NotifySupport";
import NoRelationship from "../pages/NoRelationship";
import CreateRelationship from "../pages/CreateRelationship";

import AccountSettingsPage from "../pages/AccountSettingsPage";


import Electricity from "../pages/Electricity/Electricity";
import Jumia from "../pages/jumia/Jumia";
import JumiaShopping from "../pages/jumia/JumiaShopping";

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
      {/* <Route path="/template" element={<TemplatePage />} /> */}
      <Route path="/bundle-overview" element={<BundleOverview />} />
      <Route path="/sign-up" element={<Signup />} />

      <Route path="/select-payment" element={<SelectPayment />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/choose-sponsor" element={<ChooseSponsor />} />



      <Route path="/merchant-home" element={<MerchantHome />} />


      {/* user profile and account settings */}
      <Route path="/account" element={<AccountSettingsPage />} />


      <Route path="request-successful" element={<RequestSuccessful />} />

      {/* the relationship pages have 14 screens, these are 10 out of the 14 */}
      <Route path="/choose-sponsor" element={<NoRelationship />} />
      <Route path="/create-relationship" element={<CreateRelationship />} />
      <Route path="/payment-details" element={<PaymentDetails />} />
      <Route path="/created-relationship" element={<RelationshipCreated />} />
      <Route path="/support-invite" element={<SupportInvite />} />
      <Route path="/notify" element={<NotifySupport />} />
      <Route path="/first-relationship" element={<FirstRelationship />} />
      <Route path="/main-sponsor" element={<MainSponsor />} />
      <Route path="/remove-sponsor" element={<RemoveMainSponsor />} />
      <Route path="/view-details" element={<ViewDetails />} />

      {/* Note that whenever the other pages are ready, we can navigate from this
      point down. For now, the path will not work. i used the / path for
      testing ⚠️⚠️⚠️*/}
      <Route path="/" element={<MerchantHome />} />
      {/* Registration flow - all steps nested under RegistrationGuard */}
      <Route path="/jumia-shopping" element={<JumiaShopping />} />
      <Route path="/jumia" element={<Jumia />} />
      
      <Route path="/electricity" element={<Electricity />} />
      
      
     
      
      

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
