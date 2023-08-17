import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginUnsuccessful() {
  const navigate = useNavigate();

  const returnHome = () => {
    navigate("/home");
  };

  return (
    <div className="success-page">
      <div className="success-container">
        <h1>Login Unsuccessful!</h1>
        <p>Please try again.</p>
        <div className="redirect-container">
          <p>Would you like to return home?</p>
          <button onClick={returnHome}>Return home</button>
        </div>
      </div>
    </div>
  );
}
