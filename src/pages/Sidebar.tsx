
import React from 'react';
import { FaTachometerAlt, FaPlusCircle, FaUsers, FaHistory, FaQuestionCircle, FaUser, FaSignOutAlt } from 'react-icons/fa';

interface SidebarProps {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <h2 className="logo">Urgent2Kay</h2>
      <nav className="nav-links">
        <a href="#"><FaTachometerAlt style={{ marginRight: '10px' }} />Dashboard</a>
        <a className="active" href="#"><FaPlusCircle style={{ marginRight: '10px' }} />Generate Request</a>
        <a href="#"><FaUsers style={{ marginRight: '10px' }} />Relationship</a>
        <a href="#"><FaHistory style={{ marginRight: '10px' }} />Transaction History</a>
        <a href="#"><FaQuestionCircle style={{ marginRight: '10px' }} />Help</a>
        <a href="#"><FaUser style={{ marginRight: '10px' }} />Profile</a>
      </nav>

      {/* Logout */}
      <div style={{ marginTop: 'auto', width: '100%' }}>
        <a href="#" className="logout-link" style={{ display: 'flex', alignItems: 'center', color: '#555', textDecoration: 'none', marginTop: '20px', fontSize: '16px' }}>
          <FaSignOutAlt style={{ marginRight: '10px' }} />
          Logout
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
