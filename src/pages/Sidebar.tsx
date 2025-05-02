import React from 'react';
import { FaTachometerAlt, FaPlusCircle, FaUsers, FaHistory, FaQuestionCircle, FaUser, FaSignOutAlt } from 'react-icons/fa';
import './sidebar.css';

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <h2 className="logo">Urgent2Kay</h2>
      <nav className="nav-links">
        <a href="#" className="nav-item">
          <FaTachometerAlt className="nav-icon" />
          Dashboard
        </a>
        <a className="nav-item active" href="#">
          <FaPlusCircle className="nav-icon" />
          Generate Request
        </a>
        <a href="#" className="nav-item">
          <FaUsers className="nav-icon" />
          Relationship
        </a>
        <a href="#" className="nav-item">
          <FaHistory className="nav-icon" />
          Transaction History
        </a>
        <a href="#" className="nav-item">
          <FaQuestionCircle className="nav-icon" />
          Help
        </a>
        <a href="#" className="nav-item">
          <FaUser className="nav-icon" />
          Profile
        </a>
      </nav>

      {/* Logout */}
      <div className="logout-container">
        <a href="#" className="logout-link">
          <FaSignOutAlt className="logout-icon" />
          Logout
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
