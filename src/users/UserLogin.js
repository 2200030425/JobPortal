import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../assets/ulog.jpg";
import "./users.css"; // Import the updated CSS file

export default function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegisterClick = () => {
    navigate("/registeruser");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/userlogin/${encodeURIComponent(
          email
        )}/${encodeURIComponent(password)}`,
        {},
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status === 200) {
        alert("Login successful!");
        navigate("/user");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      className="login-wrapper"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="login-container">
        <div className="form-section">
          <h2 className="form-title">User Login</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control custom-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control custom-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-footer">
              <div className="checkbox-wrapper">
                <input type="checkbox" id="rememberMe" className="custom-checkbox" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#!" className="forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="btn custom-btn">Login</button>
          </form>
          <p className="register-link">
            Don’t have an account?{" "}
            <button className="link-danger" onClick={handleRegisterClick}>
              Register
            </button>
          </p>
        </div>
      </div>
      <footer className="login-footer">
        <p className="footer-text">© 2024 User Portal. All rights reserved.</p>
        <div className="social-links">
          <a href="#!" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#!" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#!" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </footer>
    </div>
  );
}
