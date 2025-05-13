import React, { useState } from "react";

interface BankAccountFormProps {
  onSuccess: () => void;
}

const BankAccountForm: React.FC<BankAccountFormProps> = ({ onSuccess }) => {
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bvn, setBvn] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Simulate sending data to API
      console.log("Submitting bank info:", { bank, accountNumber, bvn });

      // Simulate successful API response
      setTimeout(() => {
        onSuccess(); // trigger overlay
      }, 500);
    } catch (error) {
      console.error("Bank account submission failed", error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>Bank</label>
      <select value={bank} onChange={(e) => setBank(e.target.value)} required>
        <option value="">Select Bank</option>
        <option value="Access Bank">Access Bank</option>
        <option value="GTBank">GTBank</option>
        <option value="UBA">UBA</option>
        {/* Add more options or fetch dynamically */}
      </select>

      <label>Bank Account</label>
      <input
        type="text"
        placeholder="Enter 10 digit account number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        required
      />

      <label>Enter your BVN</label>
      <input
        type="text"
        placeholder="Enter your BVN"
        value={bvn}
        onChange={(e) => setBvn(e.target.value)}
        required
      />

      <p className="form-note">
        To ensure the security of your funds, you can only add a bank account
        linked to your NIN
      </p>

      <button type="submit" className="form-button">
        Confirm
      </button>

      <p className="agreement-text">
        I Agree To The Terms Of Use, Refund Policy, And Privacy Policy.
      </p>
    </form>
  );
};

export default BankAccountForm;
