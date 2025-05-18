import React, { useState } from "react";
import "./BundleOverview.css";
import "./RequestSucessful.css";
// import Sidebar from "./Sidebar";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import TemplatePage from "./Template";

interface BundleItem {
  name: string;
  amount: number;
}

interface Sponsor {
  name: string;
  imageUrl: string;
}

const bundleItems: BundleItem[] = [
  { name: "Electricity", amount: 5000 },
  { name: "Jumia order", amount: 20000 },
  { name: "Airtime", amount: 3000 },
  { name: "Lunch", amount: 4500 },
];

const sponsor: Sponsor = {
  name: "Mother",
  imageUrl: "./Image/Mother.jpg",
};

const BundleOverview: React.FC = () => {
  const totalAmount = bundleItems.reduce((sum, item) => sum + item.amount, 0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const sendRequestToSponsor = () => {
    setIsSending(true);
    // Simulate an API call
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
    }, 3000); // 3 seconds delay
  };

  return (
    <TemplatePage>
      {/* <div className="generate-request-container">
        <div className="main-section">
          <Header /> */}
      <main className="main-content">
        <div className="bundle-container2">
          <Link to="/choose-sponsor">
            <button className="back-button2">
              <span className="dropdown-icon">
                <img src="./Image/dropdown.png" alt="Dropdown Icon" />
              </span>
              Back
            </button>
          </Link>

          <div className="bundle-header">
            <h2>Bundle Overview / {sponsor.name}</h2>
            <h3>Sponsor</h3>
          </div>

          <div className="sponsor-info">
            <img
              src={sponsor.imageUrl}
              alt={sponsor.name}
              className="sponsor-image"
            />
            <span className="sponsor-name">{sponsor.name}</span>
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

          <div className="bundle-actions">
            <input
              type="text"
              placeholder="Add a note"
              className="note-input"
            />
            <select className="priority-select">
              <option>Select Priority</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div className="bundle-buttons">
            <button
              className="send-button"
              onClick={sendRequestToSponsor}
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send to Sponsor"}
            </button>
            <Link to="/service-page">
              {" "}
              <button className="edit-button">Edit Request</button>
            </Link>
          </div>
        </div>
      </main>
      {/* </div> */}

      {/* Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <span>☰</span>}
      </button>

      {/* Loading Spinner */}
      {isSending && (
        <div className="loading-spinner">
          <div className="spinner-circle"></div>
        </div>
      )}

      {/* Success Popup */}
      {isSuccess && (
        <div className="success-popup">
          <div className="success-popup-content">
            <img
              src="./Image/successful.png"
              alt="Success"
              className="success-image"
            />
            <h2>Request Sent Successfully!</h2>
            <p>
              Your bundle has been sent to {sponsor.name}. They will receive a
              notification to review and approve your request.
            </p>
            <Link to="/dashboard">
              <button
                className="close-popup-button"
                onClick={() => setIsSuccess(false)}
              >
                View Dashboard
              </button>
            </Link>
          </div>
        </div>
      )}
      {/* </div> */}
    </TemplatePage>
  );
};

export default BundleOverview;
