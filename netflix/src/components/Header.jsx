import React from 'react'
const Header = () => {
  return (
    <div className="fixed w-full px-8 py-4 z-20 flex justify-between items-center bg-gradient-to-b from-black to-transparent">
      <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
      <div className="flex items-center gap-4">
        <select className="bg-black text-white px-4 py-2 rounded border border-gray-600">
          <option>English</option>
          <option>Hindi</option>
        </select>
        <button className="bg-red-600 text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition">
          Sign Out.
        </button>
      </div>
    </div>
  )
}

export default Header