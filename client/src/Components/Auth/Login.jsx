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

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={inputs.password}
              required
              className={style.input}
            />
            <button type="submit" className={style.green_btn}>
              Sign In
            </button>
          {error && <p className={style.error_message}><span>{"Invaild Email / Password" }</span></p>}
          {/* {error ? <span className={style.error_message}>Invaild Email / Password</span> : null} */}
          </form>
        </div>
        <div className={style.right}>
          <h1>New Here ?</h1>
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
