import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TemplatePage from '../Template';
import Header from '../../components/Header';
import './Electricity.css';

const Electricity: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const handleBack = () => {
    navigate('/generate-Request');
  };

  // Optional mobile styles for inputs and layout
  const mobileMainStyles: React.CSSProperties = {
    padding: '10px 20px',
  };

  const mobileLayoutStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '15px',
  };

  const mobileRowStyles: React.CSSProperties = {
    flexDirection: 'column',
    gap: '10px',
    display: 'flex',
  };

  const mobileSectionStyles: React.CSSProperties = {
    width: '100%',
    padding: 0,
  };

  const mobileInputStyles: React.CSSProperties = {
    width: '100%',
    fontSize: '14px',
  };

  return (
    <TemplatePage>
     

      {/* Back Button */}
      <div style={{ padding: '10px 20px' }}>
        <button onClick={handleBack} className="back-button">
          ← Back
        </button>
      </div>

      <main className="main-content" style={isMobile ? mobileMainStyles : {}}>
        <div className="electricity-layout" style={isMobile ? mobileLayoutStyles : {}}>
          <div className="electricity-row" style={isMobile ? mobileRowStyles : {}}>
            <div className="electricity-section" style={isMobile ? mobileSectionStyles : {}}>
              <p className="electricity-label">Service Provider</p>
              <div
                className="electricity-select-wrapper"
                style={isMobile ? { height: '56px', padding: '10px' } : {}}
              >
                <select className="electricity-select" style={isMobile ? mobileInputStyles : {}}>
                  {isMobile ? (
                    <>
                      <option value="">Select provider</option>
                      <option value="eedc">EEDC</option>
                      <option value="portharcourt">PHEDC</option>
                      <option value="abakaliki">Abakaliki EDC</option>
                    </>
                  ) : (
                    <>
                      <option value="">Select a service provider</option>
                      <option value="eedc">
                        Enugu Electricity Distribution Company (EEDC)
                      </option>
                      <option value="portharcourt">
                        Port Harcourt Electricity Distribution Company (PHEDC)
                      </option>
                      <option value="abakaliki">Abakaliki Electricity Distribution Company</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div className="electricity-section" style={isMobile ? mobileSectionStyles : {}}>
              <p className="electricity-label">Meter Number</p>
              <div
                className="electricity-select-wrapper"
                style={isMobile ? { height: '56px', padding: '10px' } : {}}
              >
                <input
                  type="text"
                  className="electricity-select"
                  placeholder="Enter meter number"
                  style={isMobile ? mobileInputStyles : {}}
                />
              </div>
            </div>
          </div>

          <p className="electricity-caption">Select Amount</p>

          <div className="amount-container">
            {['1000', '2000', '3000', '4000', '5000', '6000', '7000'].map((amount) => (
              <div key={amount} className="amount-box">
                ₦{amount}
              </div>
            ))}
          </div>

          <div className="enter-amount-wrapper">
            <span className="naira-symbol">₦</span>
            <input type="text" placeholder="Enter Amount" className="enter-amount-box" />
          </div>

          <div className="create-request-wrapper">
            <button className="create-request-button">Create Request Bundle</button>
          </div>
        </div>
      </main>
    </TemplatePage>
  );
};

export default Electricity;
