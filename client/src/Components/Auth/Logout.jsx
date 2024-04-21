import React from "react";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useLogout } from "../../Hooks/useLogout";
import {  useNavigate } from "react-router-dom";

import './style.module.css'

const Logout = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    navigate("/"); // Navigate to the main page
  };

  return (
    <div>
      {user && (
        <div className="logout">
          <span>{user.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Logout;
