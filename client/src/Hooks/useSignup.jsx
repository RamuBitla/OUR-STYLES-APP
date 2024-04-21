import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (name, email, password) => {
    setError(null);

    try {
      const response = await axios.post("http://localhost:8080/api/signup", {
        name,
        email,
        password,
      });

      // const data = await response.json();

      if (!response.ok) {
        setError(response.data.error);
      }
      if (response.ok) {
        //save user data in local storage
        localStorage.setItem("user", JSON.stringify(response.data));

        //update user context
        dispatch({ type: "LOGIN", payload: response.data });
      }
      navigate("/login");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return { signup, error };
};
