import React, { useState, useRef, useEffect } from "react";

import Sidebar from "./Sidebar";
import Header from "../components/Header";
import { FaTimes } from "react-icons/fa";
import "../pages/GenerateRequest.css";
import './relationship.css'
import womanProfile from "../assets/Doctor.png";

const FirstRelationship: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    "Set As Main Sponsor",
    "Remove As Main Sponsor",
    "View Payment Details",
    "Remove Sponsor",
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="generate-request-container">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="main-section">
        <Header />

        <main className="main-content main2">
          <div className="align-left">
            <h1>My Relationships</h1>
            <div className="display-relationship">
              <img src={womanProfile} alt="doctor" className="rel-doctor" />
              <div className="mother">
                <p>Mrs. Kansi</p>
                <span>Mother</span>
              </div>
              <button className="small-rel-btn">View</button>
              <button className="small-rel-btn small-rel-btn2">Edit</button>
              <div ref={menuRef} className="kebab-container">
                <button onClick={() => setOpen(!open)} className="dot-group">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </button>

                {open && (
                  <div className="kebab-menu">
                    {menuItems.map((item) => (
                      <button
                        key={item}
                        className="kebab-item"
                        onClick={() => {
                          setOpen(false);
                          console.log(`${item} clicked`);
                        }}
                      >{item}</button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <button className="main2-btn">Add New Relationship</button>
        </main>
      </div>

      {/* Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <span>☰</span>}
      </button>
    </div>
  );
};

export default FirstRelationship;
