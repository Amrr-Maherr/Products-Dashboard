import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset password requested for:", email);
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
          <h2 className="text-center mb-4">Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Send Reset Link
            </button>
            <div className="text-center">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-primary">
                  Login
                </Link>
              </p>
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-primary">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
