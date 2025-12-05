import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
      useEffect(() => {
        console.log("Component mounted or updated");
      },[btnName]);
  return (
    <div
      className="navbar"
      style={{
        padding: '20px 40px',
        backgroundColor: '#2ecc71',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" 
          alt="Logo" 
          style={{ height: '50px', width: '50px' }} 
        />
        <span style={{ 
          fontSize: '28px', 
          fontWeight: '800', 
          color: '#ffffff',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          letterSpacing: '-0.5px'
        }}>FoodApp</span>
      </div>

      <nav>
        <ul
          style={{
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            gap: '35px',
            alignItems: 'center'
          }}
        >
          <li>
            <Link to='/' style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              padding: '8px 16px',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}
            >Home</Link>
          </li>
          <li>
            <Link to='/about' style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              padding: '8px 16px',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}
            >About</Link>
          </li>
          <li>
            <Link to='/contactus' style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              padding: '8px 16px',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}
            >Contact</Link>
          </li>
          <li style={{
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            padding: '8px 16px',
            borderRadius: '20px',
            transition: 'all 0.3s ease'
          }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.transform = 'translateY(0)';
            }}
          >Cart</li>
          <button
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
            }}
            style={{
              backgroundColor: '#27ae60',
              color: 'white',
              border: 'none',
              padding: '12px 28px',
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(39,174,96,0.4)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.05)';
              e.target.style.boxShadow = '0 8px 25px rgba(39,174,96,0.6)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 4px 15px rgba(39,174,96,0.4)';
            }}
          >{btnName}</button>
        </ul>
      </nav>
    </div>
  );
};
export default Header;