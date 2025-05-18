import React from "react";
import "./relationship.css";

interface ViewDetailsProps {
  onClose: () => void;
}

function ViewDetails({ onClose }: ViewDetailsProps) {
  return (
    <div className="modal-overlay4">
      <div className="modal-content4">
        <div className="bundle-container">
          <button className="close-modal4" onClick={onClose}>
            &times;
          </button>
          <h3 className="bundle-title">Bundle</h3>
          <h3 className="bundle-name">Monthly Essencials</h3>
          <ul className="item-list">
            <li>
              <span>Electricity</span>
              <span>{"\u20A6"}5,000</span>
            </li>
            <li>
              <span>Jumia Order</span>
              <span>{"\u20A6"}20,000</span>
            </li>
            <li>
              <span>Electricity</span>
              <span>{"\u20A6"}3,000</span>
            </li>
            <li>
              <span>Electricity</span>
              <span>{"\u20A6"}4,500</span>
            </li>
          </ul>
          <div className="amount-paid">
            <span>Amount Paid</span>
            <strong>{"\u20A6"}32,500</strong>
          </div>
          <button className="done-button" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;
