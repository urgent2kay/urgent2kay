// import React from "react";
// import { FaCheck } from "react-icons/fa";

// interface SuccessScreenProps {
//   onRestart: () => void;
// }

// const SuccessScreen = ({ onRestart }: SuccessScreenProps) => {
//   return (
//     <div className="success-screen">
//       <div className="success-icon">
//         <FaCheck style={{ color: "green" }} />
//       </div>
//       <h2>Registration Successful!</h2>
//       <>Thank you for registering your partner/service-provider account.</>
//       <p>We'll review your application and contact you shortly.</p>
//       <button onClick={onRestart} className="success-btn">
//         Register Another Business
//       </button>
//     </div>
//   );
// };

// export default SuccessScreen;

import React from "react";
import { Link } from "react-router-dom";
import "./merchant.css";
import waveImage from "../../assets/merch-img.png";
import merchLogo from "../../assets/logo-white.svg";
import { FaCheck } from "react-icons/fa";

interface SuccessScreenProps {
  onRestart: () => void;
}

const SuccessScreen = ({ onRestart }: SuccessScreenProps) => {
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
          <FaCheck style={{ color: "green" }} className="success-icon" />
          <h2>Registration Successful! 🎉</h2>
        </div>
        <p className="success-text1">
          Thank you for registering your partner/service-provider account.{" "}
          <br></br> We'll review your application and contact you shortly.
        </p>
        {/* <p className="success-text2">We'll review your application and contact you shortly.</p> */}
        <div className="error-actions">
          <button onClick={onRestart} className="success-btn">
            Register Another Business
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
