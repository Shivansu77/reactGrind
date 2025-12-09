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
    <div className="sticky top-0 z-[1000] flex h-[60px] items-center justify-between bg-[#d46336eb] px-[30px] py-2 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
          alt="Logo"
          className="h-8 w-8"
        />
        <span className="text-xl font-bold text-white">BFC</span>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-[15px]">
        <ul className="flex list-none gap-5 m-0 p-0">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-white no-underline font-medium text-sm px-3 py-1 rounded-[15px] transition-all hover:bg-white/15"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/grocery"
              className="text-white no-underline font-medium text-sm px-3 py-1 rounded-[15px] transition-all hover:bg-white/15"
            >
              Cart
            </Link>
          </li>
          <li className="text-white">{onlineStatus === false ? "🔴 Offline" : "🟢 Online"}</li>
        </ul>

        {/* Login/Logout Button */}
        <button
          onClick={() => setBtnName(btnName === 'Login' ? 'Logout' : 'Login')}
          className="bg-white/20 text-white border-2 border-white px-[18px] py-1.5 rounded-[20px] text-sm font-semibold cursor-pointer transition-all hover:bg-white hover:text-[tomato]"
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
