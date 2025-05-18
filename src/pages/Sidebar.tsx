import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="#" className="nav-item active">
          <FaTachometerAlt className="nav-icon" />
          Dashboard
        </Link>
        <Link to="/generate-request" className="nav-item">
          <FaPlusCircle className="nav-icon" />
          Generate Request
        </Link>
        <Link to="/create-relationship" className="nav-item">
          <FaUsers className="nav-icon" />
          Relationship
        </Link>
        <Link to="/page-under-construction" className="nav-item">
          <FaHistory className="nav-icon" />
          Transaction History
        </Link>
        <Link to="/page-under-construction" className="nav-item">
          <FaQuestionCircle className="nav-icon" />
          Help
        </Link>
        <Link to="/page-under-construction" className="nav-item">
          <FaUser className="nav-icon" />
          Profile
        </Link>
        <Link to="/page-under-construction" className="nav-item">
          <FaUser className="nav-icon" />
          Settings
        </Link>
      </nav>

      <div className="logout-container">
        <Link to="#" className="logout-link">
          <FaSignOutAlt className="logout-icon" />
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
