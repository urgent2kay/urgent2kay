import React from "react";
import "./BundleOverview.css";

interface BundleItem {
  name: string;
  amount: number;
}

interface Sponsor {
  name: string;
  imageUrl: string;
}

const bundleItems: BundleItem[] = [
  { name: "Electricity", amount: 5000 },
  { name: "Jumia order", amount: 20000 },
  { name: "Airtime", amount: 3000 },
  { name: "Lunch", amount: 4500 },
];

const sponsor: Sponsor = {
  name: "Mother",
  imageUrl: "./Image/Mother.jpg",
};

const BundleOverview: React.FC = () => {
  const totalAmount = bundleItems.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="bundle-container">
      <button className="back-button">
        <span className="dropdown-icon">
          <img src="./Image/dropdown.png" alt="Dropdown Icon" />
        </span>
        Back
      </button>

      <div className="bundle-header">
        <h2>Bundle Overview / {sponsor.name}</h2>
        <h3>Sponsor</h3>
      </div>

      <div className="sponsor-info">
        <img
          src={sponsor.imageUrl}
          alt={sponsor.name}
          className="sponsor-image"
        />
        <span className="sponsor-name">{sponsor.name}</span>
      </div>

      <div className="bundle-details">
        <h2>Bundle</h2>
        <h3>Monthly Essentials</h3>
        <ul className="bundle-list">
          {bundleItems.map((item, index) => (
            <li key={index} className="bundle-item">
              <span>{item.name}</span>
              <span>₦ {item.amount.toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <div className="bundle-amount">
          <h2>Amount</h2>
          <p>₦ {totalAmount.toLocaleString()}</p>
        </div>
      </div>

      <div className="bundle-actions">
        <input type="text" placeholder="Add a note" className="note-input" />
        {/* <div className="custom-select"> */}
        <select className="priority-select">
          <option>Select Priority</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        {/* </div> */}
      </div>

      <div className="bundle-buttons">
        <button className="send-button">Send to Sponsor</button>
        <button className="edit-button">Edit Request</button>
      </div>
    </div>
  );
};

export default BundleOverview;
