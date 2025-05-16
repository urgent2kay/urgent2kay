import React, { useState, useEffect, useRef } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { BankDetails } from "../../types/merchantReg/merchant";
import { OutletContextType } from "../../types/merchantReg/context";
import { Link } from "react-router-dom";
import merchLogo from "../../assets/logo-purple1.svg";
import { FaFileUpload } from "react-icons/fa";
import "./merchant.css";

interface BankDetailsErrors {
  bankName?: string;
  accountName?: string;
  accountNumber?: string;
  ownershipProof?: string;
  agreedToTerms?: string;
}

const BankDetailsPage = () => {
  const context = useOutletContext<OutletContextType>();
  const navigate = useNavigate();

  const defaultBankDetails: BankDetails = {
    bankName: "",
    accountName: "",
    accountNumber: "",
    ownershipProof: null,
    agreedToTerms: false,
  };

  const [formData, setFormData] = useState<BankDetails>(defaultBankDetails);
  const [errors, setErrors] = useState<BankDetailsErrors>({});
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (context) {
      setFormData(context.registrationData.bank);
    } else {
      navigate("/register");
    }
  }, [context, navigate]);

  if (!context) {
    return null;
  }

  const { handleBankSubmit, status } = context;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setFormData((prev) => ({ ...prev, ownershipProof: e.target.files![0] }));
  //   }
  // };

  const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData((prev) => ({
        ...prev,
        ownershipProof: e.dataTransfer.files[0],
      }));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const validate = (): boolean => {
    const newErrors: BankDetailsErrors = {};
    let isValid = true;

    if (!formData.accountName) {
      newErrors.accountName = "Account name is required";
      isValid = false;
    }

    if (!formData.accountNumber) {
      newErrors.accountNumber = "Account number is required";
      isValid = false;
    }

    if (!formData.bankName) {
      newErrors.bankName = "Bank name is required";
      isValid = false;
    }

    if (!formData.ownershipProof) {
      newErrors.ownershipProof = "Proof of ownership is required";
      isValid = false;
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = "You must agree to the terms and conditions";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      handleBankSubmit(formData);
    }
  };

  return (
    <div className="form-container">
      <header className="form-header">
        <Link to="#" className="logo-container2">
          <img src={merchLogo} alt="logo" className="logo-img" />
        </Link>
        <div className="form-header-texts">
          <h2>Let's get you started</h2>
          <p>Enter the details to get going</p>
        </div>
      </header>
      <div className="form-steps">
        <div className="step ">
          <span>1</span> Business Details
        </div>
        <hr></hr>
        <div className="step ">
          <span>2</span> Contact Details
        </div>
        <hr></hr>
        <div className="step active">
          <span>3</span> Bank Details
        </div>
      </div>

      <form onSubmit={handleSubmit} className="business-form display-flex">
        <div className="input-upload">
          <div className="input-form-details">
            <div className="form-group">
              <label>Bank Name</label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                required
                placeholder="Input text"
              />
              {errors.bankName && (
                <span className="error">{errors.bankName}</span>
              )}
            </div>

            <div className="form-group">
              <label>Account Name</label>
              <input
                type="text"
                name="accountName"
                value={formData.accountName}
                onChange={handleChange}
                required
                placeholder="Input text"
              />
              {errors.accountName && (
                <span className="error">{errors.accountName}</span>
              )}
            </div>

            <div className="form-group">
              <label>Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                required
                placeholder="Enter account number"
              />
              {errors.accountNumber && (
                <span className="error">{errors.accountNumber}</span>
              )}
            </div>

            <div className="terms">
              <input
                type="checkbox"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
                className="terms-input"
              />
              {errors.agreedToTerms && (
                <span className="error">{errors.agreedToTerms}</span>
              )}
              <label>
                I agree to <span>Urgent2k's</span> Terms and Conditions, Privacy
                Policy and Cookies Policy
              </label>
            </div>
          </div>

          <div className="file-upload">
            <label htmlFor="upload">Upload Proof of Business Ownership</label>
            <div
              className={`drag-drop ${
                isDragging ? "blue-border" : "gray-border"
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={handleBrowseClick}
            >
              <FaFileUpload size={50} color="#555" />
              <p>
                Drag and drop to upload or <span>browse</span>
              </p>

              <input
                type="file"
                ref={fileInputRef}
                // onChange={handleFileChange}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const file = e.target.files?.[0] || null;
                  setFormData({ ...formData, ownershipProof: file });
                }}
                style={{ display: "none" }}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
            </div>
            <small>e.g. CAC cert, Utility Bill, etc</small>
            {formData.ownershipProof && (
              <p className="dropped-file">
                Selected file: {formData.ownershipProof.name}{" "}
              </p>
            )}
          </div>
        </div>

        <p className="footer-text">
          Once you submit your registration, our team will review your details
          within 24 to 48 hours. You'll be notified by email as soon as your
          account is verified and ready to star receiving payments.
        </p>

        <div className="form-footer">
          <button
            type="submit"
            className="next-button"
            disabled={status === "submitting"}
          >
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default BankDetailsPage;
