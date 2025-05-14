export interface Activity {
    id: string;
    bundle: string;
    sponsor: string;
    amount: number;
    date: string;
    time: string;
    status: 'Pending' | 'Approved' | 'Rejected';
  }
  