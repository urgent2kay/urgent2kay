import { useState } from "react";
import { useLoginMutation } from "../features/auth/authApi"; 
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css";

const Login = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

    try {
      const user = await login(formData).unwrap();
      setSuccess("Login successful!");
      

      
      navigate("/dashboard"); 
    } catch (err: any) {
      setError(err?.data?.message || "Login failed");
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
            <Link to="/sign-up" className="link">
              Sign up
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

          <button type="submit" className="signup-button" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log In"}{" "}
            <span className="arrow">&rarr;</span>
          </button>

          <p className="signin-text2">
            Don’t have an account?{" "}
            <Link to="/sign-up" className="link">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
