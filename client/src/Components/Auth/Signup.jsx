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
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(inputs.name, inputs.email, inputs.password);
    setInputs({
      name: "",
      email: "",
      password: "",
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
