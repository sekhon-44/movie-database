function SingleMovieCast({ cast }) {
    return (
        <div className="single-movie-cast">
            <h3>Cast</h3>
            <img src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt={cast.name} />
            <p>{cast.name}</p>
        </div>
    )
}
export default SingleMovieCast