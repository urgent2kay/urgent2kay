import React, { useState } from 'react';
import Sidebar from './sidebar';
import Header from './Header'; // Header component
import { FaTimes } from 'react-icons/fa'; // For the close icon
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode; // Define children prop
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="layout-container">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="main-section">
        <Header />

        {/* Render child pages here */}
        <main className="main-content">
          {children}
        </main>
      </div>

      {/* Sidebar Toggle Button for mobile */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <span>☰</span>}
      </button>
    </div>
  );
};

export default Layout;
