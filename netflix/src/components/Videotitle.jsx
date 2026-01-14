import React from 'react'

const Videotitle = ({ title, year }) => {
  return (
    <div className="px-8 pt-24 pb-6 text-white">
      <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-md">{title}</h1>
      {year && <p className="mt-2 text-lg text-gray-200 drop-shadow-sm">{year}</p>}
    </div>
  )
}

export default Videotitle;