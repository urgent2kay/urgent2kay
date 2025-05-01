import React from 'react';
import './Dashboard.css';
import vectorImage from '../../assets/vector.svg';


interface OverviewProps {
  requestsGenerated: number;
  billsSponsored: number;
  billsScheduled: number;
  relationships: number;
}

const Overview: React.FC<OverviewProps> = ({
  requestsGenerated,
  billsSponsored,
  billsScheduled,
  relationships,
}) => {
  return (
    <div className="overview">
      <div className="overview-items">
        <div className="overview-card">
          <span><img src={vectorImage} alt="requests-icon" /></span>
          <span className="overview-label">Requests Generated</span>
          <span className="overview-value">{requestsGenerated}</span>
        </div>
        <div className="overview-card">
          <span><img alt="bills-icon" /></span>
          <span className="overview-label">Bills Sponsored</span>
          <span className="overview-value">{billsSponsored}</span>
        </div>
        <div className="overview-card">
          <span><img alt="scheduled-icon" /></span>
          <span className="overview-label">Bills Scheduled</span>
          <span className="overview-value">{billsScheduled}</span>
        </div>
        <div className="overview-card">
          <span><img alt="relationships-icon" /></span>
          <span className="overview-label">Relationships</span>
          <span className="overview-value">{relationships}</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
