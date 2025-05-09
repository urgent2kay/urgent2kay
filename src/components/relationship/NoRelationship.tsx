import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../../pages/Sidebar";
import "./relationship.css";
import "../Header.css";
import "../../pages/sidebar.css";
import norel from "../../assets/relat1.png";

const NoRelationship = () => {
  //   const [sidebarOpen, setSidebarOpen] = useState(false);

  //   const toggleSidebar = () => {
  //     setSidebarOpen((prev) => !prev);
  //   };

  return (
    <div className="relationship-container">
      {/* <div className="side-div">
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="middle-div">
        <div className="nav-div">
          <Header />
        </div>
      </div> */}

      {/* ADJUST THIS LATER TO ALIGN */}
      <div className="rel-body1">
        <img src={norel} alt="empty image" className="empty-image" />
        <p className="rel-text">
          Oops! It seems like you haven’t created any relationships yet
        </p>
        <button className="rel-btn">Create A Relationship</button>
      </div>
    </div>
  );
};

export default NoRelationship;
