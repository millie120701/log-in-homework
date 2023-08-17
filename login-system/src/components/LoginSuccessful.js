import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function LoginSuccessful() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/home");
  };

  return (
    <div className="success-page">
      <div className="success-container">
        <h1>Login Successful!</h1>
        <p>Welcome to your account {location.state.username}.</p>
        <div className="redirect-container">
          <p>Are you finished?</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </div>
  );
}
