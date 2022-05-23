function SingleMovieCrew({ movieCrews }) {

    return (
        <>
            <h2>Directors</h2>
            <ul>
                {movieCrews.map((crew, index) => (crew.job === 'Director' && <li key={`${crew.id}-${index}`}>{crew.name}{' '}</li>))}
            </ul>
        </>
    )
}
export default SingleMovieCrew