import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import '../App.css'; // 

function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const API_KEY = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const searchMovies = async (query) => {
            setLoading(true);
            const endpoint = query
                ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`
                : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

            try {
                const response = await fetch(endpoint);
                const data = await response.json();
                setMovies(data.results || []);
                setTotalPages(data.total_pages || 0);
            } catch (error) {
                console.error("Film verisi çekerken hata oluştu:", error);
            } finally {
                setLoading(false);
            }
        };

        const timerId = setTimeout(() => {
            searchMovies(searchTerm);
        }, 500);

        return () => clearTimeout(timerId);
    }, [searchTerm, API_KEY, page]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setPage(1);
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    };

    return (
        <>
            <h1>Movies Database</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search movie..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            {loading ? (
                <p>Movies loading...</p>
            ) : (
                <div className="movie-container">
                    {movies.length > 0 ? (
                        movies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    ) : (
                        <p>No movies found matching your search.</p>
                    )}
                </div>

            )
            }
            {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={page === 1}>
                        Prev Page
                    </button>
                    <span>Page {page} / {totalPages}</span>
                    <button onClick={handleNextPage} disabled={page >= totalPages}>
                        Next Page
                    </button>
                </div>
            )}
        </>
    );
}

export default Home;