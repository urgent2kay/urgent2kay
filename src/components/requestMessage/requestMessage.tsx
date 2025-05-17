import React from "react";
import "./requestMessage.css";
import { Link } from "react-router-dom";

interface RequestNotificationProps {
  beneficiary: string;
  priority: "Very urgent" | "Important" | "Normal";
  amount: number;
  requestId: string;
}

const RequestNotification: React.FC<RequestNotificationProps> = ({
  beneficiary,
  priority,
  amount,
  requestId,
}) => {
  return (
    <div className="request-notification">
      <span className="notification-text">
        {beneficiary} has sent you a{" "}
        <span
          className={`priority-text ${priority
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {priority}
        </span>{" "}
        bundle request for ₦{amount.toLocaleString()}. Tap to review
      </span>
      <Link to={`/requests/${requestId}`}>
        <button className="review-button">Review</button>
      </Link>
    </div>
  );
};

export default RequestNotification;
