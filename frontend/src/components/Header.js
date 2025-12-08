import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("Header mounted or updated:", btnName);
  }, [btnName]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contactus' },
  ];

  return (
    <div
      style={{
        padding: '8px 30px',
        backgroundColor: '#007bff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        height: '60px'
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
          alt="Logo"
          style={{ width: '32px', height: '32px' }}
        />
        <span style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#fff',
        }}>BFC</span>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <ul style={{
          display: 'flex',
          gap: '20px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}>
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '14px',
                  padding: '4px 12px',
                  borderRadius: '15px',
                  transition: '0.2s',
                }}
                onMouseOver={e => e.target.style.backgroundColor = 'rgba(255,255,255,0.15)'}
                onMouseOut={e => e.target.style.backgroundColor = 'transparent'}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li
            style={{
              color: '#fff',
              fontWeight: '500',
              fontSize: '14px',
              padding: '4px 12px',
              borderRadius: '15px',
              cursor: 'pointer',
              transition: '0.2s',
            }}
            onMouseOver={e => e.target.style.backgroundColor = 'rgba(255,255,255,0.15)'}
            onMouseOut={e => e.target.style.backgroundColor = 'transparent'}
          >
            Cart
          </li>
        </ul>

        {/* Login/Logout Button */}
        <button
          onClick={() => setBtnName(btnName === 'Login' ? 'Logout' : 'Login')}
          style={{
            backgroundColor: '#d86117ff',
            color: '#fff',
            border: 'none',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: '0.2s',
          }}
          onMouseOver={e => {
            e.target.style.backgroundColor = '#219a52';
          }}
          onMouseOut={e => {
            e.target.style.backgroundColor = '#27ae60';
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
