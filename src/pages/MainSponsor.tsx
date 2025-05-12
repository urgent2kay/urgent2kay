import React from "react";
import celebrate2 from "../assets/celebrate2.png";
import './relationship.css'

function MainSponsor() {
  return (
    <>
      <div className="rel-invite-container">
        <div className="rel-invite">
          <div className="invite-photo-text">
            <img src={celebrate2} alt="envelop" className="invite-celebrate2" />
            <p className="success-text"> Success! 
               <span className="success-span"> Mrs. Kamsi</span> is now set as
              your Main Sponsor.
            </p>
          </div>
          <p className="success-text2"> They’ll now appear first when making future requests.</p>
          <button className="rel-invite-btn2">Done</button>
        </div>
      </div>
    </>
  );
}

export default MainSponsor;
