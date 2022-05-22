function SingleMovieCrew({ crew }) {

    return (
        <div className="single-movie-crew">
            <h3>Directors</h3>
            <p>{crew.job === 'Director' && crew.name}</p>
        </div>
    )
}
export default SingleMovieCrew