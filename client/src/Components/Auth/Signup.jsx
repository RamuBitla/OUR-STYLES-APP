import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./style.module.css";
import { useSignup } from "../../Hooks/useSignup";

const Signup = () => {
  const { signup, error } = useSignup();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (e.target.name === "email") {
      validateEmail(e.target.value);
    } else if (e.target.name === "password") {
      validatePassword(e.target.value);
    }
     else if (e.target.name === "confirmPassword") {
      validateConfirmPassword(inputs.password, e.target.value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setConfirmPasswordError("");
    if (emailError || passwordError || confirmPasswordError ) {
      return;

    }

    if (inputs.password !== inputs.confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    }


    await signup(
      inputs.name,
      inputs.email,
      inputs.password,
      inputs.confirmPassword
    );
    setInputs({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className={style.signup_container}>
      <div className={style.signup_form_container}>
        <div className={style.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={style.white_btn}>
              Sign In
            </button>
          </Link>
        </div>
        <div className={style.right}>
          <form className={style.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="User Name"
              name="name"
              onChange={handleChange}
              value={inputs.name}
              required
              className={style.input}
            />

            <input
              type="email"
              placeholder="E-Mail Address"
              name="email"
              onChange={handleChange}
              value={inputs.email}
              required
              className={style.input}
            />
{emailError && <p className={style.error_message}>{emailError}</p>}
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={inputs.password}
              required
              className={style.input}
              id=""
            />
            {passwordError && (
              <p className={style.error_message}>{passwordError}</p>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
              value={inputs.confirmPassword}
              required
              className={style.input}
              id=""
            />
             {confirmPasswordError && (
              <p className={style.error_message}>{confirmPasswordError}</p>
            )}
            <div className={style}>
              <button type="submit" className={style.green_btn}>
                Sign Up
              </button>
            </div>
            {error && <p className={style.error_message}>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
