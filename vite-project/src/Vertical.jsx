import React from "react";
import Home from "./assets/Home.png";
import explore from "./assets/explore.png";
import message from "./assets/message.png";
import settings from "./assets/settings.png";
import logout from "./assets/logout.png";
export default function Vertical() {
  return (
    <div className="container">
      {/* Left Sidebar */}
      <div className="sidebar">
        <ul>
          <li>
            <img src={Home} alt="Home" />Home
          </li>
          <li>
            <img src={explore} alt="Explore" /> Explore
          </li>
          <li>
            <img src={message} alt="Messages" /> Messages
          </li>
          <li>
            <img src={settings} alt="Settings" /> Settings
          </li>
          <li>
            <img src={logout} alt="logout" /> Logout
          </li>          
        </ul>
      </div>

      {/* Right Content */}
      <div className="content">
        <h1>Dashboard</h1>
        <p>Here’s an overview of your activity:</p>

        <div className="cards">
          <div className="card">
            <h2>Messages</h2>
            <p>You have 5 new messages.</p>
          </div>
          <div className="card">
            <h2>Notifications</h2>
            <p>3 new alerts today.</p>
          </div>
          <div className="card">
            <h2>Explore</h2>
            <p>Check trending topics.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
