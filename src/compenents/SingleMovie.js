import Movies from "./Movies";
import SingleMovieCast from "./SingleMovieCast";
import SingleMovieCrew from "./SingleMovieCrew";

function SingleMovie({ movie, movieCasts, movieCrews }) {

    console.log(movieCasts);

    console.log(movieCrews);

    return (
        <>
            <div className="single-movie-poster">
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="single-movie-info">
                <div className="single-movie-header">
                    <h2>{movie.title}</h2>
                    <p>{movie.release_date}</p>
                </div>
                <div className="single-movie-details">
                    <p>{movie.vote_average}</p>
                    {movie.genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
                    <p>{movie.runtime}</p>
                    <p>{movie.overview}</p>
                </div>

                <h3>Directors</h3>
                {movieCrews.map((crew, index) => <SingleMovieCrew key={`${crew.id}-${index}`} crew={crew} />)}

                <h3>Cast</h3>
                {movieCasts.map(cast => <SingleMovieCast key={cast.id} cast={cast} />)}
            </div>
        </>
    )
}
export default SingleMovie