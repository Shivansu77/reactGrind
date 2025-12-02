import React, { useState,useEffect } from 'react';
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
      useEffect(() => {
        console.log("Component mounted or updated");
      },[btnName]);
  return (
    <div
      className="navbar"
      style={{
        padding: '15px 40px',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src="logo.png" alt="Logo" style={{ height: '50px' }} />
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>FoodApp</span>
      </div>

      <nav>
        <ul
          style={{
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            gap: '30px',
            alignItems: 'center'
          }}
        >
          <li style={{
            color: '#333',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'color 0.3s'
          }}
            onMouseOver={(e) => e.target.style.color = '#007bff'}
            onMouseOut={(e) => e.target.style.color = '#333'}
          >Home</li>
          <li style={{
            color: '#333',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'color 0.3s'
          }}
            onMouseOver={(e) => e.target.style.color = '#007bff'}
            onMouseOut={(e) => e.target.style.color = '#333'}
          >About</li>
          <li style={{
            color: '#333',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'color 0.3s'
          }}
            onMouseOver={(e) => e.target.style.color = '#007bff'}
            onMouseOut={(e) => e.target.style.color = '#333'}
          >Contact</li>
          <li style={{
            color: '#333',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500',
            transition: 'color 0.3s'
          }}
            onMouseOver={(e) => e.target.style.color = '#007bff'}
            onMouseOut={(e) => e.target.style.color = '#333'}
          >Cart</li>
          <button
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
            }}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '6px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background-color 0.3s, transform 0.2s',
              boxShadow: '0 2px 4px rgba(0,123,255,0.2)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#0056b3';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#007bff';
              e.target.style.transform = 'translateY(0)';
            }}
          >{btnName}</button>
        </ul>
      </nav>
    </div>
  );
};
export default Header;