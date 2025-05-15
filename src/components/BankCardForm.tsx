import React, { useState } from "react";

interface BankCardFormProps {
  onSuccess: () => void;
}

const BankCardForm: React.FC<BankCardFormProps> = ({ onSuccess }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate API call here
    try {
      // Replace this with actual API logic
      console.log("Sending card data:", { cardNumber, expiry, cvc });

      // Simulate success
      setTimeout(() => {
        onSuccess(); // trigger overlay
      }, 500);
    } catch (error) {
      console.error("Error submitting card info", error);
      // optionally handle error state here
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label>Card Number</label>
        <span>
          <img src="./Image/dropdown.png" alt="Dropdown Icon" />
        </span>
        <input
          type="text"
          placeholder="1234 1234 1234 1234"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
      </div>

      <div className="form-row">
        <div>
          <label>Expiry Date</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Security Code</label>
          <input
            type="text"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            required
          />
        </div>
      </div>

      <p className="form-note">
        By providing your card information, you allow Urgent2kay to charge your
        card for future payments in accordance with their terms.
      </p>

      <button type="submit" className="form-button">
        Save
      </button>

      <p className="agreement-text">
        I Agree To The Terms Of Use, Refund Policy, And Privacy Policy.
      </p>
    </form>
  );
};

export default BankCardForm;
