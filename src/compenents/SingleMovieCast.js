function SingleMovieCast({ cast }) {
    return (
        <div className="castCard">
            <img src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt={cast.name} />
            <p>{cast.name}</p>
        </div>
    )
}
export default SingleMovieCast