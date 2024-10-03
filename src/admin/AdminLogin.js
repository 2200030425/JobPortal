import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./admin.css";

export default function AdminLogin() {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="left-section">
          <h1>Welcome Back, Admin!</h1>
          <p>Manage your portal effectively and ensure smooth operations.</p>
        </div>
        <div className="right-section">
          <h2 className="form-title">Admin Login</h2>
          <form className="login-form">
            {/* Email input */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control custom-input"
                placeholder="Enter your email"
              />
            </div>

            {/* Password input */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control custom-input"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember me and Forgot password */}
            <div className="form-footer">
              <div className="checkbox-wrapper">
                <input type="checkbox" id="rememberMe" className="custom-checkbox" />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <a href="#!" className="forgot-password">
                Forgot password?
              </a>
            </div>

            {/* Login button */}
            <button type="submit" className="btn custom-btn">
              Login
            </button>
          </form>

          {/* Register link */}
          {/* <p className="register-link">
            Don’t have an account? <a href="#!" className="link-danger">Register</a>
          </p> */}
        </div>
      </div>

      {/* Custom footer */}
      <footer className="login-footer">
        <p className="footer-text">© 2024 Admin Portal. All rights reserved.</p>
        <div className="social-links">
          <a href="#!" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#!" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#!" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </footer>
    </div>
  );
}
