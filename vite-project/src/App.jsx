import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Vertical from "./Vertical.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import BlogLayout from "./BlogLayout.jsx";
import ForgotPassword from "./ForgotPassword.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogLayout />} /> {/* Home page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}
