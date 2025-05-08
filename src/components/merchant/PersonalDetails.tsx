import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { PersonalDetails } from "../../types/merchantReg/merchant";
import { OutletContextType } from "../../types/merchantReg/context";
import { Link } from "react-router-dom";
import merchLogo from "../../assets/logo-purple1.svg";
import "./merchant.css";

const PersonalDetailsPage = () => {
  const context = useOutletContext<OutletContextType>();
  const navigate = useNavigate();

  const defaultPersonalDetails: PersonalDetails = {
    firstname: "",
    lastname: "",
    email: "",
    phone1: "",
    phone2: "",
    role: "",
  };

  const [formData, setFormData] = useState<PersonalDetails>(
    defaultPersonalDetails
  );
  const [errors, setErrors] = useState<Partial<typeof defaultPersonalDetails>>(
    {}
  );

  useEffect(() => {
    if (context) {
      setFormData(context.registrationData.personal);
    } else {
      navigate("/register");
    }
  }, [context, navigate]);

  if (!context) {
    return null;
  }

  const { handlePersonalSubmit, status } = context;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<PersonalDetails> = {};

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!formData.email.includes("@"))
      newErrors.email = "Enter a valid email";
    if (
      !formData.phone1.includes("+234") &&
      !formData.phone2.includes("+234")
    ) {
      newErrors.phone1 = "Phone number format is +234";
      newErrors.phone2 = "Phone number format is +234";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation(); 

    if (!validateForm()) {
      return;
    }

    try {
      await Promise.resolve(handlePersonalSubmit(formData)); 
      navigate("/register/bank", {
        replace: true, 
        state: { from: "personal" }, 
      });
    } catch (error) {
      console.error("Navigation failed:", error);
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
        <div className="step active">
          <span>2</span> Contact Details
        </div>
        <hr></hr>
        <div className="step">
          <span>3</span> Bank Details
        </div>
      </div>

      <form className="busisness-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Input text"
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Input text"
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Input text"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone Number 1</label>
          <input
            type="tel"
            id="phone1"
            name="phone1"
            value={formData.phone1}
            onChange={handleChange}
            placeholder="Input phone number"
          />
          {errors.phone1 && <span className="error">{errors.phone1}</span>}
        </div>

        <div className="form-group">
          <label>Role</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Input text"
          />
          <small>e.g. Accounts Officer, Manager</small>
        </div>

        <div className="form-group">
          <label>Phone Number 2</label>
          <input
            type="tel"
            id="phone2"
            name="phone2"
            value={formData.phone2}
            onChange={handleChange}
            placeholder="Input number"
          />
          {errors.phone2 && <span className="error">{errors.phone2}</span>}
        </div>

        <div className="form-footer">
          <button
            type="submit"
            className="next-button"
            disabled={status === "submitting"}
            onClick={() => console.log("button clicked!")}
          >
            {/* Next */}
            {status === "submitting" ? "Saving" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsPage;
