// BundleOverview.tsx
import React from "react";
import "./SponsorBundleOverview.css";
import { useNavigate } from "react-router-dom";

const SponsorBundleOverview: React.FC = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate("/select-payment");
  };

  const handleReject = () => {
    navigate("/dashboard");
  };

  const handleSaveForLater = () => {
    navigate("/generate-request");
  };

  return (
    <div className="bundle-container4">
      {/* <h2 className="header4">Bundle Overview</h2> */}
      <div className="bundle-card4">
        <div className="profile-section4">
          <img src="../image/images" alt="Profile" className="profile-img4" />
          <p className="relation">Daughter / Ada</p>
        </div>
        <div className="bundle-info4">
          <p>
            Bundle ID: <span className="bundle-id4">98BA340</span>
          </p>
          <p>
            Priority: <span className="priority4">Very urgent</span>
          </p>
        </div>

        <h3 className="section-title4">Monthly Essentials</h3>

        <table className="essentials-table4">
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
              <th>Service Provider</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Electricity</td>
              <td>₦ 5,000</td>
              <td>Abuja Electricity Distribution Corporation</td>
            </tr>
            <tr>
              <td>Jumia order</td>
              <td>₦ 20,000</td>
              <td>Jumia</td>
            </tr>
            <tr>
              <td>Airtime</td>
              <td>₦ 3,000</td>
              <td>MTN Nigeria</td>
            </tr>
            <tr>
              <td>Fried rice and chicken</td>
              <td>₦ 4,500</td>
              <td>Chicken Republic, 5th Avenue, Gwarinpa</td>
            </tr>
          </tbody>
        </table>

        <div className="total-section4">
          <strong>
            Total: <span className="total-amount4">₦ 32,500</span>
          </strong>
        </div>

        <div className="button-group4">
          <button className="btn accept4" onClick={handleAccept}>
            Accept
          </button>
          <button className="btn reject4" onClick={handleReject}>
            Reject
          </button>
          <button className="btn save4" onClick={handleSaveForLater}>
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
};
export default SponsorBundleOverview;
