function BannerMovieCard({ movie }) {
    return (
        <div className="bannerMovieCard">
            <div className="bannerPoster">
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={`${movie.title} poster`} />
            </div>

            <div className="bannerTitle">
                <p>
                    {movie.title}
                </p>
            </div>
        </div>
    )
}
export default BannerMovieCard