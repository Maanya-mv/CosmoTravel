import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ISSLocation() {
  const [issData, setIssData] = useState(null);
  const [timestamp, setTimestamp] = useState(null);

  useEffect(() => {
    const fetchISSData = async () => {
      try {
        const response = await axios.get("https://api.wheretheiss.at/v1/satellites/25544");
        setIssData(response.data);
        setTimestamp(new Date().toLocaleString());
      } catch (error) {
        console.error("Error fetching ISS data:", error);
      }
    };

    fetchISSData();
    const interval = setInterval(fetchISSData, 5000); // update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  if (!issData) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg animate-pulse">
        Loading ISS Live Data...
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="glass-panel p-8 rounded-lg w-full max-w-2xl text-center bg-black/70 backdrop-blur-md border border-cyan-500 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          🛰️ ISS Live Tracker
        </h1>
        <p className="text-gray-300 mb-4">Last Updated: {timestamp}</p>

        <table className="min-w-full text-left text-white border border-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-cyan-700 text-white">
            <tr>
              <th className="py-2 px-4">🌌 Parameter</th>
              <th className="py-2 px-4">📡 Value</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800/80">
            <TableRow label="Latitude" value={`${issData.latitude.toFixed(4)}°`} />
            <TableRow label="Longitude" value={`${issData.longitude.toFixed(4)}°`} />
            <TableRow label="Altitude" value={`${issData.altitude.toFixed(2)} km`} />
            <TableRow label="Velocity" value={`${(issData.velocity * 3.6).toFixed(2)} km/h (${issData.velocity.toFixed(2)} m/s)`} />
            <TableRow label="Visibility" value={issData.visibility} />
            <TableRow label="Footprint" value={`${issData.footprint.toFixed(2)} km`} />
            <TableRow label="Solar Latitude" value={`${issData.solar_lat.toFixed(2)}°`} />
            <TableRow label="Solar Longitude" value={`${issData.solar_lon.toFixed(2)}°`} />
          </tbody>
        </table>

       
      </div>
    </div>
  );
}

function TableRow({ label, value }) {
  return (
    <tr className="border-t border-gray-700">
      <td className="py-2 px-4 text-cyan-300">{label}</td>
      <td className="py-2 px-4">{value}</td>
    </tr>
  );
}
