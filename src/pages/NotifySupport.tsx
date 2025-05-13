import React from "react";
import logopurple from "../assets/logo-purple1.svg";
import envelop from "../assets/envelop.png";

function NotifySupport() {
  return (
    <>
      <div className="rel-invite-container">
        <img src={logopurple} alt="logo" className="rel-logo" />
        <div className="rel-invite">
          <h3>Ada Has Added yYu as a Sponsor</h3>
          <div className="invite-photo-text">
            <img src={envelop} alt="envelop" className="invite-envelop" />
          </div>
          <p>
            {" "}
            You can now view their profile, see upcoming bill requests, and
            manage your level of support
          </p>
          <div className="invite-btn-group">
            <button className="rel-invite-btn2">Accept</button>
            <button className="rel-invite-btn2 yellow-border">Decline</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotifySupport;
