import React from 'react';
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>About Us</h1>

      <p>
        Welcome to our restaurant review application! We are dedicated to providing you with the best dining experiences...
      </p>

      <User name="Shivansu"/>
      <UserClass name="Shivansub" location="lonewala"/>

      <p>
        Our mission is to help food enthusiasts discover new culinary delights...
      </p>

      <p>Thank you for being a part of our community. Happy dining!</p>
    </div>
  );
};

export default About;
