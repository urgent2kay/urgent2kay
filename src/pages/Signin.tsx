import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("https://your-api.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const resData = await response.json();
        throw new Error(resData.message || "Login failed");
      }

      setSuccess("Login successful!");
      // Optionally redirect here
    } catch (err: any) {
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
            Welcome back to <span className="brand">Urgent 2kay</span>
          </h2>
          <p className="subtitle">Sign in to manage your payments with ease.</p>
          <p className="small-text">
            Pay bills, send money and stay on top of things.
          </p>
          <p className="signin-text">
            Don’t have an account?{" "}
            <Link to="/sign-up">
              <span className="link">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="right-pane">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Log In</h2>

          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}

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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}{" "}
            <span className="arrow">&rarr;</span>
          </button>

          <p className="signin-text2">
            Don’t have an account?{" "}
            <Link to="/sign-up">
              <span className="link">Sign up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
