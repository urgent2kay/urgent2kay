// import React from "react";
// import { FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "./merchant.css";

// interface ErrorScreenProps {
//   message: string;
//   onRetry: () => void;
// }

// const ErrorScreen = ({ message, onRetry }: ErrorScreenProps) => {
//   return (
//     <div className="error-screen">
//       <FaTimes style={{ color: "green" }} />
//       <h2>Registration Failed</h2>
//       <p className="error-message">{message}</p>
//       <div className="error-actions">
//         <button onClick={onRetry} className="error-btn">
//           Try Again
//         </button>
//         <Link to="/contact" className="your-link-class">
//           Contact Support
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ErrorScreen;

import React from "react";
import { Link } from "react-router-dom";
import "./merchant.css";
import waveImage from "../../assets/merch-img.png";
import merchLogo from "../../assets/logo-white.svg";
import { FaTimes } from "react-icons/fa";

interface ErrorScreenProps {
  message: string;
  onRetry: () => void;
}

const ErrorScreen = ({ message, onRetry }: ErrorScreenProps) => {
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
          <FaTimes style={{ color: "green" }} className="error-icon" />
          <h2>Registration Failed 😞</h2>
        </div>
        <p className="error">{message}</p>

        <div className="error-actions">
          <Link to="#" className="error-btn">
            <button onClick={onRetry}>
              Try Again
            </button>
          </Link>
          <Link to="/contact" className="contact-support">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorScreen;
