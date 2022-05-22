function SingleMovieCrew({ movieCrews }) {

    return (
        <div className="single-movie-crew">
            <h2>Directors</h2>
            <ul>
                {movieCrews.map((crew, index) => (crew.job === 'Director' && <li key={`${crew.id}-${index}`}>{crew.name}{' '}</li>))}
            </ul>
        </div>
    )
}
export default SingleMovieCrew