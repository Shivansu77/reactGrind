import React from 'react';
const { useEffect} = React;

const Profile = () => {
  
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Profile Component Mounted");
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      margin: '20px 0',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#2ecc71', marginBottom: '15px' }}>Our Team</h2>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        <img 
          src="https://via.placeholder.com/100" 
          alt="Profile" 
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
        <div>
          <h3 style={{ margin: '0 0 8px 0', color: '#2c3e50' }}>Shivansub Bisht</h3>
          <p style={{ margin: '0 0 5px 0', color: '#7f8c8d' }}>Founder & CEO</p>
          <p style={{ margin: '0', color: '#7f8c8d' }}>Location: Lonewala</p>
          <p style={{ margin: '5px 0 0 0', color: '#7f8c8d' }}>Contact: @Shark77su</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
