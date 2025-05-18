import "./RecieveRequest.css";
import { useEffect, useState } from "react";
import { fetchRequests } from "../../api/RecieveRequest";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../Sidebar";
import { FaTimes } from "react-icons/fa";

export interface Request {
  id: string;
  title: string;
  beneficiary: string;
  amount: number;
  message: string;
  priority: "Very urgent" | "Important" | "Normal";
  sentAt: string;
  relation: string;
  imageUrl: string;
}

const RequestsPage = () => {
  const [requests, setRequests] = useState<Request[]>([]);
  //   const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    fetchRequests().then((data) => {
      setRequests(data);
      //   setLoading(false);
    });
  }, []);

  //   if (loading) return <p>Loading requests...</p>;

  const groupByDay = (items: Request[]) => {
    const grouped: { [key: string]: Request[] } = {};
    items.forEach((req) => {
      const day = new Date(req.sentAt).toLocaleDateString("en-US", {
        weekday: "long",
      });
      grouped[day] = grouped[day] || [];
      grouped[day].push(req);
    });
    return grouped;
  };

  const groupedRequests = groupByDay(requests);

  return (
    <div className="generate-request-container">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Section */}
      <div className="main-section">
        <Header />
        {/* Main Content */}
        <main className="main-content">
          <div className="requests-container">
            <Link to="/generate-request">
              <button className="back-button">
                <span className="dropdown-icon">
                  <img src="./Image/dropdown.png" alt="Dropdown Icon" />
                </span>
                Back
              </button>
            </Link>
            <div className="bundle-header">Requests</div>
            {/* <div className="requests-container"> */}
            {/* <h1 className="requests-title">Requests</h1> */}
            {Object.entries(groupedRequests).map(([day, reqs]) => (
              <div key={day}>
                <h2 className="day-heading">{day}</h2>
                {reqs.map((req) => (
                  <Link to={`/requests/${req.id}`} key={req.id}>
                    <div className="request-card">
                      <img
                        src={req.imageUrl}
                        alt={req.beneficiary}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="request-info">
                        <h3 className="request-title">{req.title}</h3>
                        <p className="request-meta">
                          {req.relation} / {req.beneficiary}
                        </p>
                        <p className="request-message">{req.message}</p>
                        <p className="request-amount">
                          ₦{req.amount.toLocaleString()}
                        </p>
                      </div>
                      <div className="request-priority">{req.priority}</div>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <span>☰</span>}
      </button>
    </div>
  );
};

export default RequestsPage;
