import React from 'react'

const Videotitle = ({ title, year }) => {
  return (
    <div className="absolute inset-0 z-30 flex items-center">
      <div className="pointer-events-auto max-w-3xl space-y-4 rounded-lg sm:rounded-2xl border border-white/5 bg-gradient-to-r from-black/80 via-black/60 to-black/20 px-6 sm:px-10 lg:px-16 py-10 shadow-2xl backdrop-blur-sm">
        <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-gray-200/80">
          Now Streaming{year && <span className="ml-2">- {year}</span>}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">{title}</h1>
        {year && <p className="text-lg sm:text-xl text-gray-200/90">{year}</p>}
        <div className="flex flex-wrap gap-3 pt-2">
          <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm sm:text-base font-semibold text-black shadow-lg shadow-white/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl">
            <span>Play</span>
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm sm:text-base font-semibold text-white backdrop-blur transition duration-200 hover:border-white hover:bg-white/15 hover:-translate-y-0.5">
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Videotitle;