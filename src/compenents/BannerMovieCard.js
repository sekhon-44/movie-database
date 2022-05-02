function BannerMovieCard({ movie }) {

    return (
        <div className="bannerMovieCard">
            <div className="bannerPoster">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={`${movie.title} poster`} />
            </div>

            <div className="bannerInfo">
                <p className="title">
                    {movie.title}
                </p>

                <p className="overview">
                    {movie.overview}
                </p>
            </div>

            <div className="bannerNav">
                <button className="navButton">1</button>
                <button className="navButton">2</button>
                <button className="navButton">3</button>
            </div>

            <button className="detailsBtn">Details</button>
        </div>
    )
}

export default BannerMovieCard