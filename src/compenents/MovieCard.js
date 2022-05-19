import {Link} from 'react-router-dom';
import noPoster from '';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
        <div className="movie-poster">
            {movie.poster_path === null ?
                <img src={noPoster} alt="No poster available" />:
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            }
        </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <Link to="/">More Info</Link>

        </div>
    </div>
  )
}

export default MovieCard