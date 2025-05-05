//a list of interfaces and types

export interface BusinessDetails {
  businessName: string;
  typeOfBusiness: string;
  businessRegNumber: string;
  email: string;
  address: string;
  phone: string;
}

export interface PersonalDetails {
  firstname: string;
  lastname: string;
  email: string;
  phone1: string;
  phone2: string;
  role: string;
}

export interface BankDetails {
  bankName: string;
  accountName: string;
  accountNumber: string;
  ownershipProof: File | null;
  agreedToTerms: boolean;
}

export type ApiResponse = {
  success: boolean;
  message?: string;
  data?: any;
  errors?: Record<string, string>;
};

export interface MerchantRegistrationData {
  business: BusinessDetails;
  personal: PersonalDetails;
  bank: BankDetails;
}
