import noPoster from '../images/no-movie-poster.jpg';
import Movies from "./Movies";
import SingleMovieCast from "./SingleMovieCast";
import SingleMovieCrew from "./SingleMovieCrew";

function SingleMovie({ movie, movieCasts, movieCrews }) {

    function minuteToSeconds() {
        const hours = movie.runtime / 60;
        const realHours = Math.floor(hours);
        const minutes = (hours - realHours) * 60;
        const realMinutes = Math.round(minutes);
        return realHours + "h " + realMinutes + "m";
    }

    const first3Genres = movie.genres.slice(0, 3);

    return (
        <>
            <div className="single-movie-poster">
                {movie.poster_path === null ?
                    <img src={noPoster} alt="No poster available" /> :
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                }
            </div>
            <div className="single-movie-info">
                <div className="single-movie-header">
                    <h1>{movie.title}</h1>
                    <svg className='heart-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"/></svg>
                    <p className='release-date'>{movie.release_date}</p>
                </div>
                <div className="single-movie-details">
                    <p className='movie-rating'>{Math.floor(movie.vote_average)*10}&#37;</p>
                    <p className='movie-duration'>{minuteToSeconds()}</p>
                    <ul className='movie-genre'>
                        {first3Genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                    </ul>
                </div>

                <p className="single-movie-overview">{movie.overview}</p>

                {/* {movieCrews.map((crew, index) => (crew.job === 'Director' && <SingleMovieCrew key={`${crew.id}-${index}`} crew={crew} />))} */}
                <SingleMovieCrew movieCrews={movieCrews}/>

                <section className='movie-cast'>
                    <h2>Cast</h2>
                    {movieCasts.map(cast => <SingleMovieCast key={cast.id} cast={cast} />)}
                </section>
            </div>
        </>
    )
}
export default SingleMovie