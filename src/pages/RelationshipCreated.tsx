import React from "react";
import celebrate from "../assets/celebrate.png";
import "./relationship.css";

function RelationshipCreated() {
  return (
    <>
      <div className="celebrate-container">
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
        </div>
        <div className="button-group">
          <div className="left-part">
            <button>Share Invite Link</button>
            <p>If YOUR Sponsor Doessn't Have An Account With Us</p>
          </div>
          <div className="right-part">
            <button>Notify Your Sponsor</button>
            <p>If YOUR Sponsor Has An Account With Us</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RelationshipCreated;
