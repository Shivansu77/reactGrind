import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies = [], fallbackPoster }) => {
  if (!movies.length) return null

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">{title}</h2>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} fallbackPoster={fallbackPoster} />
        ))}
      </div>
    </div>
  )
}

export default MovieList