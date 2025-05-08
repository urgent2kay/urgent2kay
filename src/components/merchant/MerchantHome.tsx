import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./merchant.css";
import waveImage from "../../assets/merch-img.png";
import merchLogo from "../../assets/logo-white.svg";

const MerchantHome: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="merch-container">
      <div className="merch-left">
        <Link to="#" className="logo-container">
          <img src={merchLogo} alt="logo" className="logo-img" />
          {/* <p>Urgent2kay</p> */}
        </Link>

        <img src={waveImage} alt="side image" className="merch-image"></img>
      </div>
      <div className="merch-right">
        <div className="merch-right-texts">
          {" "}
          <h2>Welcome to Urgent 2kay</h2>
          <p>
            Become a Verified Service Provider and start accepting bill payments
            directly from bill sponsors and users!
          </p>
        </div>
        {/* <Link to="merch-business"> */}
        <button
          onClick={() => navigate("/register")}
          className="start-button"
        >
          Start Registration
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default MerchantHome;
