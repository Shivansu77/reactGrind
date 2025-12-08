import React from 'react';
import Profile from './Profile';

const About = () => {
  return (
    <div
      style={{
        padding: '30px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.6',
        color: '#333',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>
        About Us
      </h1>

      <p
        style={{
          marginBottom: '20px',
          fontSize: '18px',      // increased font size
          fontWeight: '600',     // made it bold
        }}
      >
        Welcome to our restaurant BFC (Bisht Food Corner)! We are dedicated to providing you with the best dining experiences by offering comprehensive reviews and ratings of restaurants in your area.
      </p>

      <Profile />

      <p style={{ marginTop: '20px', marginBottom: '20px', fontSize: '16px' }}>
        Our mission is to help food enthusiasts discover new culinary delights and make informed dining choices. Whether you're looking for a cozy cafe or a fine dining restaurant, we've got you covered!
      </p>

      <p style={{ fontSize: '16px', fontWeight: '500', textAlign: 'center' }}>
        Thank you for being a part of our community. Happy dining!
      </p>
    </div>
  );
};

export default About;
