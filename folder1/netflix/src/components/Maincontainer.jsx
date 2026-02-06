import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle'
import VideoBackground from './VideoBackground'

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)

  if (!movies || movies.length === 0) return null

  const {
    Title: title,
    Year: year,
  } = movies[0]

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <VideoBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent" />
      <Videotitle title={title} year={year} />
    </div>
  )
}

export default Maincontainer
