import React from 'react'

const GptMoviesSuggestion = ({ results = [], loading, error, fallbackPoster }) => {
  if (loading) {
    return <p className="text-gray-200">Searching...</p>
  }

  if (error) {
    return <p className="text-red-400">{error}</p>
  }

  if (!results.length) {
    return <p className="text-gray-400">Try a search to see results.</p>
  }

  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {results.map((movie) => {
        const poster = movie?.Poster && movie.Poster !== 'N/A' ? movie.Poster : fallbackPoster
        return (
          <div
            key={movie.imdbID}
            className="rounded-lg overflow-hidden bg-white/5 border border-white/10 shadow-md shadow-black/40"
          >
            <div className="aspect-[2/3] w-full overflow-hidden">
              <img src={poster} alt={movie.Title} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-3 space-y-1">
              <p className="text-sm font-semibold text-white leading-tight" title={movie.Title}>{movie.Title}</p>
              {movie.Year && <p className="text-xs text-gray-300">{movie.Year}</p>}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default GptMoviesSuggestion