import React, { useState, ReactNode, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from '../components/Header';
import { FaTimes } from 'react-icons/fa';

interface TemplatePageProps {
  children: ReactNode;
}

const TemplatePage: React.FC<TemplatePageProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#f5f5f5',
    position: 'relative',
  };

  const mainSectionStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };

  const mainContentStyle: React.CSSProperties = {
    flex: 1,
    padding: '20px',
    background: 'white',
    overflowY: 'auto',
  };

  const toggleButtonStyle: React.CSSProperties = {
    position: 'fixed',
    top: 20,
    left: 20,
    background: '#401A6D',
    border: 'none',
    padding: '10px 15px',
    borderRadius: 8,
    fontSize: 18,
    color: 'white',
    cursor: 'pointer',
    zIndex: 1100,
    display: isMobile ? 'block' : 'none', // only show on mobile
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <div
        style={{
          height: '100vh',
          width: '240px',
          backgroundColor: '#1B0B2E',
          padding: '20px',
          boxShadow: '2px 0 5px rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: 'column',
          position: 'sticky',
          top: 0,
        }}
      >
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Section */}
      <div style={mainSectionStyle}>
        <Header />
        <main style={mainContentStyle}>{children}</main>
      </div>

      {/* Sidebar Toggle Button */}
      <button style={toggleButtonStyle} onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <span>☰</span>}
      </button>
    </div>
  );
};

export default TemplatePage;
