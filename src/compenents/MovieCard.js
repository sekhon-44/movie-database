import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import noPoster from '../images/no-movie-poster.jpg'
import FavButton from './FavButton';
import { useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/favs/favsSlice';

function MovieCard({ movie, isFav }) {

  const [isShown, setIsShown] = useState(false);

  const ratings = movie.vote_average * 10; 

  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj){
      if(addToFav === true){
          dispatch(addFav(obj));
      }else{
          dispatch(deleteFav(obj));
      }   
  }

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
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <Link className={'detail-btn'} to={`/movie/${movie.id}`}>More Info</Link>
            </div>
          )}
        <div className="movie-info-static">
            <h3 className="rating">{ratings}&#37;</h3>
            {isFav ? 
              <FavButton movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
              <FavButton movie={movie} handleFavClick={handleFavClick} />
            }
        </div>  
        </div>
    </div>
        
  )
}
export default MovieCard