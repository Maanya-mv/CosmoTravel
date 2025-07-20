// src/components/AsteroidTracker.jsx

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

export default function AsteroidTracker() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: "Distance (Million km)",
      data: [],
      fill: false,
      borderColor: "rgba(16, 185, 129, 0.8)",
      backgroundColor: "rgba(16, 185, 129, 0.2)",
      tension: 0.4,
    }],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString();
      const distance = 9 + Math.random() * 2; // simulate asteroid distance
      setChartData(prev => {
        const newLabels = [...prev.labels, time].slice(-20);
        const newData = [...prev.datasets[0].data, distance].slice(-20);
        return {
          labels: newLabels,
          datasets: [{
            ...prev.datasets[0],
            data: newData,
          }],
        };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const options = {
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: "Live Asteroid Distance",
        color: "#a78bfa",
        font: { size: 18 },
      },
    },
    scales: {
      x: { 
        title: { display: true, text: "Time", color: "#fcd34d", font: { size: 14 } } 
      },
      y: { 
        title: { display: true, text: "Distance (Million km)", color: "#fcd34d", font: { size: 14 } } 
      },
    },
  };

  return (
    <div className="glass-panel max-w-2xl mx-auto p-6 text-center">
      <Line data={chartData} options={options} />
      <p className="text-gray-300 mt-4">Real-time asteroid tracking showing distance variations as it approaches Earth.</p>
    </div>
  );
}
