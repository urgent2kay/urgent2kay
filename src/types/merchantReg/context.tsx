import {
  BusinessDetails,
  PersonalDetails,
  BankDetails,
} from "../merchantReg/merchant";

export type OutletContextType = {
  registrationData: {
    business: BusinessDetails;
    personal: PersonalDetails;
    bank: BankDetails;
  };
  handleBusinessSubmit: (data: BusinessDetails) => void;
  handlePersonalSubmit: (data: PersonalDetails) => void;
  handleBankSubmit: (data: BankDetails) => void;
  status: "idle" | "submitting" | "success" | "error";
};


