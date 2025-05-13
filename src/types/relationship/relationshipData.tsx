export type RelationshipType =
  | "Father"
  | "Mother"
  | "Sister"
  | "Brother"
  | "Friend"
  | "Other";

export type FrequencyType = "Daily" | "Weekly" | "Monthly";

export interface SponsorFormData {
  fullName: string;
  email: string;
  spendLimit: string;
  phoneNumber: string;
  relationshipType: RelationshipType;
  frequencyType: FrequencyType;
  profileImage?: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  data?: SponsorFormData;
  error?: string;
}
