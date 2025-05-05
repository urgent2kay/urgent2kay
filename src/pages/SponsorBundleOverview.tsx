import React, { useState } from "react";
import "./SponsorBundleOverview.css";
import Sidebar from "./Sidebar";
import Header from "../components/Header";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

interface BundleItem {
  name: string;
  amount: number;
}

interface Sponsoree {
  name: string;
  imageUrl: string;
}

const bundleItems: BundleItem[] = [
  { name: "Electricity", amount: 5000 },
  { name: "Jumia order", amount: 20000 },
  { name: "Airtime", amount: 3000 },
  { name: "Lunch", amount: 4500 },
];

const sponsoree: Sponsoree = {
  name: "Ada",
  imageUrl: "./Image/Mother.jpg",
};

const SponsorBundleOverview: React.FC = () => {
  const totalAmount = bundleItems.reduce((sum, item) => sum + item.amount, 0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="generate-request-container">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Section */}
      <div className="main-section">
        <Header />

        {/* Main Content */}
        <main className="main-content">
          <div className="bundle-container">
            <Link to="/choose-sponsor">
              <button className="back-button">
                <span className="dropdown-icon">
                  <img src="./Image/dropdown.png" alt="Dropdown Icon" />
                </span>
                Back
              </button>
            </Link>
            <div className="bundle-header">
              <h2>Request Overview</h2>
              <h3>Beneficiary</h3>
            </div>

            <div className="sponsor-info">
              <img
                src={sponsoree.imageUrl}
                alt={sponsoree.name}
                className="sponsor-image"
              />
              <span className="sponsor-name">
                <h4>Daughter/{sponsoree.name}</h4>
              </span>
            </div>

            <div className="bundle-details">
              <h2>Bundle ID: 98BA340</h2>
              <h3>Monthly Essentials</h3>
              <ul className="bundle-list">
                {bundleItems.map((item, index) => (
                  <li key={index} className="bundle-item">
                    <span>{item.name}</span>
                    <p>₦ {item.amount.toLocaleString()}</p>
                  </li>
                ))}
              </ul>
              <div className="bundle-amount">
                <h2>Amount</h2>
                <p>₦ {totalAmount.toLocaleString()}</p>
              </div>
            </div>

            <div className="priority-section">
              <p>Priority</p>
              <p className="priority-tag">Very urgent</p>
            </div>

            <div className="bundle-buttons">
              <Link to="request-sucessful">
                <button className="send-button">Accept</button>
              </Link>
              <button className="edit-button">Reject</button>
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <span>☰</span>}
      </button>
    </div>
  );
};

export default SponsorBundleOverview;
