// src/components/Header.tsx
import React, { useState } from 'react';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div>
          <h2>Hi, Ada</h2>
          <p>Let’s simplify your finances!</p>
        </div>
        <div className="search-container">
          <div className="search-icon"><FaSearch /></div>
          <button className="search-btn">Search</button>
        </div>
      </div>
      <div className="navbar-right">
        <button className="connect-wallet-btn">Connect Wallet</button>
        <div className="notification-icon" onClick={toggleDropdown}>
          <FaBell />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <p>Notification 1</p>
              <p>Notification 2</p>
            </div>
          )}
        </div>
        <div className="profile-icon" onClick={toggleDropdown}>
          <FaUser />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <p>Profile Settings</p>
              <p>Logout</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
