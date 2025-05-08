import { useState } from "react";
import './Dashboard.css';
import { Activity } from "../../types/dashboardindex";

interface Props {
    activities: Activity[];
}

const RecentActivities = ({ activities }: Props) => {
    const [searchTerm, setSearchTerm] = useState("");  

    const filtered = activities.filter(a =>
        a.bundle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <div className="recent-container">
            <div className="recent-header">
                <h3>Recent Activities</h3>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {filtered.length === 0 ? (
                <div className="empty-state">
                    <img src="" alt=""/>
                    <p className="empty-state-text">No Transaction Yet. Complete Your First Payment To See It Here!</p>
                    <button  onClick={() => window.location.href = '/generate-request'} className="empty-state-button">Get Started</button>
                </div>
            ):(
                <table>
                    <thead>
                        <tr>
                            <th>Request Bundle</th>
                            <th>Sponsor</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map(a => (
                            <tr key={a.id}>
                                <td>{a.bundle}</td>
                                <td>{a.sponsor}</td>
                                <td>₦{a.amount.toLocaleString()}</td>
                                <td>{a.date}</td>
                                <td>{a.time}</td>
                                <td className="[a.status.toLowerCase()]">{a.status}</td>
                                <td><a href="#">View details</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
    };
export default RecentActivities;