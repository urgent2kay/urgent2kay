import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';

const Header: React.FC = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNotification = () => {
    setNotificationOpen((prev) => {
      const newState = !prev;
      if (newState) setProfileOpen(false);
      return newState;
    });
  };

  const toggleProfile = () => {
    setProfileOpen((prev) => {
      const newState = !prev;
      if (newState) setNotificationOpen(false);
      return newState;
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // or sessionStorage.removeItem('token') if you're using sessionStorage
    navigate('/login'); // redirect to login page
  };

  return (
    <header
      style={{
        backgroundColor: 'white',
        padding: '10px 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 1px 5px rgba(0, 0, 0, 0.05)',
        width: '100%',
        flexWrap: 'wrap',
        gap: '10px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexGrow: 1 }}>
        <div>
          <h2 style={{ fontSize: '16px', color: '#333', marginRight: '5px' }}>Hi, Ada</h2>
          <p style={{ fontSize: '12px', color: '#555' }}>Let’s simplify your finances!</p>
        </div>

        <div
          className="search-container search-bar2"
          style={{
            border: 'none',
            boxShadow: 'none',
            outline: 'none',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '340px',
              padding: '5px',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '58px',
              border: '1px solid #E9DDDD',
              backgroundColor: '#FFFFFF',
            }}
          >
            <FaSearch
              style={{
                color: '#9C9999',
                fontSize: '14px',
              }}
            />
            <input
              type="text"
              placeholder="Search"
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontFamily: 'Archivo, sans-serif',
                fontSize: '13px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '140%',
                letterSpacing: '0.52px',
                color: '#9C9999',
                backgroundColor: 'transparent',
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          position: 'relative',
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}
      >
        <button
          style={{
            backgroundColor: '#401A6D',
            color: 'white',
            padding: '5px 10px',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '12px',
            marginRight: '8px',
          }}
        >
          Connect Wallet
        </button>

        {/* Notification Dropdown */}
        <div
          style={{
            position: 'relative',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={toggleNotification}
        >
          <FaBell style={{ fontSize: '16px' }} />
          <div
            style={{
              position: 'absolute',
              top: '40px',
              right: '0',
              backgroundColor: 'white',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              padding: '8px',
              display: notificationOpen ? 'flex' : 'none',
              flexDirection: 'column',
              width: '120px',
              zIndex: 1000,
              visibility: notificationOpen ? 'visible' : 'hidden',
              opacity: notificationOpen ? 1 : 0,
              pointerEvents: notificationOpen ? 'auto' : 'none',
              transition: 'opacity 0.3s ease, visibility 0.3s ease',
            }}
          >
            <p style={{ margin: 0, padding: '6px 8px', cursor: 'pointer', color: '#333', fontSize: '12px' }}>
              Notification 1
            </p>
            <div style={{ borderTop: '1px solid #ddd', margin: '4px 0' }}></div>
            <p style={{ margin: 0, padding: '6px 8px', cursor: 'pointer', color: '#333', fontSize: '12px' }}>
              Notification 2
            </p>
          </div>
        </div>

        {/* Profile Dropdown */}
        <div
          style={{
            position: 'relative',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px',
            cursor: 'pointer',
          }}
          onClick={toggleProfile}
        >
          <FaUser style={{ fontSize: '16px' }} />
          <div
            style={{
              position: 'absolute',
              top: '40px',
              right: '0',
              backgroundColor: 'white',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              padding: '8px',
              display: profileOpen ? 'flex' : 'none',
              flexDirection: 'column',
              width: '120px',
              zIndex: 1000,
              visibility: profileOpen ? 'visible' : 'hidden',
              opacity: profileOpen ? 1 : 0,
              pointerEvents: profileOpen ? 'auto' : 'none',
              transition: 'opacity 0.3s ease, visibility 0.3s ease',
            }}
          >
            <p style={{ margin: 0, padding: '6px 8px', cursor: 'pointer', color: '#333', fontSize: '12px' }}>
              Profile Settings
            </p>
            <div style={{ borderTop: '1px solid #ddd', margin: '4px 0' }}></div>
            <p
              onClick={handleLogout}
              style={{ margin: 0, padding: '6px 8px', cursor: 'pointer', color: '#333', fontSize: '12px' }}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
