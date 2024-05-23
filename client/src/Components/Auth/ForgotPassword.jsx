import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "./style.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/forgot-password", { email })
      .then((res) => {
        // console.log("Forgot Password:" + res.data);
        if (res.data.Status === "Success") {
          // alert("Check your email for reset password link");
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
     <div className={style.login_container}>
     <div className={style.login_form_container}>
       <div className={style.left}>
         <form className={style.form_container} id="form-tag" onSubmit={handleSubmit}>
           <h1>Forgot Password</h1>
           <input
             type="email"
             placeholder="enter your e-mail id"
             name="email"
             required
             className={style.input}
             onChange={(e) => setEmail(e.target.value)}
           />
           <button type="submit" className={style.green_btn}>
             send
           </button>
         </form>
       </div>
     </div>
   </div>
  );
};

export default ForgotPassword;
