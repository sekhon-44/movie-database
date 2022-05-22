import noPoster from '../images/no-cast-poster.jpg';

function SingleMovieCast({ cast }) {
    return (
        <div className="movie-cast-card">
            {cast.profile_path === null ?
                <img src={noPoster} alt="No poster available" /> :
                <img src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt={cast.name} />
            }
            <p>{cast.name}</p>
        </div>
    )
}
export default SingleMovieCast