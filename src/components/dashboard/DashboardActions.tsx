import './Dashboard.css';
import { useNavigate } from 'react-router-dom';


const actions = [
    {
        title: 'Create A Bundle',
        desc:  'Combine bills, subscriptions, and personal needs into one simple request.',
    },
    {
        title: 'Sponsor A Bundle',
        desc:  'Automate recurring payments for bills and expenses ahead of time.',
    },
    {
        title: 'Schedule A Bundle',
        desc: 'Automate recurring payments for bills and expenses ahead of time.',
    },
    {
        title:  'Create A Relationship',
        desc: 'Link a sponsor or beneficiary account for seamless interactions.',
    },
];

const DashboardActions = () => {
    const navigate = useNavigate();

    const handleActionClick = (action: string) => {
        switch (action) {
            case 'Create A Bundle':
                navigate('/generate-request');
                break;
            case 'Sponsor A Bundle':
                navigate('/choose-sponsor');
                break;
            case 'Schedule A Bundle':
                navigate('/bundle-overview');
                break;
            case 'Create A Relationship':
                navigate('');
                break;
            default:
                break;
        }
    };

    return (
        <div className="dashboard-actions">
            {actions.map((action, index) => (
                <div key={index} className="action-card" onClick={() => handleActionClick(action.title)}>
                    <h3>{action.title}</h3>
                    <p>{action.desc}</p>
                    <button className='getStartedLink' onClick={() => navigate('')}>Get Started →</button>
                </div>
            ))}
        </div>
    );
};
export default DashboardActions;