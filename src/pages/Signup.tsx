import { useState } from "react";
import { useRegisterMutation } from "../features/auth/authApi";
import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    termsAccepted: false,
  });

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

    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: "bill-owner",
      }).unwrap();

      setSuccess("Signup successful!");
      navigate("/login");
    } catch (err: unknown) {
      console.error("API Error:", err);

      if (
        err &&
        typeof err === "object" &&
        "data" in err &&
        typeof (err as any).data === "object" &&
        "message" in (err as any).data
      ) {
        setError((err as any).data.message || "Signup failed");
      } else if (
        err &&
        typeof err === "object" &&
        "message" in err &&
        typeof (err as any).message === "string"
      ) {
        setError((err as any).message || "Signup failed");
      } else {
        setError("Signup failed");
      }
    }
  };

  return (
    <Container fluid style={{ padding: 0, margin: 0, height: "100vh", width: "100vw", overflowY: "auto", 
     }}>
      <Row style={{ margin: 0, padding: 0, height: "100%", width: "100%" }}>
        <Col
          md={6}
          className="left-pane d-none d-md-flex align-items-center justify-content-start"
          style={{ padding: 0, margin: 0 }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "2rem",
              borderRadius: "8px",
              marginLeft: "2rem",
            }}
            className="text-white ms-5"
          >
            <h2>
              Welcome back to <span className="brand">Urgent 2kay</span>
            </h2>
            <p className="subtitle">Skip the hassle. Send & pay bills in one click.</p>
            <p className="small-text">
              No more scattered requests or late fees—just simple, direct
              payments.
            </p>
            <p className="signin-text">
              Already have an account?{" "}
              <Link to="/login" className="link">
                Sign in
              </Link>
            </p>
          </div>
        </Col>

        <Col
          md={6}
          style={{ padding: 0, margin: 0 }}
          className="right-pane d-flex align-items-center justify-content-center"
        >
          <Card
            className="signup-form p-4"
            style={{ maxWidth: "400px", width: "100%", margin: "0 1rem" }}
          >
            <h2 className="form-title mb-3">Sign Up</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your second name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Set Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3 d-flex align-items-start gap-2" controlId="termsAccepted">
                <Form.Check
                  type="checkbox"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                />
                <Form.Label className="small">
                  I agree to Urgent 2kay's Terms and Conditions, Privacy Policy
                  and Cookies Policy
                </Form.Label>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="w-100 signup-button"
                disabled={isLoading}
              >
                {isLoading ? "Signing up..." : "Sign Up"} <span className="arrow">→</span>
              </Button>
            </Form>

            <p className="signin-text2 text-center mt-3">
              Already have an account?{" "}
              <Link to="/login" className="link1">
                Sign in
              </Link>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
