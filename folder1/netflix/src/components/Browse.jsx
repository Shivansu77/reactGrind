import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'
import Gptsearch from './Gptsearch'
import { useDispatch, useSelector } from 'react-redux'
import { setGptSearchView } from '../utils/gptSlice'

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch)
  const dispatch = useDispatch()
  useNowPlayingMovies()

  React.useEffect(() => {
    // Ensure GPT view is closed on fresh navigation/refresh
    dispatch(setGptSearchView(false))
  }, [dispatch])
  return (
    <div className="w-full min-h-screen bg-black bg-cover bg-center">
      <div className="min-h-screen bg-gradient-to-b from-black/60 to-black/80">
        <Header />
        {
          showGptSearch ? <Gptsearch /> : <> <Maincontainer />
        <Secondarycontainer /></>
        }
       
      </div>
    </div>
  )
}

export default Browse