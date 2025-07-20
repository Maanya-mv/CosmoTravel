// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
}
