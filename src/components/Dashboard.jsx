// src/components/Dashboard.jsx

import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import ISSLocation from './ISSLocation';
import AsteroidTracker from './AsteroidTracker';
import SatelliteTelemetry from './SatelliteTelemetry';
import MarsWeather from './MarsWeather';
import StarfieldBackground from './StarfieldBackground';
import About from './About';
import '../App.css';

export default function Dashboard() {
  const location = useLocation();
  const currentTab = location.pathname.split('/').pop() || 'about';
  const [activeTab, setActiveTab] = useState(currentTab);

  const navItems = [
    { label: 'About', path: 'about', key: 'about' },
    { label: 'ISS Tracker', path: 'iss', key: 'iss' },
    { label: 'Asteroids', path: 'asteroids', key: 'asteroids' },
    { label: 'Satellite', path: 'satellite', key: 'satellite' },
    { label: 'Mars Weather', path: 'mars', key: 'mars' },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-black">
      <StarfieldBackground />

      {/* Navbar */}
      <nav className="relative z-10 backdrop-blur-md border-b border-indigo-500/40 py-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 px-4">
          {navItems.map((item) => (
            <NavButton
              key={item.key}
              active={activeTab === item.key}
              onClick={() => setActiveTab(item.key)}
              to={`/dashboard/${item.path}`}
            >
              {item.label}
            </NavButton>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-10">
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="iss" element={<ISSLocation />} />
          <Route path="asteroids" element={<AsteroidTracker />} />
          <Route path="satellite" element={<SatelliteTelemetry />} />
          <Route path="mars" element={<MarsWeather />} />
          <Route path="*" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

function NavButton({ children, active, onClick, to }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-5 py-3 rounded-full font-semibold transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-center min-w-[130px] ${
        active
          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
          : 'bg-gray-800/80 text-gray-200 hover:bg-gray-700/80'
      }`}
      style={{ textDecoration: 'none', margin: '8px' }}
    >
      {children}
    </Link>
  );
}
