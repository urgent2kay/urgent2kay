
import React, { useState } from 'react';

import Sidebar from './Sidebar';
import Header from '../components/Header';
import { FaTimes } from 'react-icons/fa';

const TemplatePage: React.FC = () => {
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
          <h1>Template Page</h1>
          {/* Your content for the page goes here */}
        </main>
      </div>

      {/* Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <span>☰</span>}
      </button>
    </div>
  );
};

export default TemplatePage;
