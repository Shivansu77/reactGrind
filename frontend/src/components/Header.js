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
    <div className="sticky top-0 z-50 bg-black shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="Logo"
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold text-white">BFC</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <ul className="flex list-none gap-8 m-0 p-0 items-center">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-200 no-underline font-medium text-base hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/grocery"
                className="text-gray-200 no-underline font-medium text-base hover:text-white transition-colors flex items-center gap-1"
              >
                🛒 Cart
              </Link>
            </li>
            <li className="text-sm font-medium">{onlineStatus === false ? "🔴 Offline" : "🟢 Online"}</li>
          </ul>

          {/* Login/Logout Button */}
          <button
            onClick={() => setBtnName(btnName === 'Login' ? 'Logout' : 'Login')}
            className="bg-gray-800 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors shadow-sm"
            style={{border: '1px solid rgba(255,255,255,0.06)'}}
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
