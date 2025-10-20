import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../MovieDetail.css'

function MovieDetail() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)

    const API_KEY = import.meta.env.VITE_API_KEY;


    useEffect(() => {
        const fetchMovieDetail = async () => {
            setLoading(true)
            const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

            try {
                const response = await fetch(API_URL)
                const data = await response.json()
                setMovie(data)
            } catch (error) {
                console.error("An error occurred while capturing the movie detail:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchMovieDetail()
    }, [id, API_KEY])



    if (loading) {
        return <p>Details loading...</p>
    }

    if (!movie) {
        return <p>Movie not found</p>
    }

    const backdropUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;

    return (
        <div className="movie-detail-container">
            <div className="backdrop-image" style={{ backgroundImage: `url(${backdropUrl})` }}>

            </div>
            <div className="movie-content">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="movie-info">
                    <h1>{movie.title}</h1>
                    <p className="tagline">{movie.tagline}</p>
                    <div className="movie-rating">
                        <span>⭐ {movie.vote_average.toFixed(1)} / 10</span>
                    </div>
                    <h2>Summary</h2>
                    <p>{movie.overview}</p>
                    <Link to="/" className='back-button'>Return to Homepage</Link>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail