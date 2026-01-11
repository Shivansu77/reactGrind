import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase.jsx'
import { removeUser } from '../utils/userSlice.jsx'
import avatarIcon from '../assets/icon.jpg'

const Header = () => {
  const user = useSelector((state) => state.user.user);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Sign-out failed', err);
    }
  };

  return (
    <div className="fixed w-full px-8 py-4 z-20 flex justify-between items-center bg-gradient-to-b from-black to-transparent">
      <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
      <div className="flex items-center gap-4">
        <span className="text-white text-sm hidden sm:inline">
          <img src={avatarIcon} alt="User Avatar" className="inline-block w-8 h-8  mr-2" />
          {user?.displayName || user?.email || 'Guest'}
        </span>
        <select className="bg-black text-white px-4 py-2 rounded border border-gray-600">
          <option>English</option>
          <option>Hindi</option>
        </select>
        <button
          className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default Header