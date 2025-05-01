import React from 'react';
import './Dashboard.css';

const GetStarted: React.FC = () => {
  return (
    <div className="get-started">
      <button className="get-started-button">Create a Bundle</button>
      <button className="get-started-button">Pay a Bundle</button>
      <button className="get-started-button">Create Relationship</button>
      <button className="get-started-button">Schedule Bundle</button>
    </div>
  );
};

export default GetStarted;
