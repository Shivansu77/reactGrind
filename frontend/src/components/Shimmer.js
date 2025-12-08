import React from 'react';

const Shimmer = () => {
  const shimmerStyle = {
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite',
    borderRadius: '10px',
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {Array(12).fill("").map((_, index) => (
        <div key={index} style={{
          height: '350px',
          width: '350px',
          padding: '10px',
          borderRadius: '12px',
          margin: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <div style={{ ...shimmerStyle, flex: 1 }}></div>
          <div style={{ ...shimmerStyle, height: '20px', width: '80%', margin: '0 auto' }}></div>
          <div style={{ ...shimmerStyle, height: '15px', width: '60%', margin: '0 auto' }}></div>
        </div>
      ))}

      {/* Keyframes for shimmer */}
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>
    </div>
  );
};

export default Shimmer;
