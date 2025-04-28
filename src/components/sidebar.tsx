// src/components/Sidebar.tsx
import React from 'react';
import { 
  FaTachometerAlt, FaPlusCircle, FaUsers, 
  FaHistory, FaQuestionCircle, FaUser, FaSignOutAlt 
} from 'react-icons/fa';

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen }) => {
  return (
    <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <h2 className="logo">Urgent2Kay</h2>
      <nav className="nav-links">
        <a href="#"><FaTachometerAlt className="icon" />Dashboard</a>
        <a className="active" href="#"><FaPlusCircle className="icon" />Generate Request</a>
        <a href="#"><FaUsers className="icon" />Relationship</a>
        <a href="#"><FaHistory className="icon" />Transaction History</a>
        <a href="#"><FaQuestionCircle className="icon" />Help</a>
        <a href="#"><FaUser className="icon" />Profile</a>
      </nav>
      <div style={{ marginTop: 'auto', width: '100%' }}>
        <a href="#" className="logout-link">
          <FaSignOutAlt className="icon" />
          Logout
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
