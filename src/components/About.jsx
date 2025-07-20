// src/components/About.jsx

import React from "react";

export default function About() {
  return (
    <div className="glass-panel max-w-3xl mx-auto p-8 text-center">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        🪐 About Cosmo Travel
      </h2>
      <img
        src="/spaceship.jpg"
        alt="Spaceship"
        className="w-60 mx-auto mb-6 rounded-lg shadow-lg transition-transform duration-700 hover:scale-105"
      />
      <p className="text-gray-300 text-lg leading-relaxed">
        <strong>Cosmo Travel</strong> is an interactive web application designed for space enthusiasts and learners, presenting a sleek, cosmic-themed dashboard for visualizing intricate space data. It provides real-time tracking of spacecraft systems, including Mars rovers (displaying telemetry, instrument status, and 3D models), live monitoring of the ISS (showing its current location, speed, altitude, upcoming passes over user-defined areas like Vellore, Tamil Nadu, live video feeds, and crew information), and tracking asteroid movements (visualizing orbital paths, providing detailed data, projecting future trajectories, and identifying Potentially Hazardous Asteroids). Additionally, users can view telemetry for various operational satellites (including orbital parameters and function-specific data) and explore Mars weather (offering current and historical data for specific locations, temperature, pressure, wind, UV levels, dust activity alerts, and trend graphs). This comprehensive platform not only makes diverse space information engaging and visually accessible but also incorporates customizable alerts for significant space events, allowing users to set notifications for specific orbital passes, asteroid proximity, or spacecraft status changes. It further fosters learning through interactive educational content, guided tours, and the potential for community sharing of discoveries and insights, creating an immersive and personalized journey through space data. 🚀</p></div>
  );
}
