import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "../components/Header";
import { FaTimes } from "react-icons/fa";
import "../pages/GenerateRequest.css";
import "./relationship.css";
import womanProfile from "../assets/Doctor.png";
import celebrate2 from "../assets/celebrate2.png";
import cleanup from "../assets/cleanup.png";
import sponsor2 from "../assets/sponsor2.png";
import { Link } from "react-router-dom";
import TemplatePage from "./Template";

interface RelationshipCreatedProps {
  sponsorEmail?: string;
}

const FirstRelationship: React.FC<RelationshipCreatedProps> = ({
  sponsorEmail,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [showMainSponsorModal, setShowMainSponsorModal] = useState(false);
  const [showRemoveSponsorModal, setShowRemoveSponsorModal] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showRemoveMinorSponsor, setShowRemoveMinorSponsor] = useState(false);

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

  const handleMenuClick = (item: string) => {
    setOpen(false);
    if (item === "Set As Main Sponsor") {
      setShowMainSponsorModal(true);
    } else if (item === "Remove As Main Sponsor") {
      setShowRemoveSponsorModal(true);
    } else if (item === "View Payment Details") {
      setShowDetails(true);
    } else if (item === "Remove Sponsor") {
      setShowRemoveMinorSponsor(true);
    }
    console.log(`${item} clicked`);
  };

  const handleCopyLink = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
      alert("Invite link copied to clipboard!");
    });
  };

  const handleNotifySponsor = () => {
    // Simulate email notification
    alert(`An email has been sent to ${sponsorEmail}`);
    // You can replace this with an actual API call
  };

  return (
    <TemplatePage>
      <main className="main-content main2">
        <div className="align-left">
          <h1>My Relationships</h1>
          <div className="display-relationship">
            <img src={womanProfile} alt="doctor" className="rel-doctor" />
            <div className="mother">
              <p>Mrs. Kansi</p>
              <span>Mother</span>
            </div>
            {/* <button className="small-rel-btn">View</button> */}
            {/* <button className="small-rel-btn small-rel-btn2">Edit</button> */}
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
                      onClick={() => handleMenuClick(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <button className="main2-btn">Add New Relationship</button> */}
        <div className="button-group2">
          <Link to="/create-relationship">
            <button className="main2-btn">Add New Relationship</button>
          </Link>
          {/* <Link to="rt-invite"> */}{" "}
          <button className="main2-btn" onClick={handleCopyLink}>
            Share Invite Link
          </button>
          {/* </Link> */}
          {/* <p>If your sponsor doesn't have an account with us</p> */}
          {/* <Link to="/notify"> */}{" "}
          <button className="main2-btn" onClick={handleNotifySponsor}>
            Notify Your Sponsor
          </button>
          {/* </Link> */}
          {/* <p>If your sponsor has an account with us</p> */}
        </div>
      </main>
      {/* Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <span>☰</span>}
      </button>
      {/* Main Sponsor Modal */}
      {showMainSponsorModal && (
        <div className="modal-overlay2">
          <div className="rel-invite-container modal2">
            <div className="rel-invite">
              <div className="invite-photo-text">
                <img
                  src={celebrate2}
                  alt="envelop"
                  className="invite-celebrate2"
                />
                <p className="success-text">
                  Success! <span className="success-span">Mrs. Kamsi</span> is
                  now set as your Main Sponsor.
                </p>
              </div>
              <p className="success-text2">
                They’ll now appear first when making future requests.
              </p>
              <button
                className="rel-invite-btn2"
                onClick={() => setShowMainSponsorModal(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
      {showRemoveSponsorModal && (
        <div className="modal-overlay3">
          <div className="rel-invite-container modal3">
            <div className="rel-invite">
              <div className="invite-photo-text">
                <img
                  src={cleanup}
                  alt="envelop"
                  className="invite-celebrate2"
                />
                <p className="success-text">
                  <span className="success-span"> Mrs. Kamsi</span> has been
                  removed as your Main Sponsor.
                </p>
              </div>
              <p className="success-text2">
                {" "}
                Feel free to pick another when you’re ready!
              </p>
              <button
                className="rel-invite-btn2"
                onClick={() => setShowRemoveSponsorModal(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
      {showDetails && (
        <div className="modal-overlay5">
          <div className="modal5">
            <div className="bundle-container">
              {/* <button className="close-modal4" onClick={onClose}>
                &times;
              </button> */}
              <h3 className="bundle-title">Bundle</h3>
              <h3 className="bundle-name">Monthly Essencials</h3>
              <ul className="item-list">
                <li>
                  <span>Electricity</span>
                  <span>{"\u20A6"}5,000</span>
                </li>
                <li>
                  <span>Jumia Order</span>
                  <span>{"\u20A6"}20,000</span>
                </li>
                <li>
                  <span>Electricity</span>
                  <span>{"\u20A6"}3,000</span>
                </li>
                <li>
                  <span>Electricity</span>
                  <span>{"\u20A6"}4,500</span>
                </li>
              </ul>
              <div className="amount-paid">
                <span>Amount Paid</span>
                <strong>{"\u20A6"}32,500</strong>
              </div>
              <button
                className="rel-invite-btn2"
                onClick={() => setShowDetails(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
      {showRemoveMinorSponsor && (
        <div className="modal-overlay6">
          <div className="rel-invite-container modal6">
            <div className="rel-invite">
              <div className="invite-photo-text">
                <img
                  src={sponsor2}
                  alt="envelop"
                  className="invite-celebrate2"
                />
                <p className="success-text">Sponsor Profile Deleted.</p>
              </div>
              <p className="success-text2">
                {" "}
                Mrs. Kamsi is no longer linked to your account.
              </p>
              <button
                className="rel-invite-btn2"
                onClick={() => setShowRemoveMinorSponsor(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
      ;
    </TemplatePage>
  );
};

export default FirstRelationship;
