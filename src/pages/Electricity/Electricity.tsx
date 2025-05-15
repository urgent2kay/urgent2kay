import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Header from '../../components/Header';
import { AiOutlineClose } from 'react-icons/ai'; 
import './Electricity.css';

const Electricity: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) setSidebarOpen(true);
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

  const mobileStyles: React.CSSProperties = {
    flexDirection: 'column',
    minHeight: '100vh',
    display: 'flex',
  };

  const mobileSidebarStyles: React.CSSProperties = {
    width: '100%',
    overflow: 'hidden',
    transition: 'width 0.3s ease',
    padding: '10px',
  };

  const mobileButtonStyles: React.CSSProperties = {
    padding: '8px',
    color: '#fff',
    border: 'none',
    backgroundColor: '#003366',
    cursor: 'pointer',
    margin: '10px auto',
    borderRadius: '5px',
    width: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

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
    <div className="electricity-page" style={isMobile ? mobileStyles : {}}>
      {isMobile && !sidebarOpen && (
        <button onClick={toggleSidebar} style={mobileButtonStyles}>
          <AiOutlineClose size={24} color="#fff" />
        </button>
      )}

      {isMobile ? (
        sidebarOpen && (
          <div className="electricity-sidebar" style={mobileSidebarStyles}>
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          </div>
        )
      ) : (
        <div className="electricity-sidebar">
          <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
      )}

      <div className="electricity-main" style={isMobile ? { width: '100%', marginTop: 0, paddingTop: 0 } : {}}>
        <Header />

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
                <div className="electricity-select-wrapper" style={isMobile ? { height: '56px', padding: '10px' } : {}}>
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
                        <option value="eedc">Enugu Electricity Distribution Company (EEDC)</option>
                        <option value="portharcourt">Port Harcourt Electricity Distribution Company (PHEDC)</option>
                        <option value="abakaliki">Abakaliki Electricity Distribution Company</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div className="electricity-section" style={isMobile ? mobileSectionStyles : {}}>
                <p className="electricity-label">Meter Number</p>
                <div className="electricity-select-wrapper" style={isMobile ? { height: '56px', padding: '10px' } : {}}>
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
              <input
                type="text"
                placeholder="Enter Amount"
                className="enter-amount-box"
              />
            </div>

            <div className="create-request-wrapper">
              <button className="create-request-button">Create Request Bundle</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Electricity;
