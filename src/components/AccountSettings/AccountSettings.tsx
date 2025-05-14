import React, { useState } from 'react';
import './AccountSettings.css';



const AccountSettings: React.FC = () => {
    const [hideBalance, setHideBalance] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleHideBalance = () =>
        setHideBalance(!hideBalance);
    const toggleDarkMode = () =>
        setDarkMode(!darkMode);

    const itemsLeft = [
        { label: 'View Profile', icon: '' },
        { label: 'Statement & Profile', icon: '' },
        { label: 'Saved Cards', icon: '' },
        { label: 'Get Help', icon: '' },
        { label: 'Linked Accounts', icon: '' },
        { label: 'Account Limit' , icon: '' }, 
    ];

    const itemsRight = [
        { label: 'Security', icon: '' },
        { label: 'Legal', icon: '' },
        { label: 'FAQS', icon: '' },
        { label: 'Contact Us', icon: '' },
    ];

    return (
        <div className='account-settings'>
            <h2 className='title'>Account</h2>
            <div className='grid'>
                <div className='column'>
                    {itemsLeft.map((item, index) => (
                        <div key={index} className='card'>
                            <span className='icon'>{item.icon}</span>
                            <span className='label'>{item.label}</span>
                            <span className='arrow'>›</span>
                </div>
                    ))}
            </div>

            <div className='column'>
                {itemsRight.map((item, index) => (
                    <div key={index} className='card'>
                        <span className='icon'>{item.icon}</span>
                        <span className='label'>{item.label}</span>
                        <span className='arrow'>›</span>
                    </div>
                ))}

                <div className='card-toggle' >
                    <span className='icon'>👁️</span>
                    <span className='label'>Hide Balance</span>
                    <label className='switch'>
                        <input
                            type="checkbox"
                            checked={hideBalance}
                            onChange={toggleHideBalance}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
                <div className='card-toggle'>
                    <span className='icon'>🌙</span>
                    <span className='label'>Dark Mode</span>
                    <label className='switch'>
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
         </div>
         <div className='sign-out'>Sign out</div>

        </div>
    );
};    
export default AccountSettings;