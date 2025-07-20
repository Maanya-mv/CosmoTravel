// src/components/MarsWeather.jsx

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

export default function MarsWeather() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      label: "Temperature (°C)",
      data: [],
      fill: false,
      borderColor: "rgba(34, 211, 238, 0.8)",
      backgroundColor: "rgba(34, 211, 238, 0.2)",
      tension: 0.4,
    }],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString();
      const temp = -60 - Math.random() * 10; // simulate Mars temperature
      setChartData(prev => {
        const newLabels = [...prev.labels, time].slice(-20);
        const newData = [...prev.datasets[0].data, temp].slice(-20);
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
        text: "Live Mars Temperature",
        color: "#a78bfa",
        font: { size: 18 },
      },
    },
    scales: {
      x: { 
        title: { display: true, text: "Time", color: "#fcd34d", font: { size: 14 } } 
      },
      y: { 
        title: { display: true, text: "Temperature (°C)", color: "#fcd34d", font: { size: 14 } } 
      },
    },
  };

  return (
    <div className="glass-panel max-w-2xl mx-auto p-6 text-center">
      <Line data={chartData} options={options} />
      <p className="text-gray-300 mt-4">Live Mars temperature data simulated for monitoring environment changes.</p>
    </div>
  );
}
