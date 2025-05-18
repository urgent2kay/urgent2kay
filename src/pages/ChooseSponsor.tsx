import React, { useState } from "react";
import "./ChooseSponsor.css";
import Sidebar from "./Sidebar";
import Header from "../components/Header";
import { FaTimes } from "react-icons/fa";
import "./GenerateRequest.css";
import { Link } from "react-router-dom";
import TemplatePage from "./Template";

interface Sponsor {
  name: string;
  imageUrl: string;
}

const sponsor: Sponsor = {
  name: "Mother",
  imageUrl: "./Image/Mother.jpg",
};

const ChooseSponsor: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <TemplatePage>
      <main className="main-content">
        <div className="bundle-container2">
          <button className="back-button2">
            <span className="dropdown-icon">
              <img src="./Image/dropdown.png" alt="Dropdown Icon" />
            </span>
            Back
          </button>
          <div className="choose-sponsor-header">
            <h2>Who Would You Like To Send This Bundle To?</h2>
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

          <div className="bundle-buttons">
            <Link to="/bundle-overview">
              <button className="send-button">Continue</button>
            </Link>
            <Link to="/create-relationship">
              <button className="edit-button">Add New Sponsor</button>
            </Link>
          </div>
        </div>
      </main>
    </TemplatePage>
  );
};

export default ChooseSponsor;
