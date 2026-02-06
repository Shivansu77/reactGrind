import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'

const useNowPlayingMovies = () => {
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies.nowPlayingMovies) || []
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [searchTerm, setSearchTerm] = React.useState('')
  const fallbackPoster = 'https://via.placeholder.com/300x450?text=No+Image'
  const apiKey = '61974e65'

  const fetchMoviesForQuery = React.useCallback(
    async (query, pages = 2) => {
      const results = []
      for (let page = 1; page <= pages; page += 1) {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}&type=movie&page=${page}`
        )
        if (!response.ok) {
          throw new Error(`OMDB responded with ${response.status}`)
        }
        const data = await response.json()
        if (data.Response === 'True' && Array.isArray(data.Search)) {
          results.push(...data.Search)
        }
      }
      return results
    },
    [apiKey]
  )

  const getNowPlayingMovies = React.useCallback(
    async (query) => {
      setLoading(true)
      setError('')
      try {
        let fetched = []

        if (query && query.trim()) {
          fetched = await fetchMoviesForQuery(query.trim(), 3)
        } else {
          const defaultQueries = ['batman', 'spider', 'fast', 'mission', 'matrix', 'star wars']
          const batches = await Promise.all(
            defaultQueries.map((q) => fetchMoviesForQuery(q, 1))
          )
          fetched = batches.flat()
        }

        const deduped = []
        const seen = new Set()
        fetched.forEach((movie) => {
          if (movie?.imdbID && !seen.has(movie.imdbID)) {
            seen.add(movie.imdbID)
            deduped.push(movie)
          }
        })

        if (deduped.length) {
          dispatch(addNowPlayingMovies(deduped))
        } else {
          setError('No movies found right now')
        }
      } catch (err) {
        setError('Error fetching now playing movies')
        console.error('Error fetching now playing movies:', err)
      } finally {
        setLoading(false)
      }
    },
    [dispatch, fetchMoviesForQuery]
  )

  React.useEffect(() => {
    getNowPlayingMovies(searchTerm)
  }, [getNowPlayingMovies, searchTerm])

  const handleSearch = (event) => {
    event.preventDefault()
    const trimmed = searchTerm.trim()
    getNowPlayingMovies(trimmed)
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