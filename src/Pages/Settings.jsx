import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Settings() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmPassword) {
      Swal.fire("Error", "Please fill in all fields.", "error");
      return;
    }

    if (newPassword !== confirmPassword) {
      Swal.fire("Error", "New passwords do not match.", "error");
      return;
    }

    if (newPassword.length < 6) {
      Swal.fire("Error", "Password must be at least 6 characters.", "error");
      return;
    }

    Swal.fire("Success", "Password updated successfully!", "success");

    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="col-md-6 bg-white p-4 shadow rounded">
        <h3 className="text-center mb-4">Reset Password</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="oldPassword" className="form-label fw-semibold">
              Old Password
            </label>
            <input
              type="password"
              className="form-control"
              id="oldPassword"
              placeholder="Enter your old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label fw-semibold">
              New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              placeholder="Enter a new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="form-label fw-semibold">
              Confirm New Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
