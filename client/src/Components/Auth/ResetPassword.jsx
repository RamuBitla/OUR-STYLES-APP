// import React from 'react'
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./style.module.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id, token } = useParams();

  if (!id || !token) {
    console.error("ID or token is missing");
    return <h1>Invalid reset link</h1>;
  }

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset the error message
    setError("");

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    axios
      .post(`http://localhost:8080/api/reset-password/${id}/${token}`, { password })
      .then((res) => {
        if (res.data.Status === "success") {
          navigate("/login");
        } else {
          setError("Failed to update password. Please try again.");
        }
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <div className={style.login_container}>
      <div className={style.login_form_container}>
        <div className={style.left}>
          <form
            className={style.form_container}
            id="form-tag"
            onSubmit={handleSubmit}
          >
            <h1>Reset Your Password</h1>
            <input
              type="password"
              placeholder="Enter new password"
              name="password"
              required
              className={style.input}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              required
              className={style.input}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <p style={{color: 'red'}}>{error}</p>}
            <button type="submit" className={style.green_btn}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
