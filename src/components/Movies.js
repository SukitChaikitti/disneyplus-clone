import React from 'react';
import './Movies.css';
import { selectMovies } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Movies() {

    const movies = useSelector(selectMovies);

    console.log(movies);

    return (
        <div className = 'movies'>
            <h4>Recommended for You</h4>
            <div className = 'movies__row'>
                {movies && movies.map((movie) => (
                    <Link to = {`/detail/${movie.id}`}>
                        <div className = 'movie__container'>
                            <img src = {movie.cardImg}/>
                        </div>
                    </Link>
                ))}
                
            </div>
        </div>
    )
}

export default Movies
