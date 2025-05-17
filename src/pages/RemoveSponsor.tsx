import React from "react";
import sponsor2 from "../assets/sponsor2.png";
import "./relationship.css";

function RemoveSponsor() {
  return (
    <>
      <div className="rel-invite-container">
        <div className="rel-invite">
          <div className="invite-photo-text">
            <img src={sponsor2} alt="envelop" className="invite-celebrate2" />
            <p className="success-text">Sponsor Profile Deleted.</p>
          </div>
          <p className="success-text2">
            {" "}
            Mrs. Kamsi is no longer linked to your account.
          </p>
          <button className="rel-invite-btn2">Done</button>
        </div>
      </div>
    </>
  );
}

export default RemoveSponsor;
