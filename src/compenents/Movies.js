import MovieCard from "./MovieCard";
import isFav from '../utilites/isFav';
import { useSelector } from 'react-redux';

function Movies({movieData}) {

  const favs = useSelector((state) => state.favs.items);

  return (
    <div className="movie-container">
          {movieData.map(movie => { 
            return <MovieCard key={movie.id} movie={movie} isFav={isFav(favs, null, movie.id)} />})}
    </div>
  )
}
export default Movies