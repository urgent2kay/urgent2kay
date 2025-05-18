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
import { NavLink } from "react-router-dom";
import "./sidebar.css";

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <button className="sidebar-toggle mobile-only" onClick={toggleSidebar}>
        <FaTimes />
      </button>

      <h2 className="logo">Urgent2Kay</h2>
      <nav className="nav-links">
        <NavLink to="/dashboard" className="nav-item">
          <FaTachometerAlt className="nav-icon" />
          Dashboard
        </NavLink>
        <NavLink to="/generate-request" className="nav-item">
          <FaPlusCircle className="nav-icon" />
          Generate Request
        </NavLink>
        <NavLink to="/first-relationship" className="nav-item">
          <FaUsers className="nav-icon" />
          Relationship
        </NavLink>
        <NavLink to="/page-under-construction" className="nav-item">
          <FaHistory className="nav-icon" />
          Transaction History
        </NavLink>
        <NavLink to="/page-under-construction" className="nav-item">
          <FaQuestionCircle className="nav-icon" />
          Help
        </NavLink>
        <NavLink to="/page-under-construction" className="nav-item">
          <FaUser className="nav-icon" />
          Profile
        </NavLink>
        <NavLink to="/account" className="nav-item">
          <FaUser className="nav-icon" />
          Settings
        </NavLink>
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
