import React from 'react'

const MovieCard = ({ movie, fallbackPoster }) => {
  if (!movie) return null

  const {
    Title: title,
    Year: year,
    Poster: poster,
  } = movie

  const posterSrc = poster && poster !== 'N/A' ? poster : fallbackPoster

  return (
    <div className="group w-44 sm:w-48 md:w-52 lg:w-56 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-white/5 border border-white/5 shadow-lg shadow-black/40 transition duration-200 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={posterSrc}
          alt={title}
          className="h-full w-full object-cover transition duration-200 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-200" />
      </div>
      <div className="p-3 space-y-1">
        <h3 className="text-sm font-semibold text-white leading-tight overflow-hidden text-ellipsis" title={title}>{title}</h3>
        {year && <p className="text-xs text-gray-300">{year}</p>}
      </div>
    </div>
  )
}

export default MovieCard