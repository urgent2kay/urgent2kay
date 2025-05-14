import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Header from '../../components/Header';
import './jumia.css';

const Jumia: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) setSidebarOpen(true);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="jumia-page">
      {sidebarOpen && (
        <div className="jumia-sidebar">
          <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        </div>
      )}
      <div className="jumia-main">
        <Header />

        <button className="back-button" onClick={() => navigate('/generate-request')}>
          ← Back
        </button>

        <div className="shopping-section">
          <h2 className="shopping-title">Shopping</h2>
          <p className="service-provider-caption">Service Provider</p>

          <div className="provider-box">Jumia</div>
          <div className="provider-box">Temu</div>
          <div className="provider-box">Shein</div>
          <div className="provider-box">Konga</div>
        </div>
      </div>
    </div>
  );
};

export default Jumia;
