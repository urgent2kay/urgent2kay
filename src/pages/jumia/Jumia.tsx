import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TemplatePage from '../Template';
import './jumia.css';

const Jumia: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleBack = () => {
    navigate('/generate-request');
  };

  return (
    <TemplatePage>
      <div className="jumia-main" style={isMobile ? { padding: '10px 20px' } : {}}>
        <button onClick={handleBack} className="back-button">
          ← Back
        </button>

        <div className="shopping-section" style={isMobile ? { paddingTop: '20px' } : {}}>
          <h2 className="shopping-title">Shopping</h2>
          <p className="service-provider-caption">Service Provider</p>

          <div
            className="provider-box clickable"
            onClick={() => navigate('/jumia-shopping')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') navigate('/jumia-shopping');
            }}
          >
            Jumia
          </div>
          <div className="provider-box">Temu</div>
          <div className="provider-box">Shein</div>
          <div className="provider-box">Konga</div>
        </div>
      </div>
    </TemplatePage>
  );
};

export default Jumia;
