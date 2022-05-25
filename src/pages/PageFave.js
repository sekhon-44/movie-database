
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Movies from '../compenents/Movies';
import { useSelector } from 'react-redux';
import MovieCard from '../compenents/MovieCard';

function PageFave() {

  const favs = useSelector((state) => state.favs.items);

  return (
    <main>
      <section className='fav-wrapper'>
        <h1>Favourite Movies</h1>
        {favs.length < 1 ? <p>No favourite movies. Return to the <Link to="/">home</Link> page to add some favourite movies.</p> : 
            <div className="fav-movies-grid">
                {favs.map((movie, i) => {
                    return <MovieCard key={i} 
                                    movie={movie}
                                    isFav={true} />
                })}
        </div>}
      </section>
    </main>
  )
}
export default PageFave