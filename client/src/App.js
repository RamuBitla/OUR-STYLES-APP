import "./App.css";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { useAuthContext } from "./Hooks/useAuthContext";

import Signup from "./Components/Auth/Signup";
import Login from "./Components/Auth/Login";
import Main from "./Components/Main/index";
import TshirtView from "./Components/Pages/TshirtView";
import SinglePage from "./Components/Pages/Components/SinglePage";
import Cart from "./Components/Pages/Components/Cart";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import ResetPassword from "./Components/Auth/ResetPassword";

function App() {
  const [proDetail, setProDetail] = useState([]);

  const { user } = useAuthContext();
  localStorage.getItem("token");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/tshirts" />}
          />
          <Route
            path="/tshirts"
            element={
              !user ? (
                <Navigate to="/login" />
              ) : (
                <TshirtView setProDetail={setProDetail} />
              )
            }
          />
          <Route
            path="/single-product"
            element={<SinglePage proDetail={proDetail} />}
          />
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
