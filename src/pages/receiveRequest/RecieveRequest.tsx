import { FaTimes } from "react-icons/fa";
import RequestList from "../../components/Reqest/RequestList";
import Header from "../../components/Header";
import Sidebar from "../Sidebar";
import { useState } from "react";

export type RequestItemType = {
  id: string;
  title: string;
  beneficiaryName: string;
  relationship: string;
  message: string;
  amount: number;
  sentTime: string;
  priority: "Very urgent" | "Important" | "Normal";
  avatarUrl: string;
  dayGroup: string; // e.g. "Today", "Tuesday"
};

const requests: RequestItemType[] = [
  {
    id: "1",
    title: "Monthly Essentials",
    beneficiaryName: "Ada",
    relationship: "Daughter",
    message: "Mummy, please this is very important... 😢",
    amount: 32500,
    sentTime: "1 hour ago",
    priority: "Very urgent",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    dayGroup: "Today",
  },
  {
    id: "2",
    title: "Skincare Essentials",
    beneficiaryName: "Chinonso",
    relationship: "Son",
    message: "Mummy, my skincare has finished. 😟",
    amount: 153000,
    sentTime: "2 days ago",
    priority: "Important",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    dayGroup: "Tuesday",
  },
  {
    id: "3",
    title: "Rent & Others",
    beneficiaryName: "Cynthia",
    relationship: "Friend",
    message: "Ngozi, I really need these... 😢",
    amount: 700000,
    sentTime: "2 days ago",
    priority: "Very urgent",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    dayGroup: "Tuesday",
  },
];

const groupByDay = (list: RequestItemType[]) => {
  return list.reduce((acc, item) => {
    acc[item.dayGroup] = acc[item.dayGroup] || [];
    acc[item.dayGroup].push(item);
    return acc;
  }, {} as Record<string, RequestItemType[]>);
};

const RequestsPage = () => {
  const groupedRequests = groupByDay(requests);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="generate-request-container">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Section */}
      <div className="main-section">
        <Header />

        {/* Main Content */}
        <main className="main-content">
          {/* {children}{" "} */}
          {/* ✅ This renders the content passed into TemplatePage */}
        </main>
        <div>
          <h2 className="page-title">Requests</h2>
          <RequestList groupedRequests={groupedRequests} />
        </div>
        <main className="main-content"></main>
      </div>

      {/* Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <span>☰</span>}
      </button>
    </div>
  );
};

export default RequestsPage;
