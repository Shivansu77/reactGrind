import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle'
import VideoBackground from './VideoBackground'

const Maincontainer = () => {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies)
    const mainMovie = movies ? movies[0] : null;
    return (
    <div >
        <Videotitle />
        <VideoBackground />
    </div>
  )
}

export default Maincontainer