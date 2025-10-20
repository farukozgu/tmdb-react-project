import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard({ movie }) {

    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500"

    const year = movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'

    return (
        <Link to={`/movie/${movie.id}`} className='"movie-card'>
            <div className='movie-card'>
                {movie.poster_path ? (
                    <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
                ) : (
                    <div className="no-image">No image</div>
                )}
                <div className='movie-info'>
                    <span className='movie-release-date'>{year}</span>
                    <h3>{movie.title}</h3>
                </div>

            </div>
        </Link>
    )
}

export default MovieCard