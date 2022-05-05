import { Link } from "react-router-dom";

function BannerMovieCard({ movie }) {

    return (
        <div className="banner-movie-card">
            <div className="banner-poster">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={`${movie.title} poster`} />
            </div>

            <div className="banner-info">
                <h3 className="title">
                    {movie.title}
                </h3>

                <p className="overview">
                    {movie.overview}
                </p>

                <Link className={'detail-btn'} to={`/movie/${movie.id}`}>More Details</Link>
            </div>
        </div>
    )
}

export default BannerMovieCard