import React from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "./assets/logo2.png";
import chat from "./assets/chat.png";
import plus from "./assets/plus.png";
import notification from "./assets/notification.png";

export default function Header({ isLoggedIn, profileImg }) {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img src={logo2} alt="Logo" />
      <h2>Blogging Platform</h2>

      <input type="text" placeholder="Search..." className="search-bar" />

      <div className="img1">
        <img src={chat} alt="Chat" />
      </div>
      <div className="img2">
        <img src={plus} alt="Plus" />
      </div>
      <div className="img3">
        <img src={notification} alt="Notifications" />
      </div>

      {isLoggedIn ? (
        <div className="profile-img">
          <img
            src={profile || "https://via.placeholder.com/40"}
            alt="Profile"
            style={{ borderRadius: "50%", width: "40px", height: "40px" }}
          />
        </div>
      ) : (
        <button onClick={() => navigate("/login")} className="btn">
          Login / Signup
        </button>
      )}
    </div>
  );
}
