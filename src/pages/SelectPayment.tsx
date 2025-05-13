import React, { useState } from "react";
import "./SelectPayment.css";
import { FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Header from "../components/Header";
import BankCardForm from "../components/BankCardForm";
import BankAccountForm from "../components/BankAccountForm";
import WalletForm from "../components/WalletForm";

interface PaymentMethod {
  id: string;
  label: string;
  details: string;
}

const paymentOptions: PaymentMethod[] = [
  {
    id: "card",
    label: "Add a Bank Card",
    details: "Enter your card number, expiry date, and CVV.",
  },
  {
    id: "bank",
    label: "Add a Bank Account",
    details: "Provide your account number and bank name.",
  },
  {
    id: "wallet",
    label: "Add a Wallet",
    details: "Connect your digital wallet for seamless transactions.",
  },
];

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  method: PaymentMethod | null;
  onSuccess: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  method,
  onSuccess,
}) => {
  if (!isOpen || !method) return null;

  const renderForm = () => {
    switch (method.id) {
      case "card":
        return <BankCardForm onSuccess={onSuccess} />;
      case "bank":
        return <BankAccountForm onSuccess={onSuccess} />;
      case "wallet":
        return <WalletForm onSuccess={onSuccess} />;
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <h2 className="modal-title">{method.label}</h2>
        {renderForm()}
      </div>
    </div>
  );
};

const SelectPayment: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(
    null
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handlePaymentSuccess = () => {
    setSelectedMethod(null); // Close modal
    setShowSuccessOverlay(true); // Show overlay

    // Optionally auto-hide the success overlay after 3 seconds
    setTimeout(() => {
      setShowSuccessOverlay(false);
    }, 10000);
  };

  const balance = 0; // Replace with actual balance prop or API data

  return (
    <div className="generate-request-container">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="main-section">
        <Header />

        <main className="main-content">
          <button className="back-button">
            <span className="dropdown-icon">
              <img src="./Image/dropdown.png" alt="Dropdown Icon" />
            </span>
            Back
          </button>

          <p className="insufficient-text">
            Insufficient Available Balance{" "}
            <span className="warning-icon">
              <img src="./Image/Warning.png" alt="Warning Icon" />
            </span>
          </p>

          <div className="balance-card">
            <div className="balance-header">
              <span className="eye-icon">
                <img src="./Image/Shield.png" alt="Shield Icon" />
              </span>
              <span className="balance-label">Available Balance</span>
              <img src="./Image/Privacy.png" alt="Privacy Icon" />
            </div>
            <div className="balance-amount">₦ {balance.toFixed(2)}</div>
          </div>

          <button className="add-money-button">+ Add Money</button>

          <div className="payment-container">
            <h3 className="section-title">Select Payment Method</h3>
            <div className="payment-options">
              {paymentOptions.map((method) => (
                <div
                  key={method.id}
                  className="method-option"
                  onClick={() => setSelectedMethod(method)}
                >
                  {method.label}
                </div>
              ))}
            </div>
          </div>

          <PaymentModal
            isOpen={!!selectedMethod}
            onClose={() => setSelectedMethod(null)}
            method={selectedMethod}
            onSuccess={handlePaymentSuccess}
          />

          {showSuccessOverlay && (
            <div className="success-overlay">
              <div className="success-message">
                <h1>Transfer Successful</h1>
                <p>
                  Your payment to has been done successfully. Kindly check to
                  confirm.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <span>☰</span>}
      </button>
    </div>
  );
};

export default SelectPayment;
