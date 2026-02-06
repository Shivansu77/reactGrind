import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'

const apiKey = '61974e65'
const fallbackPoster = 'https://via.placeholder.com/300x450?text=No+Image'

const Gptsearch = () => {
  const [results, setResults] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  const fetchMovies = async (query) => {
    const trimmed = query.trim()
    if (!trimmed) {
      setError('Enter something to search')
      setResults([])
      return
    }

    setLoading(true)
    setError('')
    try {
      const pages = [1, 2]
      const requests = pages.map((page) =>
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(trimmed)}&type=movie&page=${page}`)
      )
      const responses = await Promise.all(requests)
      const jsons = await Promise.all(responses.map((res) => res.json()))

      const aggregated = jsons
        .filter((d) => d.Response === 'True' && Array.isArray(d.Search))
        .flatMap((d) => d.Search)

      const deduped = []
      const seen = new Set()
      aggregated.forEach((m) => {
        if (m?.imdbID && !seen.has(m.imdbID)) {
          seen.add(m.imdbID)
          deduped.push(m)
        }
      })

      if (deduped.length) {
        setResults(deduped)
      } else {
        setError('No matches found')
        setResults([])
      }
    } catch (err) {
      console.error('GPT search fetch failed', err)
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full min-h-screen px-6 sm:px-10 pt-28 pb-12 text-white bg-gradient-to-b from-black via-black to-black/90">
      <GptSearchBar onSearch={fetchMovies} loading={loading} />
      <GptMoviesSuggestion results={results} loading={loading} error={error} fallbackPoster={fallbackPoster} />
    </div>
  )
}

export default Gptsearch