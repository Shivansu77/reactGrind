import React from 'react'
import Header from './Header'
import netflixBg from '../assets/netflix.jpg'

const Browse = () => {
  return (
    <div 
      className="w-full h-screen bg-black"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${netflixBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Header />
      <div className="pt-20 px-8 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Netflix</h1>
        <p className="text-xl mb-8">Discover your favorite movies and shows</p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-300 transition">
            Play
          </button>
          <button className="bg-gray-700 text-white px-8 py-3 rounded font-bold hover:bg-gray-800 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Browse