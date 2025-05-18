import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import TemplatePage from "../Template";
import "./jumia.css";
import image10 from "../../assets/image10.png";

const JumiaShopping: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleBack = () => {
    navigate("/jumia");
  };

  return (
    <TemplatePage>
      <div
        className="jumia-main"
        style={isMobile ? { padding: "10px 20px" } : {}}
      >
        <button onClick={handleBack} className="back-button">
          ← Back
        </button>

        <div
          className="shopping-section"
          style={isMobile ? { paddingTop: "20px" } : {}}
        >
          <h2 className="shopping-title">
            Shopping / <span className="jumia-name">Jumia</span>
          </h2>

          <p className="service-provider-caption">Service Provider</p>

          {/* Product Card */}
          <div className="product-card">
            <div className="product-image">
              <img src={image10} alt="Product" className="product-img" />
            </div>
            <div className="product-order-id">Order ID</div>
            <hr className="product-divider" />
            <div className="product-amount-label">Amount</div>
            <div className="product-amount-input">
              <svg
                className="naira-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 23"
                fill="none"
              >
                <path
                  opacity="0.8"
                  d="M6.19232 16.8082V7.12215C6.19226 6.91629 6.26058 6.71625 6.38654 6.55343C6.5125 6.39061 6.68898 6.27424 6.88825 6.2226C7.08753 6.17096 7.29831 6.18697 7.4875 6.26812C7.67668 6.34927 7.83356 6.49096 7.93348 6.67093L13.2985 16.3287C13.3984 16.5087 13.5553 16.6504 13.7445 16.7315C13.9337 16.8127 14.1445 16.8287 14.3438 16.777C14.543 16.7254 14.7195 16.609 14.8455 16.4462C14.9714 16.2834 15.0397 16.0834 15.0397 15.8775V6.19141M4.42285 9.73035H16.8092M4.42285 13.2693H16.8092"
                  stroke="#555353"
                  strokeWidth="1.76947"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="enter-amount-text">Enter Amount</span>
            </div>
            <Link to="error-404-page">
              {" "}
              <button className="add-to-cart-button">Add to cart</button>
            </Link>
          </div>
        </div>
      </div>
    </TemplatePage>
  );
};

export default JumiaShopping;
