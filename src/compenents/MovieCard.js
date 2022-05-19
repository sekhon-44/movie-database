import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import noPoster from '../images/no-movie-poster.jpg'

function MovieCard({ movie }) {

  const [isShown, setIsShown] = useState(false);

  const ratings = movie.vote_average * 10; 

  return (
    <div className="movie-card">
        
        <div className="movie-poster"
         onMouseEnter={() => setIsShown(true)}
         onMouseLeave={() => setIsShown(false)}>
         
            {movie.poster_path === null ?
            <img src={noPoster} alt = ' no poster available' />
            :
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
          }
          {isShown && ( 
            <div className="movie-info-hover">
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <Link to="/">More Info</Link>
            </div>
          )}
        </div>
        <div className="movie-info-static">
            <h3 className="rating">{ratings}&#37;</h3>
        </div>  
    </div>
        
  )
}
export default MovieCard