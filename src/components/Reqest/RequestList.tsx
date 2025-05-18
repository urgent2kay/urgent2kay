import React from "react";
import RequestItem from "./RequestItem";
import "./RequestList.css";

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

const RequestList: React.FC<{
  groupedRequests: Record<string, RequestItemType[]>;
}> = ({ groupedRequests }) => {
  return (
    <div className="request-list">
      {Object.entries(groupedRequests).map(([day, requests]) => (
        <div key={day} className="day-group">
          <h3 className="day-heading">{day}</h3>
          {requests.map((req) => (
            <RequestItem key={req.id} request={req} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default RequestList;
