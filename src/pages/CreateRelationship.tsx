import React, { useState, useRef, useEffect } from "react";
import {
  SponsorFormData,
  RelationshipType,
  FrequencyType,
  ApiResponse,
} from "../types/relationship/relationshipData";
import RelationshipCreated from "./RelationshipCreated";
import { FaTimes } from "react-icons/fa";
import "./relationship.css";
import manProfile from "../assets/manProfile.png";
import camIcon from "../assets/Icon.png";
import TemplatePage from "./Template";

const CreateRelationship: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    spendLimit: "",
    phoneNumber: "",
    relationshipType: "Other",
    frequency: "Monthly",
    profileImage: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [sponsorEmail, setSponsorEmail] = useState("");

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setFormData((prev) => ({
          ...prev,
          profileImage: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Submit handler triggered"); //debugging

    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.spendLimit
    ) {
      setSubmitError("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setShowModal(true); //remove and add to the API try block when ready ⚠️
    setSponsorEmail(formData.email); //this too
    setSubmitSuccess(true);
    console.log("Form submitted:", formData);
    // alert("Sponsor saved successfully 🎉");  //debugging and remove when API is ready ⚠️

    // try {
    //   const submissionData = {
    //     ...formData,
    //     spendLimit: parseFloat(formData.spendLimit.replace(/,/g, "")),
    //     ...(formData.profileImage && { profileImage: formData.profileImage }),
    //   };

    //   const response = await fetch(
    //     "https://urgent2kay.onrender.com/api/relationship",
    //     {
    //       method: "POST",
    //       // credentials: "include", // Browser should handle auth cookies unless the backend saves in localStorage then adjust
    //       // headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(submissionData),
    //     }
    //   );

    //   if (!response.ok)
    //     throw new Error(`HTTP error! status: ${response.status}`);

    //   const result = await response.json();
    //   if (result.success) {
    //     setSubmitSuccess(true);
    //     setShowModal(true);
    //     setFormData({
    //       fullName: "",
    //       email: "",
    //       spendLimit: "",
    //       phoneNumber: "",
    //       relationshipType: "Other",
    //       frequency: "Monthly",
    //       profileImage: "",
    //     });
    //   } else {
    //     throw new Error(result.error || "Submission failed");
    //   }
    // } catch (error) {
    //   setSubmitError(error instanceof Error ? error.message : "Unknown error");
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <TemplatePage>
      <main className="main-content">
        <div className="sponsor-form-container">
          <h1>Create Relationship</h1>
          <div className="sponsor-form">
            <div className="profile-upload-section">
              <div
                className="profile-image-container"
                onClick={triggerFileInput}
              >
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="profile"
                    className="profile-image"
                  />
                ) : (
                  <>
                    <div className="profile-placeholder">
                      <img
                        src={manProfile}
                        alt="profile photo icon"
                        className="rel-profile-icon"
                      />
                    </div>
                    <div className="camIcon-div">
                      <img
                        src={camIcon}
                        alt="camera iscon"
                        className="cam-icon"
                      />
                    </div>
                  </>
                )}

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </div>
            </div>

            {submitSuccess && (
              <div className="alert alert-success">
                Sponsor saved successfully! 🎉
              </div>
            )}

            {submitError && (
              <div className="alert alert-error">Error: {submitError}</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-section">
                <div className="form-field">
                  <label htmlFor="input">Sponsor's Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Input text"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="input">Sponsor's Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Input phone number"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="input">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="input">Relationship Type</label>
                  <select
                    name="relationshipType"
                    value={formData.relationshipType}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Sister">Sister</option>
                    <option value="Brother">Brother</option>
                    <option value="Friend">Friend</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field limit-input">
                  <label htmlFor="input">Spending Limit</label>
                  <div className="limit-div">
                    {" "}
                    <input
                      type="text"
                      name="spendLimit"
                      value={formData.spendLimit}
                      onChange={handleChange}
                      placeholder="Input limit"
                      required
                      disabled={isSubmitting}
                    />
                    <span>E.g. N5,000, N50,000, N500,000, N5,000,000</span>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="input">Frequency</label>
                  <select
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="save-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save Sponsor"}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <span>☰</span>}
      </button>

      {showModal && (
        <RelationshipCreated
          show={showModal}
          onClose={() => setShowModal(false)}
          sponsorEmail={sponsorEmail}
        />
      )}
    </TemplatePage>
  );
};

export default CreateRelationship;
