import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Left Side - Image */}
      <div className="col-md-6 d-none d-md-block p-0">
        <img
          src="https://img.freepik.com/free-photo/3d-rendering-cartoon-shopping-cart_23-2151680530.jpg?uid=R172728565&ga=GA1.1.99758021.1748622973&semt=ais_items_boosted&w=740"
          alt="Background"
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      {/* Right Side - Form */}
      <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
        <div className="w-75">
          <h2 className="text-center mb-4">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Register
            </button>
            <div className="text-center">
              <p>
                Already have an account?{" "}
                <Link to="/" className="text-primary">
                  Login
                </Link>
              </p>
              <p>
                <Link to="/forgot-password" className="text-primary">
                  Forgot Password?
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
