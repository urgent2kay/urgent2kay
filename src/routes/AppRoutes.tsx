
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GenerateRequest from '../pages/GenerateRequest';
import TemplatePage from '../pages/Template';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GenerateRequest />} /> 
      <Route path="/generate-request" element={<GenerateRequest/>} />
      <Route path="/template" element={<TemplatePage/>} />
    </Routes>
  );
};

export default AppRoutes;
