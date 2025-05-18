export type RequestItemType = {
  id: string;
  title: string;
  beneficiaryName: string;
  relationship: string;
  message: string;
  amount: number;
  sentTime: string;
  priority: 'Very urgent' | 'Important' | 'Normal';
  avatarUrl: string;
  dayGroup: string; };