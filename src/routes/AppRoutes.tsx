// src/routes/AppRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GenerateRequest from '../pages/GenerateRequest';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<GenerateRequest />} /> {/* Temporarily set GenerateRequestPage as the home page */}
      <Route path="/generate-request" element={<GenerateRequest/>} />
    </Routes>
  );
};

export default AppRoutes;
