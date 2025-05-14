import React, { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "../components/Header";
import { FaTimes } from "react-icons/fa";
import norel from "../assets/relat1.png";
import "./relationship.css";
import "./sidebar.css";
import './GenerateRequest.css'

const NoRelationship: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="generate-request-container">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-section">
        <Header />
        <main className="main-content">
          <h1>Template Page</h1>
          <div className="rel-body1">
            <img src={norel} alt="empty image" className="empty-image" />
            <div className="text-btn">
              <p className="rel-text">
                Oops! It seems like you haven’t created any relationships yet
              </p>
              <button className="rel-btn">Create A Relationship</button>
            </div>
          </div>
        </main>
      </div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <span>☰</span>}
      </button>
    </div>
  );
};

export default NoRelationship;
