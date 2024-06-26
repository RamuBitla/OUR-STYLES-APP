import { useLogin } from "../../Hooks/useLogin";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const Login = () => {
  const { login, error } = useLogin();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailError || passwordError ) {
      return;
    }

    await login(inputs.email, inputs.password);
    setInputs({email: "", password: ""});
  };

  return (
    <div className={style.login_container}>
      <div className={style.login_form_container}>
        <div className={style.left}>
          <form className={style.form_container} id="form-tag" onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
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
            />
            {passwordError && (
              <p className={style.error_message}>{passwordError}</p>
            )}
            <p className={style.forgotpwd}>click here for <Link to="/forgot-password"> forgot password</Link></p>
            <button type="submit" className={style.green_btn}>
              Sign In
            </button>
            {/* <span className={style.forgetpwd}><Link to="/forgot-password">Forgot Password</Link></span> */}

          {error && <p className={style.error_message}><span>{"Invaild Email / Password" }</span></p>}
          {/* {error ? <span className={style.error_message}>Invaild Email / Password</span> : null} */}
          </form>
        </div>
        <div className={style.right}>
          <h1>New User ?</h1>
          <Link to="/signup">
            <button type="button" className={style.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
