import React from "react";
import "./Navbar.css"; // Include the CSS file for styling

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand" href="#">
            Job Portal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <button className="btn btn-outline-light">button</button>
        </div>
      </nav>
    </div>
  );
}
