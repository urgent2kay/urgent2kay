import React from 'react';
import './Dashboard.css';

interface RecentActivity {
  requestBundle: string;
  sponsor: string;
  amount: string;
  date: string;
  time: string;
  status: string;
}

interface RecentActivitiesProps {
  activities: RecentActivity[];
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({ activities }) => {
  return (
    <div className="recent-activities">
      <h2>Recent Activities</h2>
      <input type="text" placeholder="Search" className="search-input" />
      <table className="activities-table">
        <thead>
          <tr>
            <th>Request Bundle</th>
            <th>Sponsor</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.requestBundle}</td>
              <td>{activity.sponsor}</td>
              <td>{activity.amount}</td>
              <td>{activity.date}</td>
              <td>{activity.time}</td>
              <td className={`status-${activity.status.toLowerCase()}`}>{activity.status}</td>
              <td><button className="view-details-button">View details</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivities;
