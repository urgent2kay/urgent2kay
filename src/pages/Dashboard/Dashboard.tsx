import React, { useState } from 'react';
import NewUser from './NewUser';
import FirstRequest from './FirstRequest';
import OldUser from './OldUser';
import Overview from './Overview';


import './Dashboard.css'

const Dashboard: React.FC = () => {
    const [userState,setUserSate] = useState<'new' | 'firstRequest' | 'old'>('new');
    const [overviewData, setOverviewData] = useState({
        requestsGenerated: 0,
        billsSponsored: 0,
        billsScheduled: 0,
        relationships: 0,
    });
    const [recentActivities, setRecentActivities] = useState< {
        requestBundle: string;
        sponsor: string;
        amount: string;
        date: string;
        time: string;
        status: string;
    }[]
    >([]);

    // simulate creating a bundle
    const handleCreateBundle = () => {
        const newActivity = { requestBundle: 'Monthly Essential', sponsor: 'Mummy', amount: 'N32,500', date: '01-05-25', time: '12:00am', status: 'pending'};
        setRecentActivities([newActivity, ...recentActivities]);
        setOverviewData({
            ...overviewData,
            requestsGenerated: overviewData.requestsGenerated + 1,
        });
        setUserSate('firstRequest');
    };

    // simulate paying a bundle
    const handlePayBundle = () => {
        const newActivity = { requestBundle: 'Monthly Essential', sponsor: 'Mummy', amount: 'N32,500', date: '01-05-25', time: '12:00am', status: 'approved'};
        setRecentActivities([newActivity, ...recentActivities]);
        setOverviewData({
            ...overviewData,
            billsSponsored: overviewData.billsSponsored + 1,
        });
        setUserSate('old');
    };
    
    return (
        <div>
            <Overview {...overviewData} />
            {userState === 'new' && <NewUser onCreateBundle={handleCreateBundle} onPayBundle={handlePayBundle} />}
            {userState === 'firstRequest' && <FirstRequest activities={recentActivities} />}
            {userState === 'old' && <OldUser overviewData={overviewData} recentActivities={recentActivities} />}
        </div>
    );
};
export default Dashboard;