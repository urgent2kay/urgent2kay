// src/pages/GenerateRequest.tsx
import React, { useState } from 'react';

import Sidebar from './Sidebar';
import Header from '../components/Header';
import { FaTimes } from 'react-icons/fa';
import './GenerateRequest.css';
import { Icon } from '@iconify/react'; // Add this import


const GenerateRequest: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="generate-request-container">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Section */}
      <div className="main-section">
        <Header />
        
        {/* Main Content */}
        <main className="main-content">
          <div style={{
            width: '1083px',
            height: '111px',
            borderRadius: '12px',
            background: '#7F669D',
            border: '1px solid #F9FDFD',
            display: 'flex',
            alignItems: 'center',
            padding: '24px'
          }}>
            <div style={{
              width: '134.2px',
              height: '62.6px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '2px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px' // small space between text and eye icon
              }}>
                <span style={{
                  width: '87px',
                  height: '15px',
                  fontFamily: 'Archivo',
                  fontWeight: 400,
                  fontSize: '12px',
                  color: '#F9FDFD',
                  whiteSpace: 'nowrap' // **ensures Available Balance stays in one line**
                }}>
                  Available Balance
                </span>
                <Icon icon="iconamoon:eye-light" style={{ width: '19.2px', height: '19.2px', color: '#F9FDFD' }} />
              </div>

              <div>
                <span style={{
                  width: '59px',
                  height: '39px',
                  fontFamily: 'Archivo',
                  fontWeight: 700,
                  fontSize: '28px',
                  lineHeight: '140%',
                  color: '#F9FDFD'
                }}>
                  0.00
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <span>☰</span>}
      </button>
    </div>
  );
};

export default GenerateRequest;
