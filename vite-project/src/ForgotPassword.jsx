import React from "react";
import { useNavigate } from "react-router-dom";

export default function ForgetPassword() {
    const navigate = useNavigate();

    return (
        <div className="login-container3">
            <h2>Reset Password</h2>
            <input type="email" placeholder="Email" />
            <button onClick={() => navigate("/login")}>Send Reset Link</button>
        </div>
    );
}
