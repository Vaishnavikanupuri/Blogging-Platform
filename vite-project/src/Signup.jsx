import React from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    // After signup, navigate to the blogging platform home
    navigate("/");
  };

  return (
    <div className="login-container2">
      <h1>Signup</h1>
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}
