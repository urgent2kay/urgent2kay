import React from "react";
import { Link } from "react-router-dom";
import "./merchant.css";
import waveImage from "../../assets/merch-img.png";
import merchLogo from "../../assets/logo-white.svg";

const MerchantThankyou: React.FC = () => {
  return (
    <div className="merch-container">
      <div className="merch-left merch-left2">
        <Link to="#" className="logo-container2">
          <img src={merchLogo} alt="logo" className="logo-img" />
        </Link>

        <img src={waveImage} alt="side image" className="merch-image"></img>
        <p>Together, we’re making bills easier — and dreams closer.</p>
      </div>
      <div className="merch-right">
        <div className="merch-right-texts">
          {" "}
          <h2>Thank You!</h2>
          <p>Your Application is Under Review.</p>
        </div>
        <Link to="#">
          <button className="start-button">Done</button>
        </Link>
      </div>
    </div>
  );
};

export default MerchantThankyou;

