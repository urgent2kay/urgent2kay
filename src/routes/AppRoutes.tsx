
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GenerateRequest from '../pages/GenerateRequest';
import TemplatePage from '../pages/Template';
import LoginPage from '../pages/auth/login/login';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GenerateRequest />} /> 
      <Route path="/generate-request" element={<GenerateRequest/>} />
      <Route path="/template" element={<TemplatePage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
  );
};

export default AppRoutes;
