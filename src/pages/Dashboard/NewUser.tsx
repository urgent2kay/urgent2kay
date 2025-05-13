import React from 'react';
import './Dashboard.css';

interface NewUserProps {
  onCreateBundle: () => void;
  onPayBundle: () => void;
}

const NewUser: React.FC<NewUserProps> = ({ onCreateBundle, onPayBundle }) => {
  return (
    <div className="new-user">
      <img
        src="/images/dashboard-hero.png"
        alt="Dashboard Illustration"
        className="hero-image"
      />
      <p className="no-transactions-message">
        No Transactions Yet. Complete Your First Payment to See It Here!
      </p>
      <div className="get-started">
        <button className="get-started-button" onClick={onCreateBundle}>
          Create a Bundle
        </button>
        <button className="get-started-button" onClick={onPayBundle}>
          Pay a Bundle
        </button>
      </div>
    </div>
  );
};

export default NewUser;
