import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'

const useNowPlayingMovies = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies.nowPlayingMovies) || []
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [searchTerm, setSearchTerm] = React.useState('avengers')
  const fallbackPoster = 'https://via.placeholder.com/300x450?text=No+Image'
  const apiKey = '61974e65'

  const getNowPlayingMovies = React.useCallback(async (query = 'avengers') => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}&type=movie&page=1`)
      if (!response.ok) {
        throw new Error(`OMDB responded with ${response.status}`)
      }

      const data = await response.json()

      if (data.Response === 'True' && Array.isArray(data.Search) && data.Search.length) {
        dispatch(addNowPlayingMovies(data.Search))
      } else {
        setError(data.Error || 'No movies found right now')
      }
    } catch (err) {
      setError('Error fetching now playing movies')
      console.error('Error fetching now playing movies:', err)
    } finally {
      setLoading(false)
    }
  }, [apiKey, dispatch])

  React.useEffect(() => {
    getNowPlayingMovies(searchTerm)
  }, [getNowPlayingMovies, searchTerm])

  const handleSearch = (event) => {
    event.preventDefault()
    const trimmed = searchTerm.trim()
    if (trimmed) {
      getNowPlayingMovies(trimmed)
    }
  }

  return {
    movies,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    handleSearch,
    fallbackPoster,
  }
}

export default useNowPlayingMovies