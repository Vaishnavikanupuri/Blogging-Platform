import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Here you can add login validation logic
        navigate("/"); // Navigate to homepage/blog platform
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
            <div className="divider">
                <p>OR</p>
                <p><Link to="/forgotPassword">Forgot Password</Link></p>
                <p>
                    Don't have an account? <Link to="/signup">Signup</Link>
                </p>
            </div>
        </div>
    );
}
