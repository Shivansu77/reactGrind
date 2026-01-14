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
    <div>
      <Videotitle title={title} year={year} />
      <VideoBackground />
    </div>
  )
}

export default Maincontainer
