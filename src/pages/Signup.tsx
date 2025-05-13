import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.termsAccepted) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://your-api.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const resData = await response.json();
        throw new Error(resData.message || "Signup failed");
      }

      setSuccess("Signup successful!");
    } catch (err: { message: string }) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="left-pane">
        <div className="overlay">
          <h2>
            Welcome to <span className="brand">Urgent 2kay</span>
          </h2>
          <p className="subtitle">
            Skip the hassle. Send & pay bills in one click.
          </p>
          <p className="small-text">
            No more scattered requests or late fees—just simple, direct
            payments.
          </p>
          <p className="signin-text">
            Already have an account?{" "}
            <Link to="/sign-in">
              <span className="link">Sign in</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="right-pane">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Sign Up</h2>

          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}

          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Enter phone number</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Set password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>
          <div className="terms">
            <input
              type="checkbox"
              id="terms"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <label htmlFor="terms">
              I agree to Urgent 2kay's Terms and Conditions, Privacy Policy and
              Cookies Policy
            </label>
          </div>
          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}{" "}
            <span className="arrow">&rarr;</span>
          </button>
          <p className="signin-text2">
            Already have an account?{" "}
            <Link to="/sign-in">
              <span className="link">Sign in</span>{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
