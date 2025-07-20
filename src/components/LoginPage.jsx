import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => navigate("/dashboard");

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="website-title">COSMO TRAVEL</h1>
        <div className="login-card">
          <h2 className="login-title">Sign In</h2>
          <input
            type="text"
            placeholder="Username or Email"
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />
          <div className="remember-forgot">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember Me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button onClick={handleLogin} className="login-button">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}