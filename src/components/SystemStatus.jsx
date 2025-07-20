import React from 'react';

export default function SystemStatus({ title, status, level, icon }) {
  const getStatusColor = () => {
    if (level > 80) return 'text-green-400';
    if (level > 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="card p-4 hover:shadow-lg transition-all">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-medium">{icon} {title}</h3>
        <span className={`text-sm px-2 py-1 rounded ${getStatusColor()}`}>
          {status}
        </span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${getStatusColor().replace('text', 'bg')}`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <p className="text-right text-sm mt-1 text-gray-400">{level}% operational</p>
    </div>
  );
}