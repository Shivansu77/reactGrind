import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
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
        backgroundColor: 'tomato',
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
          <li>
            <Link
              to="/grocery"
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
              Cart
            </Link>
          </li>
          <li>{onlineStatus === false ? "🔴 Offline" : "🟢 Online"}</li>
        </ul>

        {/* Login/Logout Button */}
        <button
          onClick={() => setBtnName(btnName === 'Login' ? 'Logout' : 'Login')}
          style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            color: '#fff',
            border: '2px solid #fff',
            padding: '6px 18px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: '0.2s',
          }}
          onMouseOver={e => {
            e.target.style.backgroundColor = '#fff';
            e.target.style.color = 'tomato';
          }}
          onMouseOut={e => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
            e.target.style.color = '#fff';
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
