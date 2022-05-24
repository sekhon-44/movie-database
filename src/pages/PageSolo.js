import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../globals/globals";
import SingleMovie from "../compenents/SingleMovie"
import { useSelector } from 'react-redux';
import isFav from "../utilites/isFav";

function PageSolo({ movie }) {

    const [movieData, setMovieData] = useState(false);

    const [movieCasts, setMovieCasts] = useState(false);

    const [movieCrews, setMovieCrews] = useState(false);

    const { id } = useParams();

    // https://api.themoviedb.org/3/movie/11?api_key=${API_KEY}&language=en-US

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US
            `);

            const data = await response.json();

            setMovieData(data);
        }
        fetchMovie();
    }, []);

    useEffect(() => {
        const fetchMovieCasts = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US
            `);

            const data = await response.json();

            const crew = data.crew;

            setMovieCrews(crew);

            const first5Casts = data.cast.splice(0, 5);

            setMovieCasts(first5Casts);
        }
        fetchMovieCasts();
    }, []);

    const favs = useSelector((state) => state.favs.items);

    return (
        <section className="solo-movie-container">
            {(movieData !== false && movieCasts !== false && movieCrews !== false) && <SingleMovie movie={movieData} movieCasts={movieCasts} movieCrews={movieCrews} isFav={isFav(favs, null, movieData.id)}/>}
        </section>
    )
}
export default PageSolo