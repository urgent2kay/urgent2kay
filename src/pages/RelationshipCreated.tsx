import React from "react";
import celebrate from "../assets/celebrate.png";
import { useNavigate } from "react-router-dom";
import "./relationship.css";

interface RelationshipCreatedProps {
  show: boolean;
  onClose: () => void;
  sponsorEmail: string;
}

const RelationshipCreated: React.FC<RelationshipCreatedProps> = ({ 
  show,
  onClose,
  sponsorEmail,
}) => {
  const navigate = useNavigate();

  // attach this to where button is located
  const handleClick = () => {
    navigate("/first-relationship"); // change if this is not the actual route
  };

  if (!show) return null;

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
    <div className="modal-overlay">
      <div className="celebrate-container modal">
        <div className="celebrate-middle">
          <div className="celebrate-top">
            <img
              src={celebrate}
              alt="relationship photo"
              className="celebrate-photo"
            />
            <h3>Relationship Added Successfully!</h3>
          </div>
          <p>
            Now, invite your sponsor to connect and approve bill requests easily
          </p>
          <button className="main1-btn">View Relationship</button>
        </div>


        <button className="modal-close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default RelationshipCreated;
