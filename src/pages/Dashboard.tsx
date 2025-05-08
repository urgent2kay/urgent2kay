import { useEffect, useState } from 'react';
import StatsCards from '../components/dashboard/StatsCards';
import DahboardActions from '../components/dashboard/DashboardActions';
import RecentActivities from '../components/dashboard/RecentActivities';
import { Activity } from '../types/dashboardindex';

const Dashboard: React.FC = () => {
    const[stats, setStats] = useState({
        requestsGenerated: 0,
        billsSponsored: 0,
        billsScheduled: 0,
        relationships: 0,
    });

    const[activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        // Simulate fetching data from an API
        // Fetch stats

    fetch('/api/dashboard/stats')
        .then(response => response.json())
        .then(data => {
            setStats(data);
        })
        .catch(error => {
            console.error('Error fetching stats:', error);
        });
        // Fetch recent activities
        fetch('/api/activities')
            .then(response => response.json())
            .then(data => {
                setActivities(data);
            })
            .catch(error => {
                console.error('Error fetching activities:', error);
            });
        }, []);

        return(
            <div>
                <StatsCards stats={stats} />
                <DahboardActions />
                <RecentActivities activities={activities} />
            </div>
        );
};
export default Dashboard;









 
