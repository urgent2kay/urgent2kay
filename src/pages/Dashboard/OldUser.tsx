import React from 'react';
import Overview from './Overview';
import RecentActivities from './RecentActivities';
import GetStarted from './GetStarted';
import './Dashboard.css';

interface OldUserProps {
  overviewData: {
    requestsGenerated: number;
    billsSponsored: number;
    billsScheduled: number;
    relationships: number;
  };
  recentActivities: {
    requestBundle: string;
    sponsor: string;
    amount: string;
    date: string;
    time: string;
    status: string;
  }[];
}

const OldUser: React.FC<OldUserProps> = ({ overviewData, recentActivities }) => {
  return (
    <div className="old-user">
      <Overview {...overviewData} />
      <RecentActivities activities={recentActivities} />
      <GetStarted />
    </div>
  );
};

export default OldUser;
