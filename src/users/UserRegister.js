import React, { useState } from "react";
import axios from "axios";
import userreg from "../assets/ureg.jpg";
import { useNavigate } from "react-router-dom";
import "./UserRegister.css"; // Import the CSS file

export default function UserRegister() {
  const [user, setUser] = useState({
    mobile: "",
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const { mobile, firstName, lastName, email, age, password, confirmPassword } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/user", user);
      if (response.status === 201) {
        alert("User registered successfully!");
        navigate("/user");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <section className="vh-100 custom-bg">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card custom-card">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 title">
                      Create Your Account
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          type="tel"
                          name="mobile"
                          className="form-control custom-input"
                          placeholder="Mobile Number"
                          value={mobile}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          name="firstName"
                          className="form-control custom-input"
                          placeholder="First Name"
                          value={firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          name="lastName"
                          className="form-control custom-input"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control custom-input"
                          placeholder="Email Address"
                          value={email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="number"
                          name="age"
                          className="form-control custom-input"
                          placeholder="Age"
                          value={age}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="password"
                          className="form-control custom-input"
                          placeholder="Password"
                          value={password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          name="confirmPassword"
                          className="form-control custom-input"
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-check mb-5">
                        <input className="form-check-input me-2" type="checkbox" required />
                        <label className="form-check-label">
                          I agree to the <a href="#!">Terms of Service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-custom btn-lg">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      src={userreg}
                      className="img-fluid custom-img"
                      alt="Signup illustration"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
