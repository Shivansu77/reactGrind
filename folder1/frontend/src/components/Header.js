import React, { useState, useEffect , useContext} from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  useEffect(() => {
  }, [btnName]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contactus' },
  ];

  //subrcribe to the store using useSelector
  const cartItems = useSelector(store => store.cart.items);

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
                🛒 Grocery
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-gray-200 no-underline font-medium text-base hover:text-white transition-colors cursor-pointer"
              >
                Cart - {cartItems.length} items
              </Link>
            </li>
            <li className="text-sm font-medium">{onlineStatus === false ? "🔴 Offline" : "🟢 Online"}</li>
            <li className="text-sm font-medium">User - {loggedInUser}</li>
          </ul>

          {/* Login/Logout Button */}
          <button
            onClick={() => setBtnName(btnName === 'Login' ? 'Logout' : 'Login')}
            className="bg-gray-800 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-gray-700 transition-colors shadow-sm border border-white/6"
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
