// import { useAuthContext } from "./useAuthContext";
// // import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// export const useLogin = () => {
//   const [error, setError] = useState(null);
//   const { dispatch } = useAuthContext();
//   const navigate = useNavigate();

//   const login = async (email, password) => {
//     setError(null);

//     try {
//       const response = await axios.post("http://localhost:8080/api/login", {
//         email,
//         password,
//       });

//       const data = response.data;

//       if (response.status === 200) {
  //const loggedIn = await loggedInResponse.json();
//         // Save user data in local storage
//        //Save user data in local storage
    //localStorage.setItem("user", JSON.stringify(loggedIn.user));
    //localStorage.setItem("token", loggedIn.token);
//         // Update user context
//         dispatch({ type: "LOGIN", payload: data });

//         // Redirect to the main page after successful login
//         navigate("/tshirts");
//       }
//     } catch (error) {
//       window.alert("Invalid Email / Password")
    //setError(error.message === "Invalid Email / Password");
//     }
//   };

//   return { login, error };
// };

// const login = async (email, password) => {
//   setError(null);

//   try {
//     const loggedInResponse = await fetch("http://localhost:8080/api/login", {
//      email, password
//     });

//     loggedInResponse.interceptors.request.use((config) => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     });

//     if (!loggedInResponse.ok) {
//       throw new Error("Invalid email or password");
//     }

//     const loggedIn = await loggedInResponse.json();

//     // Save user data in local storage
//     localStorage.setItem("user", JSON.stringify(loggedIn.user));
//     console.log(email, password)
//     localStorage.setItem("token", loggedIn.token);
//     dispatch({ type: "LOGIN", payload: loggedIn });

//     // Redirect to the main page after successful login
//     navigate("/tshirts");
//   } catch (error) {
//     window.alert("Invalid Email / Password")
//     setError(error.message === "Invalid Email / Password");
//   }
// };


// return { login, error };
// };




import { useState } from "react";
import {useAuthContext} from "./useAuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const useLogin = () =>{
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const login = async (email, password) =>{
        setError(null);

       try {
        const response = await axios.post("http://localhost:8080/api/login",{
         email, password
      });


      if (response.status === 200) {

        // Save user data in local storage
        localStorage.setItem("user", JSON.stringify(response.data));

       
        // Update user context
        dispatch({ type: "LOGIN", payload: response.data });

        // Redirect to the main page after successful login
        navigate("/tshirts");
      }
       } catch (error) {
        setError(error.response.data.message);
       }
       
    };

    return {login, error};
}
