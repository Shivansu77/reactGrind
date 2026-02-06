import React from 'react'

const GptSearchBar = ({ onSearch, loading }) => {
    const [query, setQuery] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (onSearch) onSearch(query)
    }

    return (
        <div className="mb-6">
            <form onSubmit={handleSubmit} className="flex items-center gap-3">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for movies or TV shows..."
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-600 bg-black text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-purple-600 disabled:bg-purple-900 text-white px-5 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
                >
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar