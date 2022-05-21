function SingleMovieCrew({ crew }) {

    return (
        <div>
            <p>{crew.job === 'Director' && crew.name}</p>
        </div>
    )
}
export default SingleMovieCrew