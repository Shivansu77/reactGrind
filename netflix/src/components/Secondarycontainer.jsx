import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies) || []
  const fallbackPoster = 'https://via.placeholder.com/300x450?text=No+Image'

  if (!movies.length) return null

  const heroSkipped = movies.slice(1) // first item used by hero
  const featured = heroSkipped.slice(0, 10)
  const trending = heroSkipped.slice(10, 20)

  return (
    <div className="relative z-20 -mt-10 bg-gradient-to-b from-black via-black to-black/95 px-6 sm:px-10 lg:px-12 py-10 space-y-8">
      <MovieList title="Featured" movies={featured} fallbackPoster={fallbackPoster} />
      <MovieList title="Trending Now" movies={trending.length ? trending : featured} fallbackPoster={fallbackPoster} />
    </div>
  )
}

export default Secondarycontainer