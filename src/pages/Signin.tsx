// import { useState } from "react";
// import { useLoginMutation } from "../features/auth/authApi";
// import { useNavigate, Link } from "react-router-dom";
// import {
//   Container,
//   Row,
//   Col,
//   Form,
//   Button,
//   Alert,
//   Card,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// import "./Signup.css";
// import { Link } from "react-router-dom";

const Login = () => {
  //   const [formData, setFormData] = useState({
  //     email: "",
  //     password: "",
  //   });
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState("");
  //   const [success, setSuccess] = useState("");
  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { id, value } = e.target;
  //     setFormData((prev) => ({
  //       ...prev,
  //       [id]: value,
  //     }));
  //   };
  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();
  //     setError("");
  //     setSuccess("");
  //     setLoading(true);
  //     try {
  //       await login(formData).unwrap();
  //       setSuccess("Login successful!");
  //       navigate("/dashboard");
  //     } catch (err: unknown) {
  //       let errorMessage = "Login failed";
  //       if (err && typeof err === "object") {
  //         if (
  //           "data" in err &&
  //           typeof (err as any).data === "object" &&
  //           "message" in (err as any).data
  //         ) {
  //           errorMessage = (err as any).data.message;
  //         } else if (
  //           "message" in err &&
  //           typeof (err as any).message === "string"
  //         ) {
  //           errorMessage = (err as any).message;
  //         }
  //       }
  //       setError(errorMessage);
  //     }
  //   };
  //   return (
  //     <Container fluid style={{ padding: 0, margin: 0, height: "100vh" }}>
  //       <Row style={{ margin: 0, padding: 0, height: "100%" }}>
  //         <Col
  //           md={6}
  //           className="left-pane d-none d-md-flex align-items-center justify-content-start"
  //           style={{ padding: 0, margin: 0 }}
  //         >
  //           <div className="overlay text-white ms-5">
  //             <h2>
  //               Welcome back to <span className="brand">Urgent 2kay</span>
  //             </h2>
  //             <p className="subtitle">Sign in to manage your payments with ease.</p>
  //             <p className="small-text">
  //               Pay bills, send money and stay on top of things.
  //             </p>
  //             <p className="signin-text">
  //               Don’t have an account?{" "}
  //               <Link to="/sign-up" className="link">
  //                 Sign up
  //               </Link>
  //             </p>
  //           </div>
  //         </Col>
  //         <Col
  //           md={6}
  //           className="right-pane d-flex align-items-center justify-content-center"
  //           style={{ padding: 0, margin: 0 }}
  //         >
  //           <Card
  //             className="signup-form p-4"
  //             style={{
  //               maxWidth: "400px",
  //               width: "100%",
  //               margin: "0 1rem",
  //             }}
  //           >
  //             <h2 className="form-title mb-3">Log In</h2>
  //             {error && <Alert variant="danger">{error}</Alert>}
  //             {success && <Alert variant="success">{success}</Alert>}
  //             <Form onSubmit={handleSubmit}>
  //               <Form.Group className="mb-3" controlId="email">
  //                 <Form.Label>Email address</Form.Label>
  //                 <Form.Control
  //                   type="email"
  //                   placeholder="Enter your email"
  //                   value={formData.email}
  //                   onChange={handleChange}
  //                   required
  //                 />
  //               </Form.Group>
  //               <Form.Group className="mb-3" controlId="password">
  //                 <Form.Label>Password</Form.Label>
  //                 <Form.Control
  //                   type="password"
  //                   placeholder="Enter your password"
  //                   value={formData.password}
  //                   onChange={handleChange}
  //                   required
  //                 />
  //               </Form.Group>
  //               <Button
  //                 variant="primary"
  //                 type="submit"
  //                 className="w-100 signup-button"
  //                 disabled={isLoading}
  //               >
  //                 {isLoading ? "Logging in..." : "Log In"}{" "}
  //                 <span className="arrow">→</span>
  //               </Button>
  //             </Form>
  //             <p className="signin-text2 text-center mt-3">
  //               Don’t have an account?{" "}
  //               <Link to="/sign-up" className="link">
  //                 Sign up
  //               </Link>
  //             </p>
  //           </Card>
  //         </Col>
  //       </Row>
  //     </Container>
  //   );
};

export default Login;
