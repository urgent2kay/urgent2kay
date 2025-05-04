import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { OutletContextType } from "../../types/merchantReg/context";
import { Link } from "react-router-dom";
import merchLogo from "../../assets/logo-purple1.svg";
import "./merchant.css";

const BusinessDetailsPage = () => {
  const context = useOutletContext<OutletContextType>();
  const navigate = useNavigate();

  const defaultBusinessDetails = {
    businessName: "",
    typeOfBusiness: "",
    businessRegNumber: "",
    email: "",
    address: "",
    phone: "",
  };

  const [formData, setFormData] = useState(defaultBusinessDetails);
  const [errors, setErrors] = useState<Partial<typeof defaultBusinessDetails>>(
    {}
  );

  useEffect(() => {
    if (context) {
      setFormData(context.registrationData.business);
    } else {
      navigate("/register");
    }
  }, [context, navigate]);

  if (!context) {
    return null;
  }

  const { handleBusinessSubmit, status } = context;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };

      if (value.trim()) {
        delete updatedErrors[name as keyof typeof defaultBusinessDetails];
      }

      if (name === "email" && value && !value.includes("@")) {
        updatedErrors.email = "Enter a valid email";
      } else if (name === "email") {
        delete updatedErrors.email;
      }

      if (name === "phone" && value && !value.startsWith("+234")) {
        updatedErrors.phone = "Phone number format is +234";
      } else if (name === "phone") {
        delete updatedErrors.phone;
      }

      return updatedErrors;
    });
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<typeof defaultBusinessDetails> = {};

    if (!formData.businessName.trim())
      newErrors.businessName = "Business name is required";
    if (!formData.businessRegNumber.trim())
      newErrors.businessRegNumber = "Registration number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.typeOfBusiness.trim())
      newErrors.typeOfBusiness = "Type of business is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!formData.email.includes("@"))
      newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!formData.phone.startsWith("+234"))
      newErrors.phone = "Phone number format is +234";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      context.handleBusinessSubmit(formData);
      navigate("personal");
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
        <div className="step active">
          <span>1</span> Business Details
        </div>
        <hr />
        <div className="step">
          <span>2</span> Contact Details
        </div>
        <hr />
        <div className="step">
          <span>3</span> Bank Details
        </div>
      </div>

      <form className="busisness-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Business Name</label>
          <input
            type="text"
            id="businessname"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Input text"
          />
          {errors.businessName && (
            <span className="error">{errors.businessName}</span>
          )}
        </div>

        <div className="form-group">
          <label>Business Registration Number</label>
          <input
            type="text"
            id="businessRegNumber"
            name="businessRegNumber"
            value={formData.businessRegNumber}
            onChange={handleChange}
            placeholder="Input number"
          />
          {errors.businessRegNumber && (
            <span className="error">{errors.businessRegNumber}</span>
          )}
        </div>

        <div className="form-group">
          <label>Business Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Input text"
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>

        <div className="form-group">
          <label>Type of Business</label>
          <input
            type="text"
            id="typeOfBusiness"
            name="typeOfBusiness"
            value={formData.typeOfBusiness}
            onChange={handleChange}
            placeholder="Input text"
          />
          <small>e.g. utilities, school, hospital, housing</small>
          {errors.typeOfBusiness && (
            <span className="error">{errors.typeOfBusiness}</span>
          )}
        </div>

        <div className="form-group">
          <label>Business Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Business Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-footer">
          <button
            type="submit"
            className="next-button"
            disabled={status === "submitting"}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default BusinessDetailsPage;
