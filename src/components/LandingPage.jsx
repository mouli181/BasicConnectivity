import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";


function LandingPage() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <h1>Welcome</h1>
      <p>Choose an option to continue:</p>
      <button onClick={goToLogin}>Login</button>
      <button onClick={goToRegister}>Register</button>
    </div>
  );
}

export default LandingPage;
