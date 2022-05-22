import MovieCard from "./MovieCard"

function Movies({movieData}) {
  return (
    <div className="movie-container">
          {movieData.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  )
}
export default Movies