import noPoster from '../images/no-movie-poster.jpg';
import SingleMovieCast from "./SingleMovieCast";
import SingleMovieCrew from "./SingleMovieCrew";
import FavButton from './FavButton';
import { useDispatch } from 'react-redux';
import { addFav, deleteFav } from '../features/favs/favsSlice';

function SingleMovie({ movie, movieCasts, movieCrews, isFav }) {

    function minuteToSeconds() {
        const hours = movie.runtime / 60;
        const realHours = Math.floor(hours);
        const minutes = (hours - realHours) * 60;
        const realMinutes = Math.round(minutes);
        return realHours + "h " + realMinutes + "m";
    }

    const first3Genres = movie.genres.slice(0, 3);

    const dispatch = useDispatch();

    function handleFavClick(addToFav, obj){
        if(addToFav === true){
            dispatch(addFav(obj));
        }else{
            dispatch(deleteFav(obj));
        }   
    }

    return (
        <>
            <section className="single-movie-poster">
                {movie.poster_path === null ?
                    <img src={noPoster} alt="No poster available" /> :
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                }
            </section>
            <section className="single-movie-info">
                <div className="single-movie-header">
                    <h1>{movie.title}</h1>

                    <p className='release-date'>{movie.release_date}
                        {isFav ? 
                            <FavButton movie={movie} remove={true} handleFavClick={handleFavClick} /> : 
                            <FavButton movie={movie} handleFavClick={handleFavClick} />
                        }
                    </p>
                </div>
                <div className="single-movie-details">
                    <p className='movie-rating'>{Math.floor(movie.vote_average) * 10}&#37;</p>
                    <p className='movie-duration'>{minuteToSeconds()}</p>
                    <ul className='movie-genre'>
                        {first3Genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                    </ul>
                </div>
                <div className="overview">
                    <h2>Overview</h2>
                    <p className="single-movie-overview">{movie.overview}</p>
                </div>
            </section>
            <section className="single-movie-crew">
                <SingleMovieCrew movieCrews={movieCrews} />
            </section>
            <section className='movie-cast'>
                <h2>Cast</h2>
                {movieCasts.map(cast => <SingleMovieCast key={cast.id} cast={cast} />)}
            </section>
        </>
    )
}
export default SingleMovie