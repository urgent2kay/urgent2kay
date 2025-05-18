import axios from "axios";

interface Request {
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

const API_URL = "https://the-backend.com/api/requests";

export const fetchRequests = async (): Promise<Request[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const fetchRequestById = async (id: string): Promise<Request> => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};
