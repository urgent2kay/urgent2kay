import React from "react";
import {
  FaTachometerAlt,
  FaPlusCircle,
  FaTimes,
  FaUsers,
  FaHistory,
  FaQuestionCircle,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

import "./sidebar.css";

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      {/* Toggle button visible only on mobile */}
      <button className="sidebar-toggle mobile-only" onClick={toggleSidebar}>
        <FaTimes />
      </button>

      <h2 className="logo">Urgent2Kay</h2>
      <nav className="nav-links">
        <a href="#" className="nav-item active">
          <FaTachometerAlt className="nav-icon" />
          Dashboard
        </a>
        <a className="nav-item" href="/generate-request">
          <FaPlusCircle className="nav-icon" />
          Generate Request
        </a>
        <a href="/first-relationship" className="nav-item">
          <FaUsers className="nav-icon" />
          Relationship
        </a>
        <a href="page-under-construction" className="nav-item">
          <FaHistory className="nav-icon" />
          Transaction History
        </a>
        <a href="page-under-construction" className="nav-item">
          <FaQuestionCircle className="nav-icon" />
          Help
        </a>
        <a href="/page-under-construction" className="nav-item">
          <FaUser className="nav-icon" />
          Profile
        </a>
        <a href="/account" className="nav-item">
          <FaUser className="nav-icon" />
          Settings
        </a>
      </nav>

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
