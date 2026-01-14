import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'

const Browse = () => {
  useNowPlayingMovies()
  return (
    <div className="w-full min-h-screen bg-black bg-cover bg-center">
      <div className="min-h-screen bg-gradient-to-b from-black/60 to-black/80">
        <Header />
        <Maincontainer />
        <Secondarycontainer />
      </div>
    </div>
  )
}

export default Browse