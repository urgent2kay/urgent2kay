import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BusinessDetails } from "../../types/merchantReg/merchant";
import { PersonalDetails } from "../../types/merchantReg/merchant";
import { BankDetails } from "../../types/merchantReg/merchant";
import { MerchantRegistrationData } from "../../types/merchantReg/merchant";
import SuccessScreen from "../merchant/SuccessScreen";
import ErrorScreen from "../merchant/ErrorScreen";
import { OutletContextType } from "../../types/merchantReg/context";
import "./merchant.css";

type RegistrationStatus = "idle" | "submitting" | "success" | "error";

const RegistrationGuard = () => {
  const [status, setStatus] = useState<RegistrationStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [registrationData, setRegistrationData] =
    useState<MerchantRegistrationData>({
      business: {
        businessName: "",
        typeOfBusiness: "",
        businessRegNumber: "",
        email: "",
        address: "",
        phone: "",
      },

      personal: {
        firstname: "",
        lastname: "",
        email: "",
        phone1: "",
        phone2: "",
        role: "",
      },

      bank: {
        bankName: "",
        accountName: "",
        accountNumber: "",
        ownershipProof: null,
        agreedToTerms: false,
      },
    });

  const navigate = useNavigate();

  const handleBusinessSubmit = (data: BusinessDetails) => {
    setRegistrationData((prev) => ({ ...prev, business: data }));
  };

  const handlePersonalSubmit = (data: PersonalDetails) => {
    console.log("Context handler executing with data:", data);
    setRegistrationData((prev) => ({ ...prev, personal: data }));
  };

  // const handleBankSubmit = async (data: BankDetails) => {
  //   const completeData = { ...registrationData, bank: data };

  //   try {
  //     setStatus("submitting");
  //     const formData = new FormData();

  //     formData.append("business", JSON.stringify(completeData.business));

  //     formData.append("personal", JSON.stringify(completeData.personal));

  //     formData.append(
  //       "bank",
  //       JSON.stringify({
  //         ...completeData.bank,
  //         ownershipProof: undefined, //this should remove file from json data
  //       })
  //     );

  //     if (completeData.bank.ownershipProof) {
  //       formData.append("ownershipProof", completeData.bank.ownershipProof);
  //     }

  //     const response = await fetch(
  //       "http://localhost:10000/api/v1/partner/register",
  //       {
  //         method: "POST",
  //         // headers: {
  //         //   "Content-Type": "application/json", //browser should set this
  //         // },
  //         body: formData,
  //       }
  //     );

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       console.error("Raw error response:", errorText);
  //       throw new Error(errorText || "Registration failed");
  //     }

  //     const data = await response.json();
  //     setStatus("success");
  //     return data;
  //   } catch (error) {
  //     setStatus("error");
  //     setErrorMessage(
  //       error instanceof Error
  //         ? error.message
  //         : "An unexpected error occurred during registration 😞"
  //     );
  //     console.error("Registration error: ", error); //debugging
  //   }
  // };

  const handleBankSubmit = async (data: BankDetails) => {
    const completeData = { ...registrationData, bank: data };

    try {
      setStatus("submitting");
      const formData = new FormData();

      formData.append("business", JSON.stringify(completeData.business));
      formData.append("personal", JSON.stringify(completeData.personal));
      formData.append(
        "bank",
        JSON.stringify({
          ...completeData.bank,
          ownershipProof: undefined, // Remove file from JSON data
        })
      );

      if (completeData.bank.ownershipProof) {
        formData.append("ownershipProof", completeData.bank.ownershipProof);
      }

      const response = await fetch(
        "https://urgent2kay.onrender.com/api/partner/register",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Raw error response:", errorText);
        throw new Error(errorText || "Registration failed");
      }

      const responseData = await response.json();
      setStatus("success");
      return responseData;
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred during registration 😞"
      );
      console.error("Registration error: ", error);
    }
  };

  if (status === "success") {
    return <SuccessScreen onRestart={() => navigate("/")} />;
  }

  if (status === "error") {
    return (
      <ErrorScreen message={errorMessage} onRetry={() => setStatus("idle")} />
    );
  }

  return (
    <div className="registration-wizard">
      {status === "submitting" && (
        <div className="overlay">
          <div className="spinner">Submitting...</div>
        </div>
      )}

      <Outlet
        context={
          {
            registrationData,
            handleBusinessSubmit,
            handlePersonalSubmit,
            handleBankSubmit,
            status,
          } satisfies OutletContextType
        }
      />
    </div>
  );
};

export default RegistrationGuard;
