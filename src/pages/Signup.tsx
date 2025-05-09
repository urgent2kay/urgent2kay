import React from "react";
import { Navigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [redirectToDashboard, setRedirectToDashboard] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate the signup process and redirect to the dashboard
    setRedirectToDashboard(true);
  };

  if (redirectToDashboard) {
    // Redirect to the dashboard after signup
    return <Navigate to="/dashboard" replace />;
  }

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
            Already have an account? <span className="link">Sign in</span>
          </p>
        </div>
      </div>
      <div className="right-pane">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Sign Up</h2>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Enter phone number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Set password</label>
            <input type="password" id="password" placeholder="Enter password" />
          </div>
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to Urgent 2kay's Terms and Conditions, Privacy Policy and
              Cookies Policy
            </label>
          </div>
          <button type="submit" className="signup-button">
            Sign Up <span className="arrow">&rarr;</span>
          </button>
          <p className="signin-text2">
            Already have an account? <span className="link">Sign in</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
