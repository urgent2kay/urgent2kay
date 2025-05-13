import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import createBundleIcon from '../../assets/bundle-icon.svg';
import sponsorBundleIcon from '../../assets/payment-icon.svg';
import scheduleBundleIcon from '../../assets/scheduled-icon.svg';
import relationshipIcon from '../../assets/relationship-icon.svg';


const actions = [
    {
      title: 'Create A Bundle',
      desc: 'Combine bills, subscriptions, and personal needs into one simple req...',
      bgColor: '#401A6D',
      icon: createBundleIcon,
      route: '/generate-request',
    },
    {
      title: 'Sponsor A Bundle',
      desc: 'Approve and support a bundle request from someone you trust.',
      bgColor: '#044D06',
      icon: sponsorBundleIcon,
      route: '/choose-sponsor',
    },
    {
      title: 'Schedule A Bundle',
      desc: 'Automate recurring payments for bills and expenses ahead of time.',
      bgColor: '#076B6B',
      icon: scheduleBundleIcon,
      route: '/bundle-overview',
    },
    {
      title: 'Create A Relationship',
      desc: 'Link a sponsor or beneficiary account for seamless interactions.',
      bgColor: '#0A2680',
      icon: relationshipIcon,
      route: '/relationships',
    },
  ];
  

  const DashboardActions = () => {
    const navigate = useNavigate();
  
    return (
      <div className="dashboard-actions">
        {actions.map((action, idx) => (
          <div
            key={idx}
            className="dashboard-actions-card"
            style={{ backgroundColor: action.bgColor }}
            onClick={() => navigate(action.route)}
          >
            <img
              src={action.icon}
              alt={`${action.title} icon`}
              className="dashboard-actions-icon"
            />
            <h3 className="dashboard-actions-title">{action.title}</h3>
            <p className="dashboard-actions-desc">{action.desc}</p>
            <span className="dashboard-actions-link">Get Started →</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default DashboardActions;
  