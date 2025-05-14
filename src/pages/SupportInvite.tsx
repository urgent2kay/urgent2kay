import React from "react";
import logopurple from "../assets/logo-purple1.svg";
import envelop from "../assets/envelop.png";

function SupportInvite() {
  return (
    <>
      <div className="rel-invite-container">
        <img src={logopurple} alt="logo" className="rel-logo" />
        <div className="rel-invite">
          <h3>You've Been Invited to Support a Bill</h3>
          <div className="invite-photo-text">
            <img src={envelop} alt="envelop" className="invite-envelop" />
            <p>Someone has added you as their bill sponsor on Urgent 2Kay.</p>
          </div>
          <p>
            {" "}
            To view their request and start supporting them, please create a
            free sponsor account.
          </p>
          <button className="rel-invite-btn">Create Account</button>
        </div>
      </div>
    </>
  );
}

export default SupportInvite;
