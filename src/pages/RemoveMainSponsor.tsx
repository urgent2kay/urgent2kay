import React from "react";
import cleanup from "../assets/cleanup.png";
import "./relationship.css";

function RemoveMainSponsor() {
  return (
    <>
      <div className="rel-invite-container">
        <div className="rel-invite">
          <div className="invite-photo-text">
            <img src={cleanup} alt="envelop" className="invite-celebrate2" />
            <p className="success-text">
              <span className="success-span"> Mrs. Kamsi</span> has been removed
              as your Main Sponsor.
            </p>
          </div>
          <p className="success-text2">
            {" "}
            Feel free to pick another when you’re ready!
          </p>
          <button className="rel-invite-btn2">Done</button>
        </div>
      </div>
    </>
  );
}

export default RemoveMainSponsor;
