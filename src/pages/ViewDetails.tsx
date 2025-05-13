import React from "react";
import "./relationship.css";

function ViewDetails() {
  return (
    <div className="bundle-container">
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
      <button className="done-button">Done</button>
    </div>
  );
}

export default ViewDetails;
