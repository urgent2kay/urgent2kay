import React from "react";
import { useNavigate } from "react-router-dom";
import "./RequestItem.css";
import { Link } from "react-router-dom";

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
  dayGroup: string;
};

type Props = {
  request: RequestItemType;
};

const RequestItem: React.FC<Props> = ({ request }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/sponsor-bundle-overview/${request.id}`);
  };

  return (
    <div className="request-card" onClick={handleClick}>
      <div className="request-left">
        <img
          src={request.image}
          alt={request.name}
          className="request-avatar"
        />
        <div className="request-info">
          <div className="request-title">{request.title}</div>
          <div className="request-beneficiary">
            {request.relationship} / {request.name}
          </div>
          <div className="request-message">{request.message}</div>
          <Link to="/sponsor-bundle-overview">
            <div className="view-details">View details</div>
          </Link>
        </div>
      </div>

      <div className="request-right">
        <div className="request-amount">₦{request.amount.toLocaleString()}</div>
        <div className="request-meta">Sent {request.sentTime}</div>
        <div className="request-priority">{request.priority}</div>
      </div>
    </div>
  );
};

export default RequestItem;
